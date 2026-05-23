import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImage from "../../assets/profile.jpeg";

import type { Profile } from "../../types/Profiles";

interface ProfileCardProps {
  profile: Profile;
}

export default function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <section className="w-full min-h-[calc(100vh-400px)] px-8 lg:px-20 py-16">
      <div className=" w-full flex flex-col lg:flex-row items-center gap-16">
        <div className=" flex justify-center">
          <img
            src={profileImage}
            alt={profile.name}
            className="w-72 h-72 rounded-full object-cover border-2 border-blue-500 shadow-2xl hover:scale-105 transition-all duration-300"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-5xl font-bold text-white mt-2">{profile.name}</h1>

          <h2 className="text-2xl text-slate-400 mt-4">{profile.role}</h2>

          <p className=" mt-8 max-w-3xl text-slate-300 leading-8">
            {profile.bio}
          </p>

          <div className="flex flex-col lg:flex-row flex-wrap gap-3 mt-4">
            <div className="flex flex-col">
              <h3 className="text-2xl text-slate-400 mt-4 animate-pulse">Frontend</h3>
              <div className="flex gap-2">
                {profile.frontend.map((frontend) => (
                  <span
                    key={frontend}
                    className="px-3 py-1 rounded-full bg-slate-800 text-sm text-white hover:bg-blue-600 hover:scale-105 transition-all"
                  >
                    {frontend}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl text-slate-400 mt-4 animate-pulse">Backend</h3>
              <div className="flex gap-2">
                {profile.backend.map((backend) => (
                  <span
                    key={backend}
                    className="px-3 py-1 rounded-full bg-slate-800 text-sm text-white hover:bg-blue-600 hover:scale-105 transition-all"
                  >
                    {backend}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl text-slate-400 mt-4 animate-pulse">Database</h3>
              <div className="flex gap-2">
                {profile.database.map((database) => (
                  <span
                    key={database}
                    className="px-3 py-1 rounded-full bg-slate-800 text-sm text-white hover:bg-blue-600 hover:scale-105 transition-all"
                  >
                    {database}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl text-slate-400 mt-4 animate-pulse">Tools</h3>
              <div className="flex gap-2">
                {profile.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-full bg-slate-800 text-sm text-white hover:bg-blue-600 hover:scale-105 transition-all"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-6 mt-10">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 hover:scale-110 transition-all"
            >
              <FaGithub size={35} />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 hover:scale-110 transition-all"
            >
              <FaLinkedin size={35} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
