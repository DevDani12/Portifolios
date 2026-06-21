function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "GitHub",
    "Tailwind CSS",
  ];

  return (
    <section id="skills" className="py-16 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          My Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-5 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="font-semibold text-lg">
                {skill}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;