import SocialButton from "../rusable/social_button";
import { IoLogoGithub } from "react-icons/io";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaSquareXTwitter } from "react-icons/fa6";
import { HiDownload } from "react-icons/hi";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from "../assets/varients";

export default function About() {
  const experience = [
    {
      logo: "/centralogic.png",
      title: "CentraLogic",
      role: "Software Engineer",
      tech: "ReactJS, NodeJS, PostgreSQL, Azure",
      period: "Feb 2026 - Present",
      color: "from-green-500 to-teal-500",
      badge: "🟢 Current",
    },
    {
      logo: "https://tawk.link/66f63ef84cbc4814f7dfab33/var/trigger-images/fb9beafb6fb8c950ce55290ca76b8cd55ef2e33f.jpg",
      title: "DexyAI",
      role: "Full Stack Engineer",
      tech: "Python, NextJS",
      period: "Apr 2025 - Jan 2026",
      color: "from-blue-500 to-cyan-500",
      badge: "💼 Full-time",
    },
    {
      logo: "/freekick.jpg",
      title: "Freekick.app",
      role: "Full Stack Intern",
      tech: "Next.js, Python, Figma, Web3",
      period: "Oct - Dec 2024",
      color: "from-purple-500 to-blue-500",
      badge: "🎯 Intern",
    },
  ];

  const education = [
    {
      logo: "/modern.jpg",
      title: "Master of Computer Application",
      role: "Modern College, Pune (SPPU)",
      period: "2023 - 2025",
      grade: "CGPA: 8.03",
      color: "from-green-500 to-blue-500",
    },
    {
      logo: "/mescoe.jpg",
      title: "Bachelor of Engineering",
      role: "Mes College of Engineering, Pune (SPPU)",
      period: "2019 - 2023",
      grade: "CGPA: 8.01",
      color: "from-orange-500 to-blue-500",
    },
  ];

  return (
    <div className="relative py-12 sm:py-16 md:py-20 overflow-hidden" id="about">
      <div className="relative max-w-7xl mx-auto px-4 space-y-10 sm:space-y-14">

        {/* ── Row 1: About Me + Experience ── */}
        <div className="flex lg:flex-row flex-col gap-6 sm:gap-8 font-poppins">

          {/* Left – About Me */}
          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-blue-200 dark:hover:shadow-blue-900/50 transition-shadow duration-500 h-full">
              <div className="absolute top-0 left-0 w-12 h-12 sm:w-20 sm:h-20 border-t-4 border-l-4 border-blue-500 dark:border-blue-400 rounded-tl-2xl sm:rounded-tl-3xl" />
              <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-20 sm:h-20 border-b-4 border-r-4 border-blue-500 dark:border-blue-400 rounded-br-2xl sm:rounded-br-3xl" />

              <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold my-3 sm:my-4 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent relative inline-block">
                  About Me
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 dark:from-blue-400 to-transparent"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                </h1>
              </motion.div>

              <motion.div variants={fadeIn("up", 0.3)} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <div className="relative">
                  <div className="absolute -left-2 sm:-left-4 top-0 text-4xl sm:text-6xl text-blue-200 dark:text-blue-900/50 font-serif">"</div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg relative z-10 pl-2 sm:pl-4">
                    Fully committed to the philosophy of lifelong learning, I'm a
                    full-stack developer with a deep passion for JavaScript, React,
                    and building scalable web applications. The blend of creativity,
                    logic, and ever-evolving technology fuels my excitement for
                    development. I also enjoy designing intuitive user experiences
                    with Figma and exploring Web3 innovations. When I'm not coding,
                    I love watching global cinema, staying active, and diving into
                    new tech trends.
                  </p>
                </div>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-3 sm:gap-4 my-4 sm:my-6"
              >
                {[
                  { number: "1+", label: "Years Exp" },
                  { number: "8+", label: "Projects" },
                  { number: "10+", label: "Tech Stack" },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-3 sm:p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.number}</div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Download + Social */}
              <motion.div variants={fadeIn("up", 0.5)} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <motion.a
                  href="/Mayur CV.pdf"
                  download
                  className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-full text-white font-semibold shadow-lg hover:shadow-blue-300 dark:hover:shadow-blue-900/50 transition-all duration-300 group relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700" initial={{ x: "-100%" }} whileHover={{ x: 0 }} transition={{ duration: 0.3 }} />
                  <span className="relative z-10 flex items-center gap-2">
                    <HiDownload className="text-lg sm:text-xl group-hover:animate-bounce" />
                    <span className="hidden sm:inline">Download Resume</span>
                    <span className="sm:hidden">Resume</span>
                  </span>
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30" initial={{ x: "-100%" }} whileHover={{ x: "100%" }} transition={{ duration: 0.6 }} />
                </motion.a>
              </motion.div>

              <motion.div variants={fadeIn("up", 0.6)} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <div className="flex gap-2 sm:gap-3 py-2 sm:py-4 flex-wrap">
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                    <SocialButton src="https://github.com/mayurrohokale" logo={<IoLogoGithub />} text="Github" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.9 }}>
                    <SocialButton src="https://www.linkedin.com/in/mayur-rohokale-397a35210/" logo={<TbBrandLinkedinFilled />} text="LinkedIn" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                    <SocialButton src="https://www.x.com/mayurrohokale25/" logo={<FaSquareXTwitter />} text="Twitter" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right – Experience Cards */}
          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-blue-200 dark:hover:shadow-blue-900/50 transition-shadow duration-500 h-full">

              <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-blue-500 dark:text-blue-400 relative inline-block">
                  Experience
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 bg-blue-500 dark:bg-blue-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                </h1>
              </motion.div>

               <div className="relative space-y-4 mt-2">

                {/* Vertical timeline line */}
                <div className="absolute left-[26px] sm:left-[30px] top-6 bottom-6 w-0.5 z-0 overflow-hidden rounded-full">
                  <motion.div
                    className="w-full bg-gradient-to-b from-green-400 via-blue-500 to-purple-500"
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    style={{ originY: 0 }}
                  />
                </div>

                {experience.map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative group"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-sm`} />
                    <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-5 shadow-md hover:shadow-xl transition-shadow duration-300 border border-blue-100 dark:border-gray-700 group-hover:border-blue-300 dark:group-hover:border-blue-600">

                      {/* Top row */}
                      <div className="flex items-center gap-3 sm:gap-4 mb-3">
                        <div className="relative flex-shrink-0 z-10">
                          {/* Animated dot on the timeline */}
                          <div
                            className={`absolute -left-[18px] sm:-left-[22px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-r ${item.color} border-2 border-white dark:border-gray-800 shadow-md z-20 animate-pulse`}
                          />
                          <motion.div
                            className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-40 blur-md transition-opacity duration-300`}
                          />
                          <motion.img
                            src={item.logo}
                            alt={item.title}
                            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-blue-400 dark:border-blue-500 relative z-10 bg-white dark:bg-gray-700"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          />
                          <div
                            className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-50"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <h2 className="text-base sm:text-lg font-bold text-gray-800 dark:text-white truncate">{item.title}</h2>
                            <span className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-gradient-to-r ${item.color} text-white font-semibold whitespace-nowrap flex-shrink-0`}>
                              {item.badge}
                            </span>
                          </div>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold text-xs sm:text-sm">{item.role}</p>
                        </div>
                      </div>

                      {/* Bottom row */}
                      <div className="flex items-center justify-between flex-wrap gap-2 pl-1">
                        <div className="flex flex-wrap gap-1">
                          {item.tech.split(", ").map((t) => (
                            <span key={t} className="text-[10px] sm:text-xs px-2 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-700">
                              {t}
                            </span>
                          ))}
                        </div>
                        <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 whitespace-nowrap">
                          📅 {item.period}
                        </span>
                      </div>

                      {/* Left color bar */}
                      <motion.div
                        className={`absolute left-0 top-0 w-1 h-full rounded-l-2xl bg-gradient-to-b ${item.color}`}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                        style={{ transformOrigin: "top" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Row 2: Education – Horizontal Timeline ── */}
        <motion.div
          className="font-poppins"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-2xl hover:shadow-blue-200 dark:hover:shadow-blue-900/50 transition-shadow duration-500">

            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-12 h-12 sm:w-20 sm:h-20 border-t-4 border-l-4 border-blue-400 dark:border-blue-500 rounded-tl-2xl sm:rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-20 sm:h-20 border-b-4 border-r-4 border-blue-400 dark:border-blue-500 rounded-br-2xl sm:rounded-br-3xl" />

            <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-8 sm:mb-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500 dark:text-blue-400 relative inline-block">
                Education
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-blue-500 dark:bg-blue-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </h1>
            </motion.div>

            {/* Horizontal timeline */}
 

            {/* Horizontal timeline */}
            <div className="relative flex flex-col sm:flex-row items-stretch justify-center gap-0">

              {/* Single horizontal line behind everything (sm+) */}
              <div className="hidden sm:block absolute top-[calc(50%-1px)] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-300 dark:from-blue-700 dark:via-blue-400 dark:to-blue-700 z-0" />

              {education.map((item, index) => (
                <div key={index} className="relative flex flex-col items-center w-full sm:w-1/2 px-4 sm:px-8">

                  {/* Vertical connector on mobile (between cards) */}
                  {index > 0 && (
                    <div className="flex sm:hidden flex-col items-center gap-1 py-3">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-blue-400 dark:bg-blue-500 animate-bounce"
                          style={{ animationDelay: `${i * 0.15}s` }}
                        />
                      ))}
                    </div>
                  )}

                  {/* Card */}
                  <motion.div
                    className="relative group w-full z-10"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.25, duration: 0.6 }}
                    whileHover={{ y: -8 }}
                  >
                    {/* Glow backdrop */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-300`} />

                    <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-blue-100 dark:border-gray-700 group-hover:border-blue-300 dark:group-hover:border-blue-600 text-center flex flex-col items-center">

                      {/* Degree icon badge */}
                      {/* <motion.div
                        className={`absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white text-sm shadow-lg z-20`}
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                      >
                        🎓
                      </motion.div> */}

                      {/* Logo */}
                      <div className="relative inline-block mb-3 mt-3">
                        <motion.div
                          className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-50 blur-md transition-opacity duration-300`}
                        />
                        <motion.img
                          src={item.logo}
                          alt={item.title}
                          className="w-20 h-20 rounded-full object-cover border-4 border-blue-400 dark:border-blue-500 relative z-10 bg-white dark:bg-gray-700"
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.7 }}
                        />
                        <div
                          className="absolute inset-0 rounded-full border-2 border-blue-400 dark:border-blue-500 animate-ping opacity-60"
                        />
                      </div>

                      {/* Fixed height text area for consistency */}
                      <div className="flex flex-col items-center flex-1 w-full">
                        <h2 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 dark:text-white mb-1 leading-tight min-h-[3rem] flex items-center justify-center text-center">
                          {item.title}
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-4 leading-snug min-h-[2.5rem] flex items-center justify-center text-center">
                          {item.role}
                        </p>
                      </div>

                      {/* Period & grade chips */}
                      <div className="flex flex-col items-center gap-2 w-full">
                        <motion.span
                          className={`text-xs px-4 py-1.5 rounded-full bg-gradient-to-r ${item.color} text-white font-semibold shadow-md w-fit`}
                          whileHover={{ scale: 1.05 }}
                        >
                          📅 {item.period}
                        </motion.span>
                        <motion.span
                          className="text-xs px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-700 font-semibold w-fit"
                          whileHover={{ scale: 1.05 }}
                        >
                          ⭐ {item.grade}
                        </motion.span>
                      </div>

                      {/* Bottom shine bar */}
                      <motion.div
                        className={`absolute bottom-0 left-0 h-1 rounded-b-2xl bg-gradient-to-r ${item.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                      />
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>


          </div>
        </motion.div>

      </div>
    </div>
  );
}