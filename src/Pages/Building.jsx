import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from "../assets/varients";

export default function Building() {
  const [activeView, setActiveView] = useState("customer");

  const views = {
    customer: {
      label: "Customer App",
      title: "Order in seconds",
      points: [
        "Browse seasonal veggies & fruits",
        "Fast checkout + address",
        "Live order status + delivery ETA",
      ],
    },
    ops: {
      label: "Farm Ops",
      title: "Pack & dispatch",
      points: [
        "Incoming orders queue",
        "Packing updates (picked / packed)",
        "Dispatch & delivery assignment",
      ],
    },
    delivery: {
      label: "Delivery",
      title: "6-hour promise",
      points: [
        "Route-ready delivery batches",
        "ETA-first status timeline",
        "Proof of delivery + notes",
      ],
    },
  };

  const selected = views[activeView];

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

            {/* Interactive view switch */}
            <div className="mt-8 rounded-3xl bg-white/60 dark:bg-gray-900/30 border border-white/20 dark:border-white/10 backdrop-blur-xl shadow-2xl">
              <div className="p-4 sm:p-5 border-b border-white/20 dark:border-white/10">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                  {Object.entries(views).map(([key, value]) => {
                    const isActive = key === activeView;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setActiveView(key)}
                        className={
                          "px-3 py-1.5 rounded-2xl text-xs sm:text-sm font-medium transition-colors border " +
                          (isActive
                            ? "bg-blue-600/10 dark:bg-blue-400/10 text-blue-700 dark:text-blue-300 border-blue-500/20 dark:border-blue-400/20"
                            : "bg-white/40 dark:bg-white/5 text-gray-800/80 dark:text-gray-200/70 border-white/30 dark:border-white/10 hover:bg-white/60 dark:hover:bg-white/10")
                        }
                      >
                        {value.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <p className="text-xs font-medium text-gray-700/70 dark:text-gray-200/60">Farm App Snapshot</p>
                <div className="mt-1 flex items-start justify-between gap-4">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">{selected.title}</h2>
                  <span className="shrink-0 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-600/10 dark:bg-blue-400/10 text-blue-700/80 dark:text-blue-300/80">
                    6 hours
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-3">
                  {selected.points.map((text) => (
                    <div
                      key={text}
                      className="rounded-2xl bg-white/55 dark:bg-gray-950/20 border border-white/25 dark:border-white/10 p-4 shadow-lg"
                    >
                      <p className="text-sm text-gray-800/90 dark:text-gray-200/80">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tech-style mock map */}
          <motion.div
            variants={fadeIn("up", 0.25)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false }}
            className="relative"
          >
            <div className="rounded-3xl bg-white/60 dark:bg-gray-900/30 border border-white/20 dark:border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
              <div className="p-5 sm:p-6 flex items-start justify-between gap-4 border-b border-white/20 dark:border-white/10">
                <div>
                  <p className="text-xs font-medium text-gray-700/70 dark:text-gray-200/60">Order Flow Map (animated)</p>
                  <h2 className="mt-1 text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Farm → Warehouse → Zones (demo)</h2>
                </div>
                <span className="shrink-0 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-600/10 dark:bg-purple-400/10 text-purple-700/80 dark:text-purple-300/80">
                  ETA UI
                </span>
              </div>

              <div className="relative h-[320px] sm:h-[360px]">
                {/* Google-like, animated map mock (no real locations) */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900" />
                <div
                  className="absolute inset-0 opacity-[0.55] dark:opacity-[0.3]"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />

                {/* Roads + labels */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 800 450"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  {/* parks/water-ish blocks */}
                  <path
                    d="M80 60 C140 40, 220 60, 260 110 C290 150, 260 210, 200 220 C140 230, 90 190, 70 140 C55 105, 60 80, 80 60 Z"
                    className="text-emerald-500/10 dark:text-emerald-400/10"
                    fill="currentColor"
                  />
                  <path
                    d="M560 260 C620 230, 700 240, 740 300 C770 345, 740 400, 675 410 C600 420, 555 380, 540 330 C528 292, 538 272, 560 260 Z"
                    className="text-blue-500/10 dark:text-blue-400/10"
                    fill="currentColor"
                  />

                  {/* minor roads */}
                  <path
                    d="M40 320 C140 280, 230 270, 330 290 C420 310, 520 350, 640 340 C700 335, 760 310, 790 290"
                    className="text-gray-900/10 dark:text-white/10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M20 170 C130 130, 230 120, 330 140 C430 160, 540 210, 620 210 C700 210, 760 190, 800 170"
                    className="text-gray-900/10 dark:text-white/10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M130 430 C180 360, 250 320, 330 310 C420 298, 500 250, 560 190 C630 120, 700 95, 790 90"
                    className="text-gray-900/10 dark:text-white/10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />

                  {/* road strokes (white center) */}
                  <path
                    d="M40 320 C140 280, 230 270, 330 290 C420 310, 520 350, 640 340 C700 335, 760 310, 790 290"
                    className="text-white/70 dark:text-white/20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M20 170 C130 130, 230 120, 330 140 C430 160, 540 210, 620 210 C700 210, 760 190, 800 170"
                    className="text-white/70 dark:text-white/20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M130 430 C180 360, 250 320, 330 310 C420 298, 500 250, 560 190 C630 120, 700 95, 790 90"
                    className="text-white/70 dark:text-white/20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />

                  {/* subtle labels */}
                  <text x="92" y="245" className="text-gray-700/45 dark:text-gray-200/25" fill="currentColor" fontSize="14">
                    Market Rd
                  </text>
                  <text x="520" y="120" className="text-gray-700/45 dark:text-gray-200/25" fill="currentColor" fontSize="14">
                    Ring St
                  </text>
                  <text x="320" y="80" className="text-gray-700/35 dark:text-gray-200/20" fill="currentColor" fontSize="12">
                    Demo Map
                  </text>
                </svg>

                {/* Animated flow: farm -> warehouse (bulk), then warehouse -> zone-wise customers */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 800 450"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  {/* base routes */}
                  <path
                    d="M160 120 C240 155, 315 195, 410 230"
                    className="text-gray-900/10 dark:text-white/10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M410 230 C480 205, 540 180, 600 150"
                    className="text-gray-900/10 dark:text-white/10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M410 230 C485 260, 545 290, 600 320"
                    className="text-gray-900/10 dark:text-white/10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M410 230 C485 235, 545 235, 610 230"
                    className="text-gray-900/10 dark:text-white/10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />

                  {/* Incoming bulk (farm -> warehouse): blue dashed moving toward warehouse */}
                  <motion.path
                    d="M160 120 C240 155, 315 195, 410 230"
                    className="text-blue-500 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="9 12"
                    animate={{ strokeDashoffset: [120, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Zone-wise distribution (warehouse -> customers): purple dashed moving outward */}
                  <motion.path
                    d="M410 230 C480 205, 540 180, 600 150"
                    className="text-purple-500 dark:text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="8 10"
                    animate={{ strokeDashoffset: [0, -90] }}
                    transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.path
                    d="M410 230 C485 235, 545 235, 610 230"
                    className="text-purple-500 dark:text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="8 10"
                    animate={{ strokeDashoffset: [0, -90] }}
                    transition={{ duration: 2.6, repeat: Infinity, ease: "linear", delay: 0.25 }}
                  />
                  <motion.path
                    d="M410 230 C485 260, 545 290, 600 320"
                    className="text-purple-500 dark:text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="8 10"
                    animate={{ strokeDashoffset: [0, -90] }}
                    transition={{ duration: 2.6, repeat: Infinity, ease: "linear", delay: 0.5 }}
                  />

                  {/* subtle labels */}
                  <text x="146" y="102" className="text-gray-700/45 dark:text-gray-200/25" fill="currentColor" fontSize="12">
                    Farm
                  </text>
                  <text x="392" y="215" className="text-gray-700/45 dark:text-gray-200/25" fill="currentColor" fontSize="12">
                    Warehouse
                  </text>
                  <text x="565" y="140" className="text-gray-700/45 dark:text-gray-200/25" fill="currentColor" fontSize="12">
                    Zone A
                  </text>
                  <text x="575" y="225" className="text-gray-700/45 dark:text-gray-200/25" fill="currentColor" fontSize="12">
                    Zone B
                  </text>
                  <text x="565" y="345" className="text-gray-700/45 dark:text-gray-200/25" fill="currentColor" fontSize="12">
                    Zone C
                  </text>
                </svg>

                {/* Pins: farm -> warehouse -> multiple customers */}
                <div className="absolute left-[135px] top-[95px]">
                  <div className="relative">
                    <div className="h-3.5 w-3.5 rounded-full bg-blue-500 dark:bg-blue-400 shadow-[0_0_0_8px_rgba(59,130,246,0.12)]" />
                    <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl bg-white/75 dark:bg-gray-950/30 border border-white/20 dark:border-white/10 backdrop-blur-xl px-2 py-1 text-[11px] text-gray-800/80 dark:text-gray-200/80">
                      Farm
                    </div>
                  </div>
                </div>
                {/* Customers alongside (right of centered warehouse) */}
                <div
                  className="absolute left-1/2 top-1/2"
                  style={{ transform: "translate(-50%, -50%) translate(190px, -90px)" }}
                >
                  <div className="relative">
                    <div className="h-3.5 w-3.5 rounded-full bg-purple-500 dark:bg-purple-400 shadow-[0_0_0_8px_rgba(168,85,247,0.12)]" />
                    <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl bg-white/75 dark:bg-gray-950/30 border border-white/20 dark:border-white/10 backdrop-blur-xl px-2 py-1 text-[11px] text-gray-800/80 dark:text-gray-200/80">
                      Customer
                    </div>
                  </div>
                </div>
                <div
                  className="absolute left-1/2 top-1/2"
                  style={{ transform: "translate(-50%, -50%) translate(210px, -5px)" }}
                >
                  <div className="relative">
                    <div className="h-3.5 w-3.5 rounded-full bg-purple-500 dark:bg-purple-400 shadow-[0_0_0_8px_rgba(168,85,247,0.12)]" />
                    <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl bg-white/75 dark:bg-gray-950/30 border border-white/20 dark:border-white/10 backdrop-blur-xl px-2 py-1 text-[11px] text-gray-800/80 dark:text-gray-200/80">
                      Customer
                    </div>
                  </div>
                </div>
                <div
                  className="absolute left-1/2 top-1/2"
                  style={{ transform: "translate(-50%, -50%) translate(190px, 95px)" }}
                >
                  <div className="relative">
                    <div className="h-3.5 w-3.5 rounded-full bg-purple-500 dark:bg-purple-400 shadow-[0_0_0_8px_rgba(168,85,247,0.12)]" />
                    <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl bg-white/75 dark:bg-gray-950/30 border border-white/20 dark:border-white/10 backdrop-blur-xl px-2 py-1 text-[11px] text-gray-800/80 dark:text-gray-200/80">
                      Customer
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="h-4 w-4 rounded-full bg-blue-500 dark:bg-blue-400 shadow-[0_0_0_10px_rgba(59,130,246,0.14)]" />
                    <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl bg-white/75 dark:bg-gray-950/30 border border-white/20 dark:border-white/10 backdrop-blur-xl px-2 py-1 text-[11px] text-gray-800/80 dark:text-gray-200/80">
                      Warehouse
                    </div>
                  </div>
                </div>

                {/* Moving dots */}
                <motion.div
                  className="absolute left-[155px] top-[115px]"
                  animate={{ x: [0, 60, 125, 190], y: [0, 22, 48, 78] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
                >
                  <div className="h-2.5 w-2.5 rounded-full bg-blue-600 dark:bg-blue-400 shadow-[0_0_0_8px_rgba(59,130,246,0.12)]" />
                </motion.div>
                <motion.div
                  className="absolute left-1/2 top-1/2"
                  animate={{ x: [0, 80, 150, 195], y: [0, -18, -55, -90] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
                >
                  <div className="h-2.5 w-2.5 rounded-full bg-purple-600 dark:bg-purple-400 shadow-[0_0_0_8px_rgba(168,85,247,0.12)]" />
                </motion.div>
                <motion.div
                  className="absolute left-1/2 top-1/2"
                  animate={{ x: [0, 90, 170, 215], y: [0, -2, -10, -5] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "linear", delay: 0.25 }}
                >
                  <div className="h-2.5 w-2.5 rounded-full bg-purple-600 dark:bg-purple-400 shadow-[0_0_0_8px_rgba(168,85,247,0.12)]" />
                </motion.div>
                <motion.div
                  className="absolute left-1/2 top-1/2"
                  animate={{ x: [0, 80, 150, 195], y: [0, 35, 70, 95] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "linear", delay: 0.5 }}
                >
                  <div className="h-2.5 w-2.5 rounded-full bg-purple-600 dark:bg-purple-400 shadow-[0_0_0_8px_rgba(168,85,247,0.12)]" />
                </motion.div>

                {/* Map-like controls */}
                <div className="absolute right-4 top-4 rounded-2xl bg-white/80 dark:bg-gray-950/30 border border-white/20 dark:border-white/10 backdrop-blur-xl shadow-lg overflow-hidden">
                  <button
                    type="button"
                    aria-label="Zoom in"
                    className="block w-10 h-10 text-gray-900/70 dark:text-gray-100/70 hover:bg-gray-900/5 dark:hover:bg-white/10 transition-colors"
                  >
                    +
                  </button>
                  <div className="h-px bg-white/30 dark:bg-white/10" />
                  <button
                    type="button"
                    aria-label="Zoom out"
                    className="block w-10 h-10 text-gray-900/70 dark:text-gray-100/70 hover:bg-gray-900/5 dark:hover:bg-white/10 transition-colors"
                  >
                    −
                  </button>
                </div>

                {/* Slight gloss for depth */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/25 to-transparent dark:from-white/5" />
              </div>

              <div className="p-5 sm:p-6 border-t border-white/20 dark:border-white/10">
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-white/55 dark:bg-gray-950/20 border border-white/25 dark:border-white/10 p-4 shadow-lg">
                    <p className="text-[11px] text-gray-700/70 dark:text-gray-200/60">Farm Pickup</p>
                    <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">Inbound</p>
                  </div>
                  <div className="rounded-2xl bg-white/55 dark:bg-gray-950/20 border border-white/25 dark:border-white/10 p-4 shadow-lg">
                    <p className="text-[11px] text-gray-700/70 dark:text-gray-200/60">Zone Sort</p>
                    <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">Active</p>
                  </div>
                  <div className="rounded-2xl bg-white/55 dark:bg-gray-950/20 border border-white/25 dark:border-white/10 p-4 shadow-lg">
                    <p className="text-[11px] text-gray-700/70 dark:text-gray-200/60">Out for Delivery</p>
                    <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">Zone-wise</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Other exciting builds */}
        {/* <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }}
          className="mt-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-500 dark:text-blue-400 inline-block relative">
            Also Building
            <motion.div
              className="absolute -bottom-3 left-0 h-1 bg-blue-500 dark:bg-blue-400"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.1 }}
            />
          </h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Motion UI Pack",
                desc: "Reusable micro-interactions for modern web UIs.",
                tag: "Animations",
              },
              {
                title: "Smart Portfolio CMS",
                desc: "A lightweight way to manage projects + content.",
                tag: "Productivity",
              },
              {
                title: "Dev Utilities",
                desc: "Small tools that speed up my workflow.",
                tag: "Tooling",
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="rounded-3xl bg-white/60 dark:bg-gray-900/30 border border-white/20 dark:border-white/10 backdrop-blur-xl shadow-2xl p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{card.title}</h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-600/10 dark:bg-purple-400/10 text-purple-700/80 dark:text-purple-300/80">
                    {card.tag}
                  </span>
                </div>
                <p className="mt-3 text-sm text-gray-700/80 dark:text-gray-200/70">{card.desc}</p>

                <div className="mt-5 rounded-2xl bg-white/55 dark:bg-gray-950/20 border border-white/25 dark:border-white/10 p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] text-gray-700/70 dark:text-gray-200/60">Status</p>
                    <p className="text-[11px] text-gray-700/70 dark:text-gray-200/60">WIP</p>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-gray-900/10 dark:bg-white/10 overflow-hidden">
                    <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-80" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </div>
  );
}
