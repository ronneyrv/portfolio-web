import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full bg-slate-950 border-b border-slate-800">
      <nav className="w-full h-24 px-8 lg:px-20 flex justify-between items-center">
        <h1 className="text-5xl font-bold">Portfolio</h1>

        <div className="flex gap-8 text-lg">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
        </div>

      </nav>
    </header>
  );
}
