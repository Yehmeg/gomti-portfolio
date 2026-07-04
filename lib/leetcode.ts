import { LeetcodeStats } from "@/types/leetcode";

export async function getLeetcodeStats(): Promise<LeetcodeStats> {

  const res = await fetch("/api/leetcode");

  if (!res.ok) {
    throw new Error("Failed to fetch LeetCode data.");
  }

  return res.json();
}