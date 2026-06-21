import profilePic from "../assets/d2f03982-4481-41d7-a009-baed9f0a0a4d.png";

function Hero() {
  return (
    <section className="text-center py-24 bg-slate-800 text-white">
      <img
        src={profilePic}
        alt="Profile"
        className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
      />
      <h1 className="text-5xl font-bold">
        Daniel Sisay
      </h1>

      <p className="mt-4 text-xl">
        Full Stack Developer
      </p>

      <a
        href="/Daniel-CV.pdf"
        download
        className="inline-block mt-6 bg-blue-500 px-6 py-3 rounded"
      >
        Download CV
      </a>
    </section>
  );
}

export default Hero;