import { GithubUser } from "@/types/github";

const USERNAME = "Yehmeg";

export async function getGithubUser(): Promise<GithubUser> {
  const res = await fetch(
    `https://api.github.com/users/${USERNAME}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch GitHub profile.");
  }

  return res.json();
}