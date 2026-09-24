export interface LeetcodeProfile {
  realName: string | null;
  avatar: string;
  ranking: number;
  reputation: number;
  country: string | null;
  company: string | null;
  jobTitle: string | null;
  skills: string[] | null;
}

export interface LeetcodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  totalSubmissions: number;
  easySubmissions: number;
  mediumSubmissions: number;
  hardSubmissions: number;
  totalACSubmissions: number;
  acceptanceRate: number;
}

export interface LeetcodeTotalQuestions {
  easy: number;
  medium: number;
  hard: number;
}

export interface LeetcodeContest {
  rating: number;
  globalRanking: number;
  attendedContestsCount: number;
  topPercentage: number;
  totalParticipants: number;
}

export interface LeetcodeContestHistory {
  attended: boolean;
  trendDirection: string;
  problemsSolved: number;
  totalProblems: number;
  finishTimeInSeconds: number;
  rating: number;
  ranking: number;
  contest: {
    title: string;
    startTime: number;
  } | null;
}

export interface LeetcodeBadge {
  id: string;
  displayName: string;
  icon: string;
  creationDate: number;
}

export interface LeetcodeRecentSubmission {
  id: string;
  title: string;
  titleSlug: string;
  timestamp: number;
  lang: string;
}

export interface LeetcodeData {
  username: string;
  profile: LeetcodeProfile;
  stats: LeetcodeStats;
  totalQuestions: LeetcodeTotalQuestions;
  contest: LeetcodeContest | null;
  contestHistory: LeetcodeContestHistory[];
  submissionCalendar: Record<string, number>;
  recentSubmissions: LeetcodeRecentSubmission[];
  badges: LeetcodeBadge[];
  badgeCount: number;
}