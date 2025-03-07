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
  const typingSpeed = 150; // Speed of typing
  const deleteSpeed = 100; // Speed of deleting
  const pauseTime = 1000; // Pause before deleting

  useEffect(() => {
    let typingTimeout;

    if (!isDeleting && displayText.length < texts[textIndex].length) {
      // Typing effect
      typingTimeout = setTimeout(() => {
        setDisplayText((prev) => prev + texts[textIndex][prev.length]);
      }, typingSpeed);
    } else if (!isDeleting && displayText.length === texts[textIndex].length) {
      // Wait before deleting
      typingTimeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayText.length > 0) {
      // Deleting effect
      typingTimeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
      }, deleteSpeed);
    } else if (isDeleting && displayText.length === 0) {
      // Move to next word
      setIsDeleting(false);
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }

    return () => clearTimeout(typingTimeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center font-poppins">
      {/* Background covering half the screen */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-blue-100"></div>

      {/* Content at center */}
      <div className="relative z-10 flex flex-col gap-4 items-center text-center">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }}
        >
          <h1 className="font-bold lg:text-xl md:text-xl text-lg text-blue-500">
            Hey! I AM
          </h1>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }}
        >
          <h1 className="font-bold lg:text-5xl md:text-4xl text-3xl">
            Mayur Rohokale
          </h1>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }}
        >
          <h1 className="font-bold lg:text-4xl md:text-3xl text-2xl">
            I'm a <span className="text-blue-500">{displayText}</span>
            <span className="animate-blink text-blue-500">.</span>
          </h1>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }}
        >
          <div className="flex gap-4 md:text-2xl text-xl mt-4">
            <PiFigmaLogoFill />
            <RiTailwindCssFill />
            <FaSquareJs />
            <FaReact />
            <FaAngular />
            <SiMongodb />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-blue-500 animate-bounce md:text-4xl text-3xl">
        <MdOutlineKeyboardDoubleArrowDown />
      </div>
    </div>
  );
}
