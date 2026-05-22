import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-800 bg-slate-950 px-8 lg:px-20 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          <h3 className="text-xl font-bold">Ronney Rocha</h3>
          <p className="text-slate-400 mt-2">Full Stack Developer</p>
        </div>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="https://github.com/ronneyrv"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://linkedin.com/in/ronney-rocha"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin size={24} />
          </a>

          <a
            href="mailto:ronneyrv@gmail.com"
            className="hover:text-blue-400 transition"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
      <div className="text-center text-slate-500 mt-2">
        &copy; {new Date().getFullYear()} Ronney Rocha
      </div>
    </footer>
  );
}
