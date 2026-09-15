import { profile } from "../../data/profile";
import profileImage from "../../assets/profile.jpeg";

export default function HomeAbout() {
  return (
    <section
      id="about"
      className="w-full px-8 lg:px-20 py-20 scroll-mt-24 bg-slate-900/40"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex justify-center shrink-0">
          <img
            src={profileImage}
            alt={profile.name}
            className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover border-2 border-blue-500 shadow-2xl hover:scale-105 transition-all duration-300"
          />
        </div>

        <div className="max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold">Sobre mim</h2>

          <div className="mt-8 text-lg lg:text-xl text-slate-300 leading-8 text-justify space-y-6">
            {profile.bio.split("\n\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 space-y-5">
            <div>
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide">
                Backend
              </h3>

              <div className="flex flex-wrap gap-3 mt-3">
                {profile.backend.map((technology) => (
                  <span
                    key={technology}
                    className="px-3 py-1 rounded-full bg-slate-800 text-sm text-white hover:bg-blue-600 hover:scale-105 transition-all"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide">
                Frontend
              </h3>

              <div className="flex flex-wrap gap-3 mt-3">
                {profile.frontend.map((technology) => (
                  <span
                    key={technology}
                    className="px-3 py-1 rounded-full bg-slate-800 text-sm text-white hover:bg-blue-600 hover:scale-105 transition-all"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide">
                Database
              </h3>

              <div className="flex flex-wrap gap-3 mt-3">
                {profile.database.map((technology) => (
                  <span
                    key={technology}
                    className="px-3 py-1 rounded-full bg-slate-800 text-sm text-white hover:bg-blue-600 hover:scale-105 transition-all"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide">
                DevOps & Tools
              </h3>

              <div className="flex flex-wrap gap-3 mt-3">
                {profile.tools.map((technology) => (
                  <span
                    key={technology}
                    className="px-3 py-1 rounded-full bg-slate-800 text-sm text-white hover:bg-blue-600 hover:scale-105 transition-all"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
