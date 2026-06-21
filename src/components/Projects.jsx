function Projects() {
  return (
    <section id="projects" className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-4 shadow rounded">
          Student Management System
        </div>

        <div className="p-4 shadow rounded">
          Portfolio Website
        </div>

        <div className="p-4 shadow rounded">
          E-Commerce Website
        </div>
      </div>
    </section>
  );
}

export default Projects;