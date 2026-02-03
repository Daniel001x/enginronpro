import { cn } from "@/lib/cn";

export function Pill({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-black/10 bg-zinc-50 px-3 py-1 text-sm text-zinc-700 dark:border-white/15 dark:bg-zinc-900/40 dark:text-zinc-200",
        className,
      )}
    >
      {children}
    </span>
  );
}
