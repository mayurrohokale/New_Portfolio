import { FiHome } from "react-icons/fi";
import { MdWorkOutline } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import { HiOutlinePhone } from "react-icons/hi";
import { HiMoon, HiSun } from "react-icons/hi";
import { MdOutlineBuildCircle } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl">
      <nav className="h-14 rounded-3xl shadow-2xl bg-white/75 dark:bg-gray-900/60 backdrop-blur-xl border border-white/20 dark:border-white/10 text-gray-900 dark:text-white transition-colors duration-300">
        {/* Mobile: icon row */}
        <div className="h-full px-4 flex items-center justify-between lg:hidden">
          <div className="flex items-center gap-3 text-[22px]">
            <Link
              to="/"
              aria-label="Home"
              className="p-2 rounded-2xl hover:bg-gray-900/5 dark:hover:bg-white/10 transition-colors"
            >
              <FiHome />
            </Link>

            {/* <a
              href="#projects"
              aria-label="Projects"
              className="p-2 rounded-2xl hover:bg-gray-900/5 dark:hover:bg-white/10 transition-colors"
            >
              <MdWorkOutline />
            </a> */}

            {/* <a
              href="https://github.com/mayurrohokale"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-2xl hover:bg-gray-900/5 dark:hover:bg-white/10 transition-colors"
            >
              <FaGithub />
            </a> */}

            <a
              href="https://www.linkedin.com/in/mayur-rohokale-397a35210/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-2xl hover:bg-gray-900/5 dark:hover:bg-white/10 transition-colors"
            >
              <TbBrandLinkedinFilled />
            </a>

            <a
              href="#contact"
              aria-label="Contact"
              className="p-2 rounded-2xl hover:bg-gray-900/5 dark:hover:bg-white/10 transition-colors"
            >
              <HiOutlinePhone />
            </a>

            <Link
              to="/building"
              aria-label="Building"
              className="p-2 rounded-2xl hover:bg-gray-900/5 dark:hover:bg-white/10 transition-colors"
            >
              <MdOutlineBuildCircle />
            </Link>
            <motion.button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-2xl hover:bg-gray-900/5 dark:hover:bg-white/10 transition-colors"
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              {theme === "dark" ? (
                <HiSun className="text-yellow-400 text-2xl" />
              ) : (
                <HiMoon className="text-blue-600 text-2xl" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Desktop: text links */}
        <div className="hidden lg:flex h-full px-6 items-center justify-center gap-2 text-base font-medium font-poppins">
          <Link
            to="/"
            className="px-4 py-2 rounded-2xl hover:bg-gray-900/5 dark:hover:bg-white/10 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            Home
          </Link>
          <a
            href="#about"
            className="px-4 py-2 rounded-2xl hover:bg-gray-900/5 dark:hover:bg-white/10 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="px-4 py-2 rounded-2xl hover:bg-gray-900/5 dark:hover:bg-white/10 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-2xl hover:bg-gray-900/5 dark:hover:bg-white/10 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            Contact
          </a>
          <Link
            to="/building"
            className="px-4 py-2 rounded-2xl hover:bg-gray-900/5 dark:hover:bg-white/10 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            Building
          </Link>

          <motion.button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="ml-2 p-2 rounded-2xl hover:bg-gray-900/5 dark:hover:bg-white/10 transition-colors"
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            {theme === "dark" ? (
              <HiSun className="text-yellow-400 text-2xl" />
            ) : (
              <HiMoon className="text-blue-600 text-2xl" />
            )}
          </motion.button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
