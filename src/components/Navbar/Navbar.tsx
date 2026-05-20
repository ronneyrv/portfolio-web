import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl">Portfolio</h1>
        <div className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </div>
    </nav>
  );
}
