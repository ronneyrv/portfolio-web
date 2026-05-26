import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-slate-950 border-b border-slate-800">
      <nav className="h-24 px-8 lg:px-20 flex justify-between items-center">
        <Link to="/" className="text-3xl md:text-5xl font-bold">
          Portfólio
        </Link>

        <div className="hidden md:flex gap-8 text-lg">
          <Link to="/" className="hover:text-blue-400 transition">
            Início
          </Link>
          <Link to="/about" className="hover:text-blue-400 transition">
            Sobre min
          </Link>
          <Link to="/projects" className="hover:text-blue-400 transition">
            Projetos
          </Link>
        </div>
        <button
          className="
          md:hidden
          text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
      {menuOpen && (
        <div
          className="md:hidden flex flex-col gap-6 px-8 py-8 bg-slate-900"
        >
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>

          <Link to="/projects" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
        </div>
      )}
    </header>
  );
}
