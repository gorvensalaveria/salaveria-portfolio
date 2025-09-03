type ExperienceItem = {
  role: string;
  company: string;
  location?: string;
  period: string; // e.g., "2024 – Present"
  bullets: string[];
};

const experience: ExperienceItem[] = [
  {
    role: "Solutions Developer",
    company: "Capytech",
    period: "2024 – Present",
    bullets: [
      "Built custom WordPress themes/plugins and Moodle extensions.",
      "Delivered scalable features across LMS and marketing sites.",
      "Collaborated with designers and stakeholders to ship on time.",
    ],
  },
  {
    role: "Web Developer (OJT)",
    company: "University",
    period: "2019",
    bullets: [
      "Implemented internal tools for department workflows.",
      "Assisted in frontend development and basic backend tasks.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-gray-100 py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center">Experience</h2>

        <div className="relative mx-auto mt-10 max-w-3xl">
          {/* timeline line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gray-300 sm:left-1/2" />

          <ul className="space-y-10">
            {experience.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <li
                  key={`${item.company}-${i}`}
                  className="relative sm:flex sm:items-center"
                >
                  {/* dot */}
                  <span className="absolute left-4 inline-block h-3 w-3 rounded-full border-2 border-white bg-blue-600 shadow sm:left-1/2 sm:-translate-x-1/2" />

                  <div
                    className={[
                      "mt-6 rounded-2xl border bg-white p-6 shadow-sm transition",
                      "sm:w-[calc(50%-2rem)]",
                      isLeft ? "sm:mr-auto" : "sm:ml-auto",
                    ].join(" ")}
                  >
                    <h3 className="text-lg font-semibold">
                      {item.role} <span className="text-gray-500">@ {item.company}</span>
                    </h3>
                    <p className="text-sm text-gray-500">{item.period}</p>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-gray-700">
                      {item.bullets.map((b, idx) => (
                        <li key={idx}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        
      </div>
    </section>
  );
}
