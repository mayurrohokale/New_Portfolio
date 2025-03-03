import { useState } from "react";
import { useEffect } from "react";
import { PiFigmaLogoFill } from "react-icons/pi";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaSquareJs } from "react-icons/fa6";

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
      <div className="w-full h-[80vh] flex flex-col gap-1 items-center font-poppins justify-center content-center">
        <h1 className="font-bold md:text-xl text-md text-blue-500 ">Hey! I AM</h1>
        <h1 className="font-bold md:text-3xl text-2xl  ">Mayur Rohokale</h1>
        <h1 className="font-bold md:text-2xl text-xl ">
          I'm a <span className="text-blue-500">{texts[textIndex]}.</span>
        </h1>
        <div className="flex gap-2 md:text-xl text-lg mt-2">
          <PiFigmaLogoFill />
          <RiTailwindCssFill />
          <FaSquareJs/>
          <FaReact />
          <FaAngular />
          <SiMongodb  />
        </div>
      </div>
    </div>
  );
}
