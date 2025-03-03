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
    <>
      {isMobile ? (
        <div className="m-4 h-[50px] rounded-3xl shadow-xl flex gap-2 text-[28px] justify-between px-7 items-center">
            <div><FiHome/></div>
            {/* <div>|</div> */}
            <div><MdWorkOutline/></div>
            <div><FaGithub/></div>
            <div><IoCallOutline/></div>
            <div><TbBrandLinkedinFilled/></div>
        </div>
      ) : (
        <div className="w-screen h-[50px] border flex gap-2">
          <div>Logo</div>
          <div>Home</div>
          <div>About</div>
          <div>Projects</div>
          <div>Contact</div>
        </div>
      )}
    </>
  );
};

export default Header;
