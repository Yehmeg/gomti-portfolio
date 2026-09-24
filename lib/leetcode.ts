import { LeetcodeData } from "@/types/leetcode";

interface LeetcodeErrorResponse {
  error: string;
}

export async function getLeetcodeData(): Promise<LeetcodeData> {
  const res = await fetch("/api/leetcode");

  if (!res.ok) {
    const errorData: LeetcodeErrorResponse = await res.json().catch(() => ({ error: "Failed to fetch LeetCode data." }));
    throw new Error(errorData.error || "Failed to fetch LeetCode data.");
  }

  return res.json();
}