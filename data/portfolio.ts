export type SkillGroup = {
  label: string;
  items: string[];
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  status?: string;
};

export const portfolio = {
  name: "Daniel",
  handle: "@daniel",
  location: "India",
  headline: "Developer • Design-minded • Always learning",
  bio: [
    "I’m Daniel, a developer living in India. I love to code and sometimes break things just to see how they work — then (hopefully) fix them better.",
    "Whether it’s building full‑stack apps, tweaking UI details, or debugging something late at night, I’m all in.",
    "When I’m not deep in code, you’ll probably catch me watching movies, playing chess, cycling, or lifting at the gym.",
  ],
  cta: {
    availabilityText: "Available for new opportunities",
    cvLabel: "Download CV",
    cvHref: "#",
  },
  links: {
    email: "mailto:you@example.com",
    github: "https://github.com/your-username",
    linkedin: "https://www.linkedin.com/in/your-profile",
    x: "https://x.com/your-handle",
    blog: "#",
    discord: "#",
  },
  skills: [
    {
      label: "LANGUAGES",
      items: ["JavaScript", "TypeScript", "HTML", "CSS"],
    },
    {
      label: "FRAMEWORKS / LIBRARIES",
      items: ["React", "Next.js", "Express.js", "Tailwind CSS"],
    },
    {
      label: "BACKEND & RUNTIME",
      items: ["Node.js"],
    },
    {
      label: "DATABASE",
      items: ["MongoDB"],
    },
    {
      label: "DEVELOPER TOOLS",
      items: ["Git", "GitHub", "Docker"],
    },
  ] satisfies SkillGroup[],
  projects: [
    {
      title: "E‑Commerce Platform",
      description:
        "Full‑stack e‑commerce solution with modern UI and secure payment processing.",
      tags: ["React", "Node.js", "MongoDB"],
      status: "Coming Soon",
      href: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real‑time updates and team features.",
      tags: ["Next.js", "Express.js", "MongoDB"],
      status: "Coming Soon",
      href: "#",
    },
  ] satisfies Project[],
};
