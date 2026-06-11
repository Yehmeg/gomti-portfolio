"use client";

export default function AuroraBackground() {
  return (
    <>
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 blur-[150px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full" />

      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
    </>
  );
}