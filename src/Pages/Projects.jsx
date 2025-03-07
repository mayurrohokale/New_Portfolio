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
          button_name="Maintained"
          date="June 2024"
          description="Kindness Corner ❤️ is a platform that bridges the gap between NGOs
              and donors, enabling a voting-based donation system 🗳️. The
              project empowers users to vote for causes, ensuring donations are
              allocated transparently and effectively."
          gitLink="https:github.com/mayurrohokale/Kindness_Corner"
          src="/video3.mp4"
          techStack={["React", "Tailwind", "NodeJS", "Express", "MongoDB"]}
          webLink="https://kindness-corner.vercel.app/"
        />
        <ProjectCard
          project_name="E-Store"
          button_name="Completed"
          date="Oct 2023"
          description="eStore 👗👚 is a e-commerce clothing store 🛍️, allowing users to easily sort and browse products by category and accessories 🧥👠. Customers can rate products ⭐, add them to their cart 🛒, and enjoy a smooth shopping experience. With a focus on fashion, eStore makes it easy to find the perfect fit for every style and need!"
          gitLink="https:github.com/mayurrohokale/estore"
          src="/estore2.mp4"
          techStack={[
            "Angular",
            "CSS",
            "NodeJS",
            "Typescript",
            "MySQL",
            "Express",
          ]}
        />
        <ProjectCard
          project_name="Next-Scraper"
          button_name="On Hold"
          date="Aug 2024"
          description="Next Scraper 🔍 is a LinkedIn scraping tool built with Next.js 🌐, designed to efficiently extract valuable data from LinkedIn profiles. I contributed to the development of a sleek and intuitive UI 🎨, ensuring users can easily input URLs, configure scraping settings, and view the extracted data in a user-friendly manner. With a responsive and streamlined design."
          gitLink="https://github.com/AkashMaher/next-scraper"
          webLink="https://scrapli.vercel.app/"
          techStack={["NextJS", "Tailwind", "Acternity UI"]}
          src="/next-scrapper.mp4"
        />
        <ProjectCard
          project_name="Naukari Automation"
          button_name="In Progress"
          date="Jan 2025"
          description="Naukri Automation Tool 💼 is a simple yet powerful tool designed to automate the job search and application process on Naukri.com. It streamlines the process by automatically applying to relevant job listings based on user preferences 🧑‍💻.Perfect for those looking to speed up their job search! "
          gitLink="https://github.com/AkashMaher/next-scraper"
          techStack={["Python", "Selenium"]}
          src="/naukari.mp4"
        />

        <ProjectCard
          project_name="CVFS"
          button_name="Completed"
          date="May 2023"
          description="Customized Virtual File System 💻 is a project that replicates the core functionalities of a Linux file system, providing system calls and essential commands through a custom shell 🖥️. By using this project, users can access system-level functionalities typically available on Linux, on any other operating system platform 🌍."
          gitLink="https://github.com/mayurrohokale/Customised-Virtual-File-System"
          techStack={["C", "C++"]}
          src="/cvfs.mp4"
        />
      </div>
    </div>
  );
}
