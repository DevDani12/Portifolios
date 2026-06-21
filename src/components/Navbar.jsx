function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Daniel</h1>

      <div className="space-x-4">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;