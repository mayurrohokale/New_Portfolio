import SocialButton from "../rusable/social_button";
import { IoLogoGithub } from "react-icons/io";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaSquareXTwitter } from "react-icons/fa6";
import { HiDownload } from "react-icons/hi";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from "../assets/varients";

export default function About() {
  const timeline = [
    {
      type: "work",
      logo: "https://tawk.link/66f63ef84cbc4814f7dfab33/var/trigger-images/fb9beafb6fb8c950ce55290ca76b8cd55ef2e33f.jpg",
      title: "DexyAI",
      role: "Full Stack Engineer",
      tech: "Python, NextJS",
      period: "Apr-2025-Present",
      color: "from-blue-500 to-cyan-500",
    },
    {
      type: "work",
      logo: "/freekick.jpg",
      title: "Freekick.app",
      role: "Full Stack Intern",
      tech: "Next.js, Python, Figma, Web3(TON, MetaMask)",
      period: "Oct - Dec 2024",
      color: "from-purple-500 to-blue-500",
    },
    {
      type: "education",
      logo: "/modern.jpg",
      title: "Master of Computer Application",
      role: "Modern College, Pune (SPPU)",
      tech: "2023 - 2025 | CGPA: 8.03",
      period: "",
      color: "from-green-500 to-blue-500",
    },
    {
      type: "education",
      logo: "/mescoe.jpg",
      title: "Bachelor of Engineering",
      role: "Mes College of Engineering, Pune (SPPU)",
      tech: "2019 - 2023 | CGPA: 8.01",
      period: "",
      color: "from-orange-500 to-blue-500",
    },
  ];

  return (
    <div className="relative py-12 sm:py-16 md:py-20 overflow-hidden" id="about">

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex lg:flex-row flex-col gap-6 sm:gap-8 justify-center font-poppins">
          {/* Left Section - About Me */}
          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-blue-200 dark:hover:shadow-blue-900/50 transition-shadow duration-500">
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-12 h-12 sm:w-20 sm:h-20 border-t-4 border-l-4 border-blue-500 dark:border-blue-400 rounded-tl-2xl sm:rounded-tl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-20 sm:h-20 border-b-4 border-r-4 border-blue-500 dark:border-blue-400 rounded-br-2xl sm:rounded-br-3xl"></div>

              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false }}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold my-3 sm:my-4 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent relative inline-block">
                  About Me
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 dark:from-blue-400 to-transparent"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                </h1>
              </motion.div>

              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false }}
              >
                <div className="relative">
                  {/* Quote decoration */}
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

              {/* Stats Section */}
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false }}
                className="grid grid-cols-3 gap-3 sm:gap-4 my-4 sm:my-6"
              >
                {[
                  { number: "2+", label: "Years Exp" },
                  { number: "20+", label: "Projects" },
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

              {/* Download Resume Button */}
              <motion.div
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false }}
              >
                <motion.a
                  href="/Mayur CV.pdf"
                  download
                  className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-full text-white font-semibold shadow-lg hover:shadow-blue-300 dark:hover:shadow-blue-900/50 transition-all duration-300 group relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <span className="relative z-10 flex items-center gap-2">
                    <HiDownload className="text-lg sm:text-xl group-hover:animate-bounce" />
                    <span className="hidden sm:inline">Download Resume</span>
                    <span className="sm:hidden">Resume</span>
                  </span>

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.a>
              </motion.div>

              {/* Social Buttons */}
              <motion.div
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false }}
              >
                <div className="flex gap-2 sm:gap-3 py-2 sm:py-4 flex-wrap">
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                    <SocialButton
                      src="https://github.com/mayurrohokale"
                      logo={<IoLogoGithub />}
                      text="Github"
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.9 }}>
                    <SocialButton
                      src="https://www.linkedin.com/in/mayur-rohokale-397a35210/"
                      logo={<TbBrandLinkedinFilled />}
                      text="LinkedIn"
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                    <SocialButton
                      src="https://www.x.com/mayurrohokale25/"
                      logo={<FaSquareXTwitter />}
                      text="Twitter"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Section - Timeline */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-blue-200 dark:hover:shadow-blue-900/50 transition-shadow duration-500">
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false }}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold my-3 sm:my-4 text-blue-500 dark:text-blue-400 relative inline-block">
                  Education & Experience
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 bg-blue-500 dark:bg-blue-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                </h1>
              </motion.div>

              <div className="relative mt-6 sm:mt-8">
                {/* Animated Timeline Line */}
                <motion.div
                  className="absolute left-[22px] sm:left-[26px] top-0 w-0.5 sm:w-1 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300 dark:from-blue-400 dark:via-blue-500 dark:to-blue-600"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: false }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />

                {/* Glowing effect on timeline */}
                <div className="absolute left-[22px] sm:left-[26px] top-0 w-0.5 sm:w-1 h-full bg-blue-400 dark:bg-blue-500 blur-sm opacity-50"></div>

                <motion.div
                  variants={fadeIn("up", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false }}
                >
                  {timeline.map((item, index) => (
                    <motion.div
                      key={index}
                      className="mb-6 sm:mb-8 flex items-start gap-3 sm:gap-4 relative group"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: index * 0.2 }}
                      whileHover={{ x: 10 }}
                    >
                      {/* Logo with 3D effect */}
                      <div className="relative">
                        {/* Glow effect */}
                        <motion.div
                          className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300`}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        
                        <motion.img
                          src={item.logo}
                          alt={item.title}
                          className="w-12 h-12 min-w-[48px] min-h-[48px] sm:w-14 sm:h-14 sm:min-w-[56px] sm:min-h-[56px] rounded-full aspect-square object-cover border-2 sm:border-4 border-blue-500 dark:border-blue-400 relative z-10 bg-white dark:bg-gray-700"
                          whileHover={{ 
                            scale: 1.15, 
                            rotate: 360,
                            borderColor: "#60A5FA"
                          }}
                          transition={{ duration: 0.6 }}
                        />

                        {/* Pulsing ring */}
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-blue-400 dark:border-blue-500"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.3,
                          }}
                        />
                      </div>

                      {/* Content Card */}
                      <motion.div
                        className="flex-1 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                        whileHover={{ y: -5 }}
                      >
                        {/* Gradient overlay on hover */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                        />

                        {/* Type badge */}
                        <div className="absolute top-2 right-2">
                          <span className={`text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-gradient-to-r ${item.color} text-white font-semibold shadow-md`}>
                            {item.type === "work" ? "💼 Work" : "🎓 Education"}
                          </span>
                        </div>

                        <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-1 pr-16 sm:pr-20">
                          {item.title}
                        </h2>
                        <h3 className="text-gray-600 dark:text-gray-300 font-semibold text-xs sm:text-sm md:text-base mb-1">
                          {item.role}
                        </h3>
                        <h3 className="text-gray-500 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm mb-2 flex items-center gap-2">
                          <span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>
                          {item.tech}
                        </h3>
                        {item.period && (
                          <h4 className="text-blue-600 dark:text-blue-400 text-[10px] sm:text-xs md:text-sm font-semibold flex items-center gap-2">
                            <span>📅</span>
                            {item.period}
                          </h4>
                        )}

                        {/* Decorative corner */}
                        <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-tl from-blue-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tl-2xl sm:rounded-tl-3xl"></div>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Bottom decoration */}
              <motion.div
                className="mt-6 sm:mt-8 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
              >
                <motion.div
                  className="inline-block text-blue-400"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  ⚡
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}