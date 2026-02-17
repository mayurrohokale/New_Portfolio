import { useState, useEffect } from "react";
import { PiFigmaLogoFill } from "react-icons/pi";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact, FaAngular } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaSquareJs } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from "../assets/varients";

export default function Main() {
  const texts = ["Designer", "Developer", "Coder"];
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const typingSpeed = 150;
  const deleteSpeed = 100;
  const pauseTime = 1000;

  useEffect(() => {
    let typingTimeout;

    if (!isDeleting && displayText.length < texts[textIndex].length) {
      typingTimeout = setTimeout(() => {
        setDisplayText((prev) => prev + texts[textIndex][prev.length]);
      }, typingSpeed);
    } else if (!isDeleting && displayText.length === texts[textIndex].length) {
      typingTimeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayText.length > 0) {
      typingTimeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
      }, deleteSpeed);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }

    return () => clearTimeout(typingTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayText, isDeleting, textIndex]);

  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const techIcons = [
    { Icon: PiFigmaLogoFill, name: "Figma", color: "#F24E1E" },
    { Icon: RiTailwindCssFill, name: "Tailwind", color: "#06B6D4" },
    { Icon: FaSquareJs, name: "JavaScript", color: "#F7DF1E" },
    { Icon: FaReact, name: "React", color: "#61DAFB" },
    { Icon: FaAngular, name: "Angular", color: "#DD0031" },
    { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  ];

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center font-poppins overflow-hidden px-4">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50"></div>
      
      {/* Dynamic Background Shapes */}
      <div className="absolute top-0 left-0 w-full sm:w-1/2 h-full bg-blue-100 opacity-80">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-40 left-40 w-48 h-48 bg-blue-300 rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-16 h-16 border-4 border-blue-400 opacity-30"
        animate={{
          rotate: 360,
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-20 h-20 border-4 border-blue-500 rounded-full opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Parallax floating code snippets */}
      <motion.div
        className="absolute top-1/3 left-10 text-blue-300 opacity-20 font-mono text-sm select-none"
        style={{
          x: mousePosition.x * 0.5,
          y: mousePosition.y * 0.5,
        }}
      >
        {"<div>"}
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/4 right-20 text-blue-300 opacity-20 font-mono text-sm select-none"
        style={{
          x: mousePosition.x * -0.3,
          y: mousePosition.y * -0.3,
        }}
      >
        {"</code>"}
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col gap-4 items-center text-center px-4">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }}
          className="relative"
        >
          <motion.div
            className="absolute -inset-2 bg-blue-500 opacity-20 blur-xl rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <h1 className="font-bold lg:text-xl md:text-xl text-lg text-blue-500 relative tracking-wider">
            Hey! I AM
          </h1>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }}
          whileHover={{ scale: 1.05 }}
          className="relative"
        >
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-6xl bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent relative">
            Mayur Rohokale
            {/* 3D shadow effect */}
            <span className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-blue-500 opacity-10 blur-sm -z-10 translate-x-1 translate-y-1">
              Mayur Rohokale
            </span>
          </h1>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }}
          className="relative"
        >
          <div className="flex items-center gap-2">
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
              I'm a{" "}
              <span className="relative inline-block">
                <span className="text-blue-500 relative z-10">{displayText}</span>
                {/* Underline animation */}
                <motion.span
                  className="absolute bottom-0 left-0 h-1 bg-blue-500 opacity-30"
                  initial={{ width: 0 }}
                  animate={{ width: displayText.length > 0 ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </span>
              <span className="animate-blink text-blue-500">.</span>
            </h1>
          </div>
        </motion.div>

        {/* 3D Tech Stack Icons with Hover Effects */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }}
          className="flex gap-3 sm:gap-4 md:gap-6 mt-8 flex-wrap justify-center"
        >
          {/* eslint-disable-next-line no-unused-vars */}
          {techIcons.map(({ Icon, name, color }, index) => (
            <motion.div
              key={name}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.2,
                rotate: [0, -10, 10, 0],
              }}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-lg blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300"
                style={{ backgroundColor: color }}
              />
              
              {/* Icon container with 3D effect */}
              <motion.div
                className="relative bg-white rounded-lg p-2.5 sm:p-3 md:p-4 shadow-lg cursor-pointer"
                style={{
                  transformStyle: "preserve-3d",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
                whileHover={{
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                  y: -5,
                }}
              >
                <Icon 
                  className="text-2xl sm:text-2xl md:text-3xl transition-colors duration-300" 
                  style={{ color: color }}
                />
                
                {/* Tooltip */}
                <motion.div
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block"
                  initial={{ y: -10 }}
                  whileHover={{ y: 0 }}
                >
                  {name}
                </motion.div>
              </motion.div>
              
              {/* Reflection effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-0 group-hover:opacity-20 rounded-lg pointer-events-none"
                style={{ transform: "translateZ(-10px)" }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive CTA Button */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }}
          className="mt-6 sm:mt-8"
        >
          <motion.a
            href="#about"
            className="relative inline-block px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white bg-blue-500 rounded-full overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Button text */}
            <span className="relative z-10 flex items-center gap-2">
              <span className="hidden sm:inline">Explore My Work</span>
              <span className="sm:hidden">Explore</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
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
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 sm:bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="text-blue-500 text-sm font-medium tracking-wider">SCROLL</span>
        <div className="flex flex-col items-center">
          <MdOutlineKeyboardDoubleArrowDown className="text-blue-500 md:text-4xl text-3xl" />
          <motion.div
            className="w-0.5 h-8 bg-blue-500 mt-2"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>

      {/* Particle effects */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}