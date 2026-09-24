import { NextResponse } from "next/server";
import { request, gql } from "graphql-request";

const LEETCODE_USERNAME = process.env.LEETCODE_USERNAME || "gomtiii";

const query = gql`
query getUserProfile($username: String!) {
  matchedUser(username: $username) {
    username
    profile {
      ranking
      reputation
      userAvatar
      realName
      aboutMe
      countryName
      company
      jobTitle
      skillTags
      postViewCount
      postViewCountDiff
      reputationDiff
    }
    badges {
      id
      displayName
      icon
      creationDate
    }
    submitStats {
      acSubmissionNum {
        difficulty
        count
        submissions
      }
      totalSubmissionNum {
        difficulty
        count
        submissions
      }
    }
    submissionCalendar
  }
  userContestRanking(username: $username) {
    attendedContestsCount
    rating
    globalRanking
    totalParticipants
    topPercentage
  }
  userContestRankingHistory(username: $username) {
    attended
    trendDirection
    problemsSolved
    totalProblems
    finishTimeInSeconds
    rating
    ranking
    contest {
      title
      startTime
    }
  }
}
`;

const totalQuestionsQuery = gql`
query getTotalQuestions {
  totalQuestions {
    total
    easy
    medium
    hard
  }
}
`;

async function fetchWithCache() {
  const [userData, totalQuestionsData] = await Promise.all([
    request("https://leetcode.com/graphql", query, { username: LEETCODE_USERNAME }),
    request("https://leetcode.com/graphql", totalQuestionsQuery).catch(() => null)
  ]);
  return { userData, totalQuestionsData };
}

export async function GET() {
  try {
    const { userData: data, totalQuestionsData } = await fetchWithCache();

    if (!data.matchedUser) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const user = data.matchedUser;
    const contest = data.userContestRanking;
    const contestHistory = data.userContestRankingHistory;

    const acStats = user.submitStats.acSubmissionNum;
    const totalStats = user.submitStats.totalSubmissionNum;

    const getStat = (arr: any[], difficulty: string) => 
      arr.find((s: any) => s.difficulty === difficulty) || { count: 0, submissions: 0 };

    const totalSolved = getStat(acStats, "All").count;
    const easySolved = getStat(acStats, "Easy").count;
    const mediumSolved = getStat(acStats, "Medium").count;
    const hardSolved = getStat(acStats, "Hard").count;

    const totalACSubmissions = getStat(acStats, "All").submissions;
    const totalSubmissions = getStat(totalStats, "All").submissions;
    const easySubmissions = getStat(totalStats, "Easy").submissions;
    const mediumSubmissions = getStat(totalStats, "Medium").submissions;
    const hardSubmissions = getStat(totalStats, "Hard").submissions;

    // Correct acceptance rate: total accepted submissions / total submissions
    const acceptanceRate = totalSubmissions > 0 
      ? ((totalACSubmissions / totalSubmissions) * 100).toFixed(2)
      : "0.0";

    // Parse submission calendar - keys are Unix timestamps (seconds)
    let submissionCalendar: Record<string, number> = {};
    try {
      const rawCalendar = JSON.parse(user.submissionCalendar || "{}");
      // Convert timestamp keys to YYYY-MM-DD for easier lookup
      for (const [timestampStr, count] of Object.entries(rawCalendar)) {
        const timestamp = parseInt(timestampStr);
        if (!isNaN(timestamp)) {
          const date = new Date(timestamp * 1000);
          const key = date.toISOString().split("T")[0];
          submissionCalendar[key] = count as number;
        }
      }
    } catch {
      submissionCalendar = {};
    }

    // Get total questions per difficulty from separate query
    let totalQuestions = { easy: 962, medium: 2109, hard: 970 }; // fallback defaults
    if (totalQuestionsData?.totalQuestions) {
      totalQuestions = {
        easy: totalQuestionsData.totalQuestions.easy,
        medium: totalQuestionsData.totalQuestions.medium,
        hard: totalQuestionsData.totalQuestions.hard,
      };
    }

    const badges = user.badges?.map((b: any) => ({
      id: b.id,
      displayName: b.displayName,
      icon: b.icon,
      creationDate: b.creationDate,
    })) || [];

    return NextResponse.json({
      username: user.username,
      profile: {
        realName: user.profile.realName,
        avatar: user.profile.userAvatar,
        ranking: user.profile.ranking,
        reputation: user.profile.reputation,
        country: user.profile.countryName,
        company: user.profile.company,
        jobTitle: user.profile.jobTitle,
        skills: user.profile.skillTags,
      },
      stats: {
        totalSolved,
        easySolved,
        mediumSolved,
        hardSolved,
        totalSubmissions,
        easySubmissions,
        mediumSubmissions,
        hardSubmissions,
        totalACSubmissions,
        acceptanceRate: parseFloat(acceptanceRate),
      },
      totalQuestions,
      contest: contest ? {
        rating: contest.rating,
        globalRanking: contest.globalRanking,
        attendedContestsCount: contest.attendedContestsCount,
        topPercentage: contest.topPercentage,
        totalParticipants: contest.totalParticipants,
      } : null,
      contestHistory: contestHistory?.slice(-5).map((c: any) => ({
        attended: c.attended,
        trendDirection: c.trendDirection,
        problemsSolved: c.problemsSolved,
        totalProblems: c.totalProblems,
        finishTimeInSeconds: c.finishTimeInSeconds,
        rating: c.rating,
        ranking: c.ranking,
        contest: c.contest ? {
          title: c.contest.title,
          startTime: c.contest.startTime,
        } : null,
      })) || [],
      submissionCalendar,
      recentSubmissions: [], // recentAcSubmissionList not available in public API
      badges,
      badgeCount: badges.length,
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
      },
    });

  } catch (e) {
    console.error("LeetCode API error:", e);
    return NextResponse.json(
      { error: "Failed to fetch LeetCode data" },
      { status: 500 }
    );
  }
}