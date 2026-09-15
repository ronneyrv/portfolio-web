import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function HomeContact() {
  return (
    <section id="contact" className="w-full px-8 lg:px-20 py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold">Contato</h2>

        <p className="mt-6 max-w-2xl mx-auto text-lg lg:text-xl text-slate-400 leading-8">
          Estou aberto a novas oportunidades como desenvolvedor e a projetos em
          que eu possa contribuir com minhas habilidades em desenvolvimento web
          e backend. Se quiser conversar sobre uma oportunidade ou conhecer
          melhor meu trabalho, entre em contato comigo através dos canais
          abaixo.
        </p>

        <div className="flex justify-center items-center gap-8 mt-10 mb-20">
          <a
            href="mailto:ronneyrv@gmail.com"
            className="flex flex-col items-center gap-2 hover:text-blue-400 transition"
            aria-label="Email"
          >
            <FaEnvelope size={30} />
            <span className="text-sm">E-mail</span>
          </a>

          <a
            href="https://github.com/ronneyrv"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-2 hover:text-blue-400 transition"
            aria-label="GitHub"
          >
            <FaGithub size={30} />
            <span className="text-sm">GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/ronney-rocha"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-2 hover:text-blue-400 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={30} />
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
