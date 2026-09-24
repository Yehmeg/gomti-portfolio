export interface GithubUser {
  login: string;
  avatarUrl: string;
  name: string | null;
  bio: string | null;
  publicRepos: number;
  followers: number;
  following: number;
  stars: number;
  totalContributions: number;
  activeDays: number;
  weeks: Array<Array<{
    date: string;
    contributionCount: number;
    color: string;
  }>>;
}