"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";

function getUsernameFromGitHubUrl(url: string) {
  try {
    const u = new URL(url);
    if (u.hostname !== "github.com") return null;
    const parts = u.pathname.split("/").filter(Boolean);
    if (!parts[0]) return null;
    return parts[0];
  } catch {
    return null;
  }
}

export function GitHubContributions({
  githubUrl,
  username,
  className,
}: {
  githubUrl?: string;
  username?: string;
  className?: string;
}) {
  const [refreshKey, setRefreshKey] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const resolvedUsername =
    username ?? (githubUrl ? getUsernameFromGitHubUrl(githubUrl) : null);

  if (!resolvedUsername) return null;

  // Force a daily refresh in the browser cache + manual refresh key
  const dailyCacheKey = new Date().toISOString().slice(0, 10);
  const src = `https://ghchart.rshah.org/${resolvedUsername}.svg?v=${dailyCacheKey}&r=${refreshKey}`;

  const handleRefresh = () => {
    setIsRefreshing(true);
    setRefreshKey((prev) => prev + 1);
    
    // Reset loading state after animation
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  return (
    <div className={cn("relative", className)}>
      {/* Refresh Button */}
      <button
        onClick={handleRefresh}
        disabled={isRefreshing}
        className="absolute -top-1 right-0 z-10 rounded-lg p-2 text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900 disabled:opacity-50 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
        aria-label="Refresh contributions"
        title="Refresh contributions"
      >
        <svg
          viewBox="0 0 24 24"
          className={cn("h-5 w-5", isRefreshing && "animate-spin")}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
        </svg>
      </button>

      {/* Contributions Graph */}
      <div className="overflow-x-auto">
        <Image
          src={src}
          alt={`${resolvedUsername}'s GitHub contribution graph`}
          width={720}
          height={140}
          unoptimized
          className="h-auto min-w-[720px] max-w-none"
          key={refreshKey} // Force re-render on refresh
        />
      </div>
    </div>
  );
}
