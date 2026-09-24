import { NextResponse } from "next/server";

const USERNAME = "Yehmeg";
const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";

const GET_USER_QUERY = `
  query getUser($login: String!) {
    user(login: $login) {
      login
      avatarUrl
      name
      bio
      repositoriesContributedTo(first: 1, includeUserRepositories: true) {
        totalCount
      }
      followers {
        totalCount
      }
      following {
        totalCount
      }
      starredRepositories {
        totalCount
      }
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              color
            }
          }
        }
      }
    }
  }
`;

async function fetchGitHubGraphQL(query: string, variables: Record<string, unknown>) {
  const token = process.env.GITHUB_TOKEN;

  const res = await fetch(GITHUB_GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`GitHub GraphQL request failed: ${res.status} - ${errorText}`);
  }

  const data = await res.json();

  if (data.errors) {
    console.error("GitHub GraphQL errors:", JSON.stringify(data.errors, null, 2));
    throw new Error(data.errors[0].message);
  }

  return data.data;
}

async function fetchAllContributedRepos(login: string, token?: string): Promise<Set<string>> {
  const repoIds = new Set<string>();
  let hasNextPage = true;
  let cursor: string | null = null;

  while (hasNextPage) {
    const query = `
      query getContributedRepos($login: String!, $cursor: String) {
        user(login: $login) {
          repositoriesContributedTo(first: 100, after: $cursor, includeUserRepositories: true) {
            pageInfo {
              hasNextPage
              endCursor
            }
            nodes {
              id
              nameWithOwner
            }
          }
        }
      }
    `;

const res: Response = await fetch(GITHUB_GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({ query, variables: { login, cursor } }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`GitHub GraphQL request failed: ${res.status} - ${errorText}`);
    }

    const data = await res.json();

    if (data.errors) {
      console.error("GitHub GraphQL errors:", JSON.stringify(data.errors, null, 2));
      throw new Error(data.errors[0].message);
    }

    const repos = data.data?.user?.repositoriesContributedTo;
    if (repos?.nodes) {
      repos.nodes.forEach((repo: any) => {
        if (repo.id) {
          repoIds.add(repo.id);
        }
      });
    }

    hasNextPage = repos?.pageInfo?.hasNextPage ?? false;
    cursor = repos?.pageInfo?.endCursor ?? null;
  }

  return repoIds;
}

async function fetchAllRepoStars(login: string, token?: string): Promise<number> {
  let totalStars = 0;
  let hasNextPage = true;
  let cursor: string | null = null;

  while (hasNextPage) {
    const query = `
      query getUserRepos($login: String!, $cursor: String) {
        user(login: $login) {
          repositories(privacy: PUBLIC, first: 100, after: $cursor) {
            pageInfo {
              hasNextPage
              endCursor
            }
            nodes {
              stargazerCount
            }
          }
        }
      }
    `;

    const res: Response = await fetch(GITHUB_GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({ query, variables: { login, cursor } }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`GitHub GraphQL request failed: ${res.status} - ${errorText}`);
    }

    const data = await res.json();

    if (data.errors) {
      console.error("GitHub GraphQL errors:", JSON.stringify(data.errors, null, 2));
      throw new Error(data.errors[0].message);
    }

    const repos = data.data?.user?.repositories;
    if (repos?.nodes) {
      totalStars += repos.nodes.reduce((sum: number, repo: any) => sum + (repo.stargazerCount || 0), 0);
    }

    hasNextPage = repos?.pageInfo?.hasNextPage ?? false;
    cursor = repos?.pageInfo?.endCursor ?? null;
  }

  return totalStars;
}

export async function GET() {
  const hasToken = !!process.env.GITHUB_TOKEN;
  
  if (!hasToken) {
    console.warn("=== GitHub API: GITHUB_TOKEN not set ===");
    console.warn("Contribution calendar, stars, and active days require authentication.");
    console.warn("Create a token at: https://github.com/settings/tokens");
    console.warn("Scopes: read:user, public_repo");
    console.warn("Add to .env.local: GITHUB_TOKEN=your_token_here");
    console.warn("==========================================");
  }

  try {
    const data = await fetchGitHubGraphQL(GET_USER_QUERY, { login: USERNAME });

    if (!data?.user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const user = data.user;
    const calendar = user.contributionsCollection?.contributionCalendar;

    let weeks: Array<{
      date: string;
      contributionCount: number;
      color: string;
    }[]> = [];
    let totalContributions = 0;

    if (calendar?.weeks) {
      weeks = calendar.weeks.map((week: any) =>
        week.contributionDays.map((day: any) => ({
          date: day.date,
          contributionCount: day.contributionCount,
          color: day.color,
        }))
      );
      totalContributions = calendar.totalContributions;
    }

    // Calculate active days (days with > 0 contributions)
    const activeDays = weeks.flat().filter((d) => d.contributionCount > 0).length;

    // Calculate total stars on ALL user's own public repositories (with pagination)
    const token = process.env.GITHUB_TOKEN;
    const totalStars = await fetchAllRepoStars(USERNAME, token);

    // Calculate repositories where user has actually contributed (including own repos)
    const contributedRepoIds = await fetchAllContributedRepos(USERNAME, token);
    const contributedReposCount = contributedRepoIds.size;

    // DEBUG LOGGING
    console.log("=== GitHub API Debug ===");
    console.log("Has token:", hasToken);
    console.log("User login:", user.login);
    console.log("Contributed repos count (from API):", user.repositoriesContributedTo?.totalCount);
    console.log("Contributed repos count (paginated, deduped):", contributedReposCount);
    console.log("Stars (starredRepos):", user.starredRepositories?.totalCount);
    console.log("Stars (own repos sum - all pages):", totalStars);
    console.log("Followers:", user.followers?.totalCount);
    console.log("Following:", user.following?.totalCount);
    console.log("Total contributions:", totalContributions);
    console.log("Active days:", activeDays);
    console.log("Weeks count:", weeks.length);
    console.log("First week days:", weeks[0]?.length);
    console.log("Sample day:", weeks[0]?.[0]);
    console.log("==========================");

    return NextResponse.json({
      login: user.login,
      avatarUrl: user.avatarUrl,
      name: user.name,
      bio: user.bio,
      publicRepos: contributedReposCount, // Now represents repos with actual contributions
      followers: user.followers?.totalCount ?? 0,
      following: user.following?.totalCount ?? 0,
      stars: totalStars,
      totalContributions,
      activeDays,
      weeks,
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
      },
    });

  } catch (e) {
    console.error("GitHub API error:", e);

    // Fallback to REST API for basic profile
    try {
      const res = await fetch(`https://api.github.com/users/${USERNAME}`, {
        next: { revalidate: 3600 },
      });
      if (res.ok) {
        const user = await res.json();
        console.warn("GitHub API: Using REST fallback (no contribution data)");
        return NextResponse.json({
          login: user.login,
          avatarUrl: user.avatar_url,
          name: user.name,
          bio: user.bio,
          publicRepos: user.public_repos,
          followers: user.followers,
          following: user.following,
          stars: 0,
          totalContributions: 0,
          activeDays: 0,
          weeks: [],
        }, {
          headers: {
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
          },
        });
      }
    } catch {}

    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 500 }
    );
  }
}