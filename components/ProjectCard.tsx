import Link from "next/link";
import { cn } from "@/lib/cn";
import type { Project } from "@/data/portfolio";
import { Pill } from "@/components/Pill";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm dark:bg-zinc-950">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded bg-zinc-300 dark:bg-zinc-700" />
            <h3 className="truncate text-base font-semibold text-zinc-900 dark:text-zinc-50">
              {project.title}
            </h3>
            {project.status ? (
              <span className="ml-auto text-xs font-medium text-orange-600 dark:text-orange-400">
                {project.status}
              </span>
            ) : null}
          </div>
          <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            {project.description}
          </p>
        </div>
        {project.href ? (
          <Link
            href={project.href}
            className={cn(
              "shrink-0 rounded-lg border border-black/10 p-2 text-zinc-700 hover:bg-zinc-50 dark:border-white/10 dark:text-zinc-200 dark:hover:bg-zinc-900/40",
            )}
            aria-label={`Open ${project.title}`}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 3h7v7" />
              <path d="M10 14L21 3" />
              <path d="M21 14v7h-7" />
              <path d="M3 10V3h7" />
              <path d="M3 21h7v-7" />
            </svg>
          </Link>
        ) : null}
      </div>

      {project.tags?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Pill key={tag} className="text-xs">
              {tag}
            </Pill>
          ))}
        </div>
      ) : null}
    </div>
  );
}
