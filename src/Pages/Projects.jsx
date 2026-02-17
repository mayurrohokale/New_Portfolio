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
    <div className="relative w-full font-poppins py-12 sm:py-16 md:py-20 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-50" id="projects">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-64 h-64 sm:w-96 sm:h-96 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 sm:bottom-40 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-purple-200 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1.5s" }}></div>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-24 h-24 border-2 border-blue-300 rotate-12 opacity-10"
        animate={{
          rotate: [12, 192, 12],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-32 h-32 border-2 border-purple-300 rounded-full opacity-10"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent inline-block relative"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Featured Projects
            <motion.div
              className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </motion.h1>

          {/* Decorative elements around title */}
          <motion.div
            className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-12"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="text-blue-400 text-2xl">✨</div>
          </motion.div>

          <motion.p
            className="text-gray-600 mt-4 sm:mt-6 max-w-2xl mx-auto text-base sm:text-lg px-4"
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false }}
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
              viewport={{ once: false }}
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
          viewport={{ once: false }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.a
            href="https://github.com/mayurrohokale"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
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
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
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