function Projects() {
  return (
    <section id="projects" className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <a
          href="https://github.com/DevDani12/Inventory-system"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-6 bg-white shadow rounded hover:shadow-lg hover:scale-[1.02] transition-all"
        >
          <h3 className="text-xl font-semibold mb-2">
            Inventory System
          </h3>
          <p className="text-gray-600">
            A full-stack inventory management system built with React, Node.js, Express.js, and MongoDB.
          </p>
        </a>

        <a
          href="https://github.com/belaynewzewdie90-boop/merkato-store"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-6 bg-white shadow rounded hover:shadow-lg hover:scale-[1.02] transition-all"
        >
          <h3 className="text-xl font-semibold mb-2">
            Merkato Store
          </h3>
          <p className="text-gray-600">
            A team collaboration e-commerce platform for online marketplace transactions.
          </p>
        </a>
      </div>
    </section>
  );
}

export default Projects;