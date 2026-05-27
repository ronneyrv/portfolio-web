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
          className="md:hidden absolute top-24 right-0 min-w-50 bg-slate-900 border-t border-slate-800 rounded-b-2xl rounded-tl-3xl px-3 py-3 flex flex-col gap-2 z-50 shadow-xl"
        >
          <Link to="/" onClick={() => setMenuOpen(false)} className="block px-3 py-2 rounded-lg transition-all duration-300 hover:bg-slate-800 hover:text-blue-400 ">
            Início
          </Link>

          <Link to="/about" onClick={() => setMenuOpen(false)} className="block px-3 py-2 rounded-lg transition-all duration-300 hover:bg-slate-800 hover:text-blue-400 ">
            Sobre mim
          </Link>

          <Link to="/projects" onClick={() => setMenuOpen(false)} className="block px-3 py-2 rounded-lg transition-all duration-300 hover:bg-slate-800 hover:text-blue-400 ">
            Projetos
          </Link>
        </div>
      )}
    </header>
  );
}
