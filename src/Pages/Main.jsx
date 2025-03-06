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
    <div className="">
      <div className="w-full h-[95vh] flex flex-col gap-6 items-center font-poppins justify-center content-center">
        <h1 className="font-bold lg:text-3xl md:text-2xl text-xl text-blue-500 ">Hey! I AM</h1>
        <h1 className="font-bold lg:text-5xl md:text-4xl text-3xl  ">Mayur Rohokale</h1>
        <h1 className="font-bold lg:text-4xl md:text-3xl text-2xl ">
          I'm a <span className="text-blue-500">{texts[textIndex]}.</span>
        </h1>
        <div className="flex gap-4 md:text-2xl text-xl mt-4">
          <PiFigmaLogoFill />
          <RiTailwindCssFill />
          <FaSquareJs/>
          <FaReact />
          <FaAngular />
          <SiMongodb  />
        </div>
      </div>
      <div className="md:text-4xl text-3xl flex items-center justify-center text-blue-500 animate-bounce ">
        <MdOutlineKeyboardDoubleArrowDown/>
      </div>
      
    </div>
  );
}
