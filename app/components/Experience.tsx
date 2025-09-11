type ExperienceItem = {
  role: string;
  company: string;
  location?: string;
  period: string; // e.g., "2024 – Present"
  bullets: string[];
};

const experience: ExperienceItem[] = [
  {
    role: "Full-Stack Wordpress Developer",
    company: "Pandr",
    period: "August 2025 – Present",
    bullets: [
      "Developed and launched a WordPress website from scratch tailored for IT consulting services, ensuring a professional and scalable digital presence.",
      "Designed and built custom themes and plugins, implemented Elementor layouts, and integrated WooCommerce for service offerings and transactions.",
      "Created structured service showcase pages, consultation booking forms, client contact forms, and blog/insight sections to highlight expertise and generate leads.",
      "Integrated third-party APIs, payment gateways, and business systems to streamline workflows and enhance client engagement.",
      "Implemented SEO best practices, caching, and performance optimization tools to improve visibility and loading speed.",
      "Added security and compliance features including SSL, reCAPTCHA, and GDPR-ready cookie notices to protect data and build client trust.",
      "Supported content management and client training, enabling non-technical staff to update and manage site content efficiently.",
      "Collaborated with cross-functional teams to deliver cost-effective IT solutions, aligned with business objectives and industry standards.",
    ],
  },
  {
    role: "Solutions Developer",
    company: "iSolution LTD",
    period: "January 2025 – Present",
    bullets: [
      "Developed and maintained the Practice Tests Academy website using WordPress and Moodle",
      "Managed hosting and deployment of websites and LMS through Cloudways.",
      "Updated, revised, and optimized WordPress plugins to improve functionality and performance.",
      "Designed and customized pages using Elementor, ensuring responsive and user-friendly layouts.",
      "Implemented and managed WooCommerce features for e-commerce functionality, including product setup, checkout customization, and payment integration.",
      "Applied frontend UI changes and backend customizations to enhance user experience and system efficiency.",
      "Assisted in troubleshooting and resolving technical issues for websites and applications.",
      "Created, tested, and deployed custom applications and integrations to support business needs.",
    ],
  },
  {
    role: "Solutions Developer",
    company: "Capytech",
    period: "November 2023 - July 2025",
    bullets: [
      "Create web applications from scratch using PHP, JavaScript, Python, React, Node.js, MySQL, AWS, and other necessary technologies to build and scale web solutions.",
      "Develop custom WordPress themes and plugins from scratch based on creative designs and technical specifications.",
      "Design, develop, and maintain custom Moodle themes, plugins, and modules to improve LMS functionality and user experience.",
      "Experienced in using AWS to deploy, manage, and scale web applications.",
      "Strong problem-solving skills with a focus on delivering scalable, high-quality solutions.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "GGS Lending Corporation",
    period: "March 2021 - March 2023",
    bullets: [
      "Designed, developed, and maintained web applications to support business operations",
      "Integrated front-end and back-end technologies to ensure seamless user experiences.",
      "Worked with databases and APIs to enhance data accessibility and processing.",
      "Collaborated with stakeholders to optimize system performance and security.",
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
                      {item.role}{" "}
                      <span className="text-gray-500">@ {item.company}</span>
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
