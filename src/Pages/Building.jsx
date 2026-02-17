// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from "../assets/varients";

export default function Building() {
  return (
    <div className="relative min-h-screen font-poppins pt-24 pb-16 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start"
        >
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500 dark:text-blue-400 inline-block relative">
              Currently Building
              <motion.div
                className="absolute -bottom-3 left-0 h-1 bg-blue-500 dark:bg-blue-400"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: false }}
                transition={{ duration: 0.9, delay: 0.15 }}
              />
            </h1>
            <p className="mt-4 text-gray-700/90 dark:text-gray-200/80 max-w-xl mx-auto lg:mx-0">
              I’m building an app that delivers fresh organic veggies and fruits within <span className="font-semibold">6 hours</span>
              <span className="hidden sm:inline"> — </span>
              <span className="sm:hidden">.</span>
              <span className="inline"> From </span>
              <span className="font-semibold">Rohokale Farm</span>
              <span className="inline"> to the customer.</span>
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-600/10 dark:bg-blue-400/10 text-blue-700/80 dark:text-blue-300/80">
                In progress
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-600/10 dark:bg-purple-400/10 text-purple-700/80 dark:text-purple-300/80">
                Delivery tracking (WIP)
              </span>
            </div>
          </div>

          <div className="relative perspective-[1100px]">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-6 -right-6 h-28 w-28 rounded-3xl bg-gradient-to-br from-blue-600/25 to-purple-600/25 dark:from-blue-400/20 dark:to-purple-400/20 blur-2xl" />
              <div className="absolute -bottom-8 -left-6 h-28 w-28 rounded-3xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 dark:from-purple-400/15 dark:to-blue-400/15 blur-2xl" />

              <div className="absolute -top-4 left-10 h-10 w-10 rounded-2xl bg-white/50 dark:bg-white/10 border border-white/30 dark:border-white/10 backdrop-blur-xl shadow-lg transform-gpu rotateX-[55deg] rotateY-[-28deg] rotate-12" />
              <div className="absolute top-16 -right-3 h-12 w-12 rounded-2xl bg-white/50 dark:bg-white/10 border border-white/30 dark:border-white/10 backdrop-blur-xl shadow-lg transform-gpu rotateX-[62deg] rotateY-[22deg] -rotate-6" />
              <div className="absolute -bottom-5 right-14 h-9 w-9 rounded-2xl bg-white/50 dark:bg-white/10 border border-white/30 dark:border-white/10 backdrop-blur-xl shadow-lg transform-gpu rotateX-[58deg] rotateY-[30deg] rotate-3" />
            </div>

            <div className="rounded-3xl bg-white/60 dark:bg-gray-900/30 border border-white/20 dark:border-white/10 backdrop-blur-xl p-6 sm:p-8 shadow-2xl transform-gpu rotateX-[2deg] rotateY-[-2deg]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium text-gray-700/70 dark:text-gray-200/60">Build Snapshot</p>
                <h2 className="mt-1 text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                  Rohokale Farm • 6-hour delivery
                </h2>
              </div>
              <span className="shrink-0 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-600/10 dark:bg-blue-400/10 text-blue-700/80 dark:text-blue-300/80">
                WIP
              </span>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3">
              <div className="rounded-2xl bg-white/55 dark:bg-gray-950/20 border border-white/25 dark:border-white/10 p-5 shadow-lg">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">1) Browse & Order</p>
                <p className="mt-1 text-sm text-gray-700/80 dark:text-gray-200/70">Seasonal produce, clean catalog, quick add-to-cart.</p>
              </div>
              <div className="rounded-2xl bg-white/55 dark:bg-gray-950/20 border border-white/25 dark:border-white/10 p-5 shadow-lg">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">2) Pack from the Farm</p>
                <p className="mt-1 text-sm text-gray-700/80 dark:text-gray-200/70">Fresh packing updates and order status.</p>
              </div>
              <div className="rounded-2xl bg-white/55 dark:bg-gray-950/20 border border-white/25 dark:border-white/10 p-5 shadow-lg">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">3) Deliver in 6 Hours</p>
                <p className="mt-1 text-sm text-gray-700/80 dark:text-gray-200/70">Fast dispatch with a simple ETA experience.</p>
              </div>
            </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
