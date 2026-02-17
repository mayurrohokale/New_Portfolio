// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function TechButton({ text }) {
  return (
    <motion.button
      className="relative bg-gradient-to-r from-gray-100 to-gray-200 hover:from-blue-50 hover:to-blue-100 dark:from-gray-700 dark:to-gray-600 dark:hover:from-blue-900/50 dark:hover:to-blue-800/50 text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-50"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.5 }}
      />
      <span className="relative z-10">{text}</span>
    </motion.button>
  );
}