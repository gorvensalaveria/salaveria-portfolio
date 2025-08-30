const skills = ["React", "Next.js", "Node.js", "TypeScript", "PHP", "Python", "AWS", "SEO", "Tailwind CSS"];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <div key={skill} className="p-4 border rounded-xl text-center shadow-sm bg-white">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
