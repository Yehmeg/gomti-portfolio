import { NextResponse } from "next/server";
import { request, gql } from "graphql-request";

const query = gql`
query getUser($username: String!) {
  matchedUser(username: $username) {

    username
    profile {
      ranking
      reputation
      userAvatar
    }

    badges {
      id
      displayName
      icon
    }

    submitStats {
      acSubmissionNum {
        difficulty
        count
      }
    }
  }
}
`;

export async function GET() {
  try {

    const data: any = await request(
      "https://leetcode.com/graphql",
      query,
      {
        username: "gomtiii",
      }
    );

    const solved = data.matchedUser.submitStats.acSubmissionNum;

    return NextResponse.json({

      totalSolved: solved[0].count,
      easySolved: solved[1].count,
      mediumSolved: solved[2].count,
      hardSolved: solved[3].count,

      ranking: data.matchedUser.profile.ranking,

      reputation: data.matchedUser.profile.reputation,

      avatar: data.matchedUser.profile.userAvatar,

      badges: data.matchedUser.badges.length,

      recentBadge:
        data.matchedUser.badges.length > 0
          ? data.matchedUser.badges[0]
          : null,
    });

  } catch (e) {

    console.log(e);

    return NextResponse.json(
      { error: "Failed" },
      { status: 500 }
    );

  }
}