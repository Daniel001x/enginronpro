import { cn } from "@/lib/cn";

export function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50",
        className,
      )}
    >
      {children}
    </h2>
  );
}
