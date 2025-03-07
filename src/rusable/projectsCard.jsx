import TechButton from "./techButton";
import { TbWorld } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io";


export default function ProjectCard({project_name, button_name, date, description, gitLink, webLink, src, techStack}) {
  return (
    <div className="flex justify-center">
      <div className="border-[1px] h-[640px] m-2 pb-6 p-2 rounded-lg shadow-lg font-poppins w-[310px] lg:w-[340px]">
        <div className="h-[200px] rounded-lg relative overflow-hidden">
          <video
            className="w-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
            src={src}
            controls
            autoPlay
            loop
            muted
            preload="auto"
          />
        </div>
        <div>
          <h1 className="font-bold text-lg">{project_name}</h1>
          <div className="">
            <div className="flex justify-between">
              <button className={`text-sm px-3 py-1 rounded-sm font-semibold font-poppins ${
                  button_name == "In Progress" ? "bg-blue-500 text-white"
                  : button_name == "Completed" ? "bg-green-500 text-white"
                  : button_name == "Maintained" ? "bg-pink-500 text-black"
                  : "bg-red-500 text-white"
                }`}>
                {button_name}
              </button>
              <h2 className="text-gray-400">{date}</h2>
            </div>
            <p>
              {description}
            </p>
          </div>
          <div className="font-semibold py-2">
            <div className="grid grid-cols-3 gap-2">
              {techStack.map((tech, index)=> (
                <TechButton key={index} text={tech}/>
              ))}
            </div>
          </div>
          <div className="flex gap-4 font-semibold font-poppins text-sm lg:text-lg pt-2 ">
            {gitLink && <button className=" bg-gray-700 text-white px-4 py-1 rounded-lg hover:scale-105">
              <div>
                <a
                  href={gitLink}
                  className="flex items-center gap-2"
                >
                  <IoLogoGithub />
                  Github
                </a>
              </div>
            </button> }
            
            {webLink && <button className=" bg-gray-700 text-white px-4 py-1 rounded-lg hover:scale-105">
              <div className="">
                <a href={webLink} className="flex items-center gap-2">
                <TbWorld /> Website
                </a>    
              </div>
            </button>}
            
          </div>
        </div>
      </div>
    </div>
  );
}




  {/* <div className="flex justify-center">
      <div className="border-[1px] m-2 pb-6 p-2 rounded-lg shadow-lg font-poppins w-[350px]">
        <div className="h-[200px] rounded-lg relative overflow-hidden">
          <video
            className="w-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
            src="../../public/video3.mp4"
            controls
            autoPlay
            loop
            muted
            preload="auto"
          />
        </div>
        <div>
          <h1 className="font-bold text-lg">Kindness Corner</h1>
          <div className="">
            <div className="flex justify-between">
              <button className="text-sm bg-green-500 text-white px-3 py-1 rounded-sm">In progress</button>
              <h2 className="text-gray-400">June 2024</h2>
            </div>
            <p>
              Kindness Corner ❤️ is a platform that bridges the gap between NGOs
              and donors, enabling a voting-based donation system 🗳️. The
              project empowers users to vote for causes, ensuring donations are
              allocated transparently and effectively.
            </p>
          </div>
          <div className="font-normal py-2">
            <div className="grid grid-cols-3 gap-2">
              <TechButton text="React" />
              <TechButton text="Tailwind" />
              <TechButton text="Node" />
              <TechButton text="Express" />
              <TechButton text="MongoDB" />
            </div>
          </div>
          <div className="flex gap-4 font-semibold font-poppins text-sm lg:text-lg pt-2 ">
            <button className=" bg-gray-700 text-white px-4 py-1 rounded-lg hover:scale-105">
              <div>
                <a href="https:github.com/mayurrohokale/Kindness_Corner" className="flex items-center gap-2">
                <IoLogoGithub />Github
                </a>
              </div>
            </button>
            <button className=" bg-gray-700 text-white px-4 py-1 rounded-lg hover:scale-105">
              <div className="flex items-center gap-2">
                <TbWorld /> Website
              </div>
            </button>
          </div>
        </div>
      </div>
      </div> */}