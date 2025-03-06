import { useEffect, useState } from "react";
import { FiHome } from "react-icons/fi";
import { MdWorkOutline } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { TbBrandLinkedinFilled } from "react-icons/tb";

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
    <div className="fixed top-0 left-1/2 -translate-x-1/2 ">
      {isMobile ? (
        <div className="flex justify-center items-center text-center ">
        <div className="mt-6 w-[240px] h-[45px] rounded-3xl shadow-xl flex gap-2 text-[22px] text-center content-center justify-between px-7 items-center bg-white">
            <div><FiHome/></div>
            {/* <div>|</div> */}
            <div><MdWorkOutline/></div>
            <div><FaGithub/></div>
            <div><IoCallOutline/></div>
            <div><TbBrandLinkedinFilled/></div>
        </div>
        </div>
      ) : (
        <div className="w-screen h-[50px] bg-white text-xl flex gap-10 items-center font-medium font-poppins justify-center ">
          <div>Logo</div>
          <div>Home</div>
          <div>About</div>
          <div>Projects</div>
          <div>Contact</div>
        </div>
      )}
    </div>
  );
};

export default Header;
