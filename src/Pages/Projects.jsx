import { TbWorld } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io";
import TechButton from "../rusable/techButton";
import ProjectCard from "../rusable/projectsCard";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from "../assets/varients";

export default function Projects() {
  const projects = [
    {
      project_name: "Kindness Corner",
      date: "June 2024",
      description:
        "Kindness Corner ❤️ is a platform that bridges the gap between NGOs and donors, enabling a voting-based donation system 🗳️. The project empowers users to vote for causes, ensuring donations are allocated transparently and effectively.",
      gitLink: "https://github.com/mayurrohokale/Kindness_Corner",
      src: "/video3.mp4",
      techStack: ["React", "Tailwind", "NodeJS", "Express", "MongoDB"],
      webLink: "https://kindness-corner.vercel.app/",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      project_name: "E-Store",
      date: "Oct 2023",
      description:
        "eStore 👗👚 is an e-commerce clothing store 🛍️, allowing users to easily sort and browse products by category and accessories 🧥👠. Customers can rate products ⭐, add them to their cart 🛒, and enjoy a smooth shopping experience.",
      gitLink: "https://github.com/mayurrohokale/estore",
      src: "/estore2.mp4",
      techStack: ["Angular", "CSS", "NodeJS", "Typescript", "MySQL", "Express"],
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      project_name: "Next-Scraper",
      date: "Aug 2024",
      description:
        "Next Scraper 🔍 is a LinkedIn scraping tool built with Next.js 🌐, designed to efficiently extract valuable data from LinkedIn profiles. Features a sleek and intuitive UI 🎨, ensuring users can easily input URLs, configure scraping settings, and view extracted data.",
      gitLink: "https://github.com/AkashMaher/next-scraper",
      webLink: "https://scrapli.vercel.app/",
      techStack: ["NextJS", "Tailwind", "Acternity UI"],
      src: "/next-scrapper.mp4",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      project_name: "Naukari Automation",
      date: "Jan 2025",
      description:
        "Naukri Automation Tool 💼 is a powerful tool designed to automate the job search and application process on Naukri.com. It streamlines the process by automatically applying to relevant job listings based on user preferences 🧑‍💻.",
      gitLink: "https://github.com/AkashMaher/next-scraper",
      techStack: ["Python", "Selenium"],
      src: "/naukari.mp4",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      project_name: "CVFS",
      date: "May 2023",
      description:
        "Customized Virtual File System 💻 is a project that replicates the core functionalities of a Linux file system, providing system calls and essential commands through a custom shell 🖥️. Access system-level functionalities on any platform 🌍.",
      gitLink: "https://github.com/mayurrohokale/Customised-Virtual-File-System",
      techStack: ["C", "C++"],
      src: "/cvfs.mp4",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div className="relative w-full font-poppins py-12 sm:py-16 md:py-20 overflow-hidden" id="projects">

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16 relative"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500 dark:text-blue-400 inline-block relative"
          >
            Featured Projects
            <motion.div
              className="absolute -bottom-3 left-0 h-1 bg-blue-500 dark:bg-blue-400"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </motion.h1>

          {/* Decorative elements around title */}
          <div className="absolute left-0 right-0 -top-12 flex justify-center">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-blue-300 to-blue-500 shadow-md flex items-center justify-center animate-spin" style={{ animationDuration: "20s" }}>
              <span className="text-white text-lg leading-none">✨</span>
            </div>
          </div>

          <motion.p
            className="text-gray-600 dark:text-gray-300 mt-4 sm:mt-6 max-w-2xl mx-auto text-base sm:text-lg px-4"
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
          >
            Explore my latest work and side projects
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 place-items-center">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.2 + index * 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="w-full flex justify-center"
            >
              <ProjectCard {...project} index={index} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.a
            href="https://github.com/mayurrohokale"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />

            <span className="relative z-10 flex items-center gap-2">
              <IoLogoGithub className="text-2xl group-hover:rotate-12 transition-transform" />
              View More on GitHub
              <span>→</span>
            </span>

            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}