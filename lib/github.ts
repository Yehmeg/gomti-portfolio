import { GithubUser } from "@/types/github";

export async function getGithubUser(): Promise<GithubUser> {
  const res = await fetch(`/api/github`, {
    next: {
      revalidate: 3600,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch GitHub profile.");
  }

  return res.json();
}