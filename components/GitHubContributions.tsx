import Image from "next/image";
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
  const resolvedUsername =
    username ?? (githubUrl ? getUsernameFromGitHubUrl(githubUrl) : null);

  if (!resolvedUsername) return null;

  // Force a daily refresh in the browser cache.
  const dailyCacheKey = new Date().toISOString().slice(0, 10);

  // Public SVG chart service (no auth required). This will reflect your latest GitHub activity.
  const src = `https://ghchart.rshah.org/${resolvedUsername}.svg?v=${dailyCacheKey}`;

  return (
    <div className={cn("overflow-x-auto", className)}>
      <Image
        src={src}
        alt={`${resolvedUsername}'s GitHub contribution graph`}
        width={720}
        height={140}
        unoptimized
        className="h-auto min-w-[720px] max-w-none"
      />
    </div>
  );
}
