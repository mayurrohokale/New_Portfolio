import SocialButton from "../rusable/social_button";
import { IoLogoGithub } from "react-icons/io";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaSquareXTwitter } from "react-icons/fa6";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from "../assets/varients";
export default function About() {
  return (
    <div className="" id="about">
      <div className="">
        <div className="flex lg:flex-row flex-col  justify-center font-poppins">
          <div className="lg:w-1/2 w-full p-4 font-medium ">
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false }}
            >
              <h1 className="text-xl md:text-lg font-bold my-3">About Me</h1>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false }}
            >
              <p align="justify">
                Fully committed to the philosophy of lifelong learning, I’m a
                full-stack developer with a deep passion for JavaScript, React,
                and building scalable web applications. The blend of creativity,
                logic, and ever-evolving technology fuels my excitement for
                development. I also enjoy designing intuitive user experiences
                with Figma and exploring Web3 innovations. When I’m not coding,
                I love watching global cinema, staying active, and diving into
                new tech trends.
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false }}
            >
              <button className="my-2 p-2 md:p-3 bg-blue-500 rounded-lg text-white">
                <a href="/Mayur CV.pdf" download>
                  Resume/CV
                </a>
              </button>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false }}
            >
              <div className="flex gap-2 py-2">
                <SocialButton
                  src="https://github.com/mayurrohokale"
                  logo={<IoLogoGithub />}
                  text="Github"
                />
                <SocialButton
                  src="https://www.linkedin.com/in/mayur-rohokale-397a35210/"
                  logo={<TbBrandLinkedinFilled />}
                  text="LinkedIn"
                />
                <SocialButton
                  src="https://www.x.com/mayurrohokale25/"
                  logo={<FaSquareXTwitter />}
                  text="Twitter"
                />
              </div>
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2 p-4 bg-blue-100">
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false }}
            >
              <h1 className="text-xl md:text-lg font-bold my-3">
                Education & Experience
              </h1>
            </motion.div>

            <div className="relative">
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false }}
              >
                {/* Timeline Line */}
                <div className="absolute left-[26px] top-0 w-1 h-full  bg-blue-500"></div>
                {/* New Experience - PromptLab AI */}
                <div className="mb-6 flex items-start gap-4 relative">
                  {/* Logo */}
                  <div className="relative">
                    <img
                      src="https://tawk.link/66f63ef84cbc4814f7dfab33/var/trigger-images/fb9beafb6fb8c950ce55290ca76b8cd55ef2e33f.jpg" // Make sure you have this image in your public folder
                      className="w-14 h-14 min-w-[56px] min-h-[56px] rounded-full aspect-square object-cover border-4 border-blue-500"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">DexyAI</h2>
                    <h3 className="text-gray-600">Full Stack Engineer</h3>
                    <h3 className="text-gray-600">
                     Python, NextJS
                    </h3>
                    <h4 className="text-gray-500 text-sm">Apr-2025-Present</h4>
                  </div>
                </div>

                {/* Experience */}
                <div className="mb-6 flex items-start gap-4 relative">
                  {/* Logo */}
                  <div className="relative">
                    <img
                      src="/freekick.jpg"
                      className="w-14 h-14 min-w-[56px] min-h-[56px] rounded-full aspect-square object-cover border-4 border-blue-500"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">Freekick.app</h2>
                    <h3 className="text-gray-600">Full Stack Intern</h3>
                    <h3 className="text-gray-600">
                      Next.js, Python, Figma, Web3(TON, MetaMask)
                    </h3>
                    <h4 className="text-gray-500 text-sm">Oct - Dec 2024</h4>
                  </div>
                </div>

                {/* MCA */}
                <div className="mb-6 flex items-start gap-4 relative">
                  <div className="relative">
                    <img
                      src="/modern.jpg"
                      className="w-14 h-14 min-w-[56px] min-h-[56px] rounded-full aspect-square object-cover border-4 border-blue-500"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">
                      Master of Computer Application
                    </h2>
                    <h3 className="text-gray-600">
                      Modern College, Pune (SPPU)
                    </h3>
                    <h4 className="text-gray-500 text-sm">
                      2023 - 2025 | CGPA: 8.03
                    </h4>
                  </div>
                </div>

                {/* BE */}
                <div className="flex items-start gap-4 relative">
                  <div className="relative">
                    <img
                      src="/mescoe.jpg"
                      className="w-14 h-14 min-w-[56px] min-h-[56px] rounded-full aspect-square object-cover border-4 border-blue-500"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">
                      Bachelor of Engineering
                    </h2>
                    <h3 className="text-gray-600">
                      Mes College of Engineering, Pune (SPPU)
                    </h3>
                    <h4 className="text-gray-500 text-sm">
                      2019 - 2023 | CGPA: 8.01
                    </h4>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
