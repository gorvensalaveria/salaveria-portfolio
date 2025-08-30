type Project = {
  title: string;
  description: string;
  tech: string[];
  href?: string;
  repo?: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js, TypeScript, and Tailwind.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "#",
    repo: "https://github.com/yourgithub/portfolio",
  },
  {
    title: "Moodle Customization",
    description: "Custom themes and plugins for Moodle LMS used by clients.",
    tech: ["PHP", "Moodle", "AWS"],
    href: "#",
  },
  {
    title: "WordPress Theme",
    description: "Custom WP theme with ACF and SEO best practices.",
    tech: ["WordPress", "ACF", "SEO"],
    href: "#",
    repo: "https://github.com/yourgithub/wp-theme",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center">Projects</h2>
        <p className="mt-2 text-center text-gray-600">
          Selected work showcasing problem solving, polish, and real-world impact.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-gray-600">{p.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border px-3 py-1 text-sm text-gray-700"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex gap-4">
                {p.href && (
                  <a
                    href={p.href}
                    className="text-blue-600 underline-offset-2 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                )}
                {p.repo && (
                  <a
                    href={p.repo}
                    className="text-blue-600 underline-offset-2 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
