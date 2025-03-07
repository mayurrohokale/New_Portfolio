import { useEffect, useState } from "react";
import { FiHome } from "react-icons/fi";
import { MdWorkOutline } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import { HiOutlinePhone } from "react-icons/hi";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50  ">
      {isMobile ? (
        <div className="flex justify-center items-center text-center  rounded-b-3xl  ">
        <div className="mt-6 w-[240px] h-[45px] rounded-3xl shadow-xl  flex gap-2 text-[22px] text-center content-center justify-between px-7 items-center bg-white">
            <div>
              <Link to="/"><FiHome/></Link>
              </div>
            {/* <div>|</div> */}
            <div>
              <a to="#projects"><MdWorkOutline/></a>
            </div>
            <div>
              <a href="https://github.com/mayurrohokale"><FaGithub/></a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/mayur-rohokale-397a35210/"><TbBrandLinkedinFilled/></a>
            </div>
            <div>
              <a href="#contact"><HiOutlinePhone/></a>
              </div>
        </div>
        </div>
      ) : (
        <div className="w-screen h-[50px] bg-white text-xl flex gap-10 items-center font-medium font-poppins justify-center ">
          <div><Link to="/">Home</Link></div>
          <div><a href="#about">About</a></div>
          <div><a href="#projects">Projects</a></div>
          <div><a href="#contact">Contact</a></div>
        </div>
      )}
    </div>
  );
};

export default Header;
