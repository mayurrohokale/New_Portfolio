import { TbWorld } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io";
import TechButton from "../rusable/techButton";
import ProjectCard from "../rusable/projectsCard";

export default function Projects() {
  return (
    <div className="w-full font-poppins">
      <h1 className="text-2xl font-bold justify-center flex">
        Featured Projects
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 grid-ali place-items-center gap-4 mt-3 ">
      <ProjectCard
        project_name="Kindness Corner"
        button_name="In progress"
        date="Aug 2023"
        description="Kindness Corner ❤️ is a platform that bridges the gap between NGOs
              and donors, enabling a voting-based donation system 🗳️. The
              project empowers users to vote for causes, ensuring donations are
              allocated transparently and effectively."
        gitLink="https:github.com/mayurrohokale/Kindness_Corner"
        src="/video3.mp4"
      />
      <ProjectCard
        project_name="Kindness Corner"
        button_name="In progress"
        date="Aug 2023"
        description="Kindness Corner ❤️ is a platform that bridges the gap between NGOs
              and donors, enabling a voting-based donation system 🗳️. The
              project empowers users to vote for causes, ensuring donations are
              allocated transparently and effectively."
        gitLink="https:github.com/mayurrohokale/Kindness_Corner"
        src="/video3.mp4"
      />
      </div>
    </div>
  );
}
