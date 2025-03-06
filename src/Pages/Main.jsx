import { useState } from "react";
import { useEffect } from "react";
import { PiFigmaLogoFill } from "react-icons/pi";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaSquareJs } from "react-icons/fa6";
import { LuMouse } from "react-icons/lu";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";


export default function Main() {
  const texts = ["Designer", "Developer", "Coder"];
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const Interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);
    return () => clearInterval(Interval);
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center font-poppins">
    {/* Background covering half the screen */}
    <div className="absolute top-0 left-0 w-1/2 h-full bg-blue-100"></div>

    {/* Content at center */}
    <div className="relative z-10 flex flex-col gap-4 items-center text-center">
      <h1 className="font-bold lg:text-2xl md:text-xl text-lg text-blue-500">
        Hey! I AM
      </h1>
      <h1 className="font-bold lg:text-5xl md:text-4xl text-3xl">
        Mayur Rohokale
      </h1>
      <h1 className="font-bold lg:text-4xl md:text-3xl text-2xl">
        I'm a <span className="text-blue-500">{texts[textIndex]}.</span>
      </h1>
      <div className="flex gap-4 md:text-2xl text-xl mt-4">
        <PiFigmaLogoFill />
        <RiTailwindCssFill />
        <FaSquareJs />
        <FaReact />
        <FaAngular />
        <SiMongodb />
      </div>
    </div>

   
    <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-blue-500 animate-bounce md:text-4xl text-3xl">
      <MdOutlineKeyboardDoubleArrowDown />
    </div>
  </div>
  );
}
