import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImage from "../../assets/profile.jpeg";

import type { Profile } from "../../types/Profiles";

interface ProfileCardProps {
  profile: Profile;
}

export default function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <section className="max-w-6xl mx-auto p-10 flex flex-col md:flex-row items-center gap-10">
      <img
        src={profileImage}
        alt={profile.name}
        className="w-60 h-60 rounded-full"
        object-cover
        shadow-lg
      />
      <div>
        <h1 className="text-4xl font-bold">{profile.name}</h1>
        <h2 className="text-xl text-gray-500">{profile.role}</h2>
        <p className="mt-6">{profile.bio}</p>
        <div className="flex flex-wrap gap-2 mt-6">
          {profile.skills.map((skill) => (
            <span
              key={skill}
              className="bg-slate-800 text-white px-4 py-2 rounded-lg"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="flex gap-6 mt-8">
          <a href={profile.github} target="_blank">
            <FaGithub size={35} />
          </a>
          <a href={profile.linkedin} target="_blank">
            <FaLinkedin size={35} />
          </a>
        </div>
      </div>
    </section>
  );
}
