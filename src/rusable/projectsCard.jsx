import TechButton from "./techButton";
import { TbWorld } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ProjectCard({
  project_name,
  date,
  description,
  gitLink,
  webLink,
  src,
  techStack,
  gradient = "from-blue-500 to-purple-500",
  index = 0,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full max-w-[340px] sm:max-w-[360px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Card container with 3D effect */}
      <motion.div
        className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:border-blue-200 transition-all duration-500"
        style={{
          transformStyle: "preserve-3d",
        }}
        whileHover={{
          y: -10,
          boxShadow: "0 25px 50px rgba(59, 130, 246, 0.2)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Gradient glow effect */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-300`}
          animate={{ opacity: isHovered ? 0.05 : 0 }}
        />

        {/* Top decorative bar */}
        <div className={`h-2 bg-gradient-to-r ${gradient}`} />

        {/* Video Section with overlay effects */}
        <div className="relative h-[180px] sm:h-[200px] overflow-hidden group">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

          <motion.video
            className="w-full h-full object-cover"
            src={src}
            controls
            autoPlay
            loop
            muted
            preload="auto"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Date badge with glass effect */}
          <motion.div
            className="absolute top-2 right-2 sm:top-4 sm:right-4 backdrop-blur-md bg-white/80 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs font-semibold text-gray-700 shadow-lg z-20"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            📅 {date}
          </motion.div>

          {/* Play indicator */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20"
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
          >
            <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
            </div>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="p-4 sm:p-6 relative">
          {/* Project Name with gradient accent */}
          <motion.div
            className="mb-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="font-bold text-xl sm:text-2xl text-gray-800 mb-2 relative inline-block">
              {project_name}
              <motion.div
                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r ${gradient}`}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: false }}
                transition={{ delay: 0.4, duration: 0.6 }}
              />
            </h1>
          </motion.div>

          {/* Description with custom scrollbar */}
          <motion.p
            className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 h-[100px] sm:h-[120px] overflow-y-auto pr-2"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#93C5FD #E5E7EB",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {description}
          </motion.p>

          {/* Tech Stack with enhanced buttons */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Tech Stack
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent" />
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + idx * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <TechButton text={tech} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons with enhanced styling */}
          <motion.div
            className="flex gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {gitLink && (
              <motion.a
                href={gitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 bg-gray-800 hover:bg-gray-900 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <IoLogoGithub className="text-base sm:text-lg relative z-10" />
                <span className="relative z-10 hidden sm:inline">GitHub</span>
              </motion.a>
            )}

            {webLink && (
              <motion.a
                href={webLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-r ${gradient} text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <TbWorld className="text-base sm:text-lg relative z-10" />
                <span className="relative z-10 hidden sm:inline">Live Demo</span>
              </motion.a>
            )}
          </motion.div>
        </div>

        {/* Corner decorations */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-3xl" />
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tr-3xl" />
      </motion.div>

      {/* Floating particles effect */}
      {isHovered && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 bg-gradient-to-r ${gradient} rounded-full`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                y: [0, -30],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            />
          ))}
        </>
      )}
    </motion.div>
  );
}