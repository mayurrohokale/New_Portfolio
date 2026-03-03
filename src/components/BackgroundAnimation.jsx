import { useState, useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const PARTICLES = [
  { left: "8%", top: "18%", d: 4, delay: 0.2 },
  { left: "38%", top: "34%", d: 5, delay: 0.6 },
  { left: "66%", top: "58%", d: 4.5, delay: 0.9 },
  { left: "78%", top: "26%", d: 5, delay: 0.4 },
  { left: "92%", top: "42%", d: 4, delay: 0.7 },
];

const TECH_PANELS = [
  {
    id: "vscode",
    title: "VS Code",
    badge: "editor",
    position: "top-[14%] right-[6%]",
    parallax: -0.25,
    float: 14,
    tilt: 6,
    hideOnMobile: true,
    kind: "vscode",
  },
  {
    id: "powershell",
    title: "PowerShell",
    badge: "terminal",
    position: "top-[42%] left-[6%]",
    parallax: 0.35,
    float: 16,
    tilt: 7,
    hideOnMobile: true,
    kind: "powershell",
  },
  {
    id: "figma",
    title: "Figma",
    badge: "design",
    position: "bottom-[14%] right-[10%]",
    parallax: -0.18,
    float: 12,
    tilt: 6,
    hideOnMobile: true,
    kind: "figma",
  },
];

export default function BackgroundAnimation() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const rafId = useRef(null);
  const pendingEvent = useRef(null);

  // Throttle mouse tracking to one update per animation frame
  useEffect(() => {
    const handleMouseMove = (e) => {
      pendingEvent.current = e;
      if (rafId.current) return;
      rafId.current = requestAnimationFrame(() => {
        const ev = pendingEvent.current;
        if (ev) {
          setMousePosition({
            x: (ev.clientX / window.innerWidth - 0.5) * 20,
            y: (ev.clientY / window.innerHeight - 0.5) * 20,
          });
        }
        rafId.current = null;
      });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300" />

      {/* Global fade overlay (keeps background subtle behind content) */}
      <div className="absolute inset-0 bg-white/60 dark:bg-black/40" />
      
      {/* Dynamic Background Shapes */}
      <div className="absolute top-0 left-0 w-full sm:w-1/2 h-full bg-blue-100 dark:bg-blue-900/20 opacity-35 transition-colors duration-300">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 dark:bg-blue-800/30 rounded-full blur-3xl opacity-20 transition-colors duration-300" />
        <div className="absolute bottom-40 left-40 w-48 h-48 bg-blue-300 dark:bg-blue-700/30 rounded-full blur-3xl opacity-15 transition-colors duration-300" />
      </div>

      {/* Floating geometric shapes - CSS-only animations (composited, no JS) */}
      <div className="absolute top-1/4 right-1/4 w-16 h-16 border-4 border-blue-400 dark:border-blue-500 opacity-20 transition-colors duration-300 animate-spin" style={{ animationDuration: "12s" }} />
      <div className="absolute bottom-1/3 left-1/4 w-20 h-20 border-4 border-blue-500 dark:border-blue-400 rounded-full opacity-20 transition-colors duration-300" />

      {/* Parallax floating code snippets */}
      <motion.div
        className="absolute top-1/3 left-10 text-blue-300 dark:text-blue-400 opacity-45 font-mono text-sm select-none transition-colors duration-300"
        style={{
          x: mousePosition.x * 0.5,
          y: mousePosition.y * 0.5,
        }}
      >
        {"<div>"}
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/4 right-20 text-blue-300 dark:text-blue-400 opacity-45 font-mono text-sm select-none transition-colors duration-300"
        style={{
          x: mousePosition.x * -0.3,
          y: mousePosition.y * -0.3,
        }}
      >
        {"</code>"}
      </motion.div>

      {/* Floating 3D tech panels (VSCode / PowerShell / Figma-like) */}
      {TECH_PANELS.map((panel, index) => (
        <motion.div
          key={panel.id}
          className={
            `absolute ${panel.position} ` +
            (panel.hideOnMobile ? "hidden sm:block" : "")
          }
          style={{
            x: mousePosition.x * panel.parallax,
            y: mousePosition.y * panel.parallax,
            transformStyle: "preserve-3d",
          }}
          animate={{
            y: [0, -panel.float * 0.5, 0],
          }}
          transition={{
            duration: 10 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Soft glow behind panel */}
          <div className="absolute -inset-8 bg-blue-400/10 dark:bg-blue-500/6 blur-3xl opacity-18" />

          <div
            className="relative w-72 md:w-80 rounded-2xl border border-white/35 dark:border-white/8 bg-white/18 dark:bg-gray-900/16 backdrop-blur-sm shadow-none opacity-65 blur-[0.4px] saturate-90 scale-[0.95]"
            style={{ transform: "perspective(900px) translateZ(0px)" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/25 dark:border-white/10">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-red-400/45" />
                  <span className="w-2 h-2 rounded-full bg-yellow-400/45" />
                  <span className="w-2 h-2 rounded-full bg-green-400/45" />
                </div>
                <span className="text-xs font-semibold tracking-wide text-gray-800/55 dark:text-gray-100/55">
                  {panel.title}
                </span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-600/10 dark:bg-blue-400/10 text-blue-700/60 dark:text-blue-300/60 font-medium">
                {panel.badge}
              </span>
            </div>

            {/* Content */}
            <div className="p-4">
              {panel.kind === "vscode" && (
                <div className="flex gap-3">
                  <div className="w-10 rounded-lg bg-gray-900/4 dark:bg-white/4 p-2">
                    <div className="h-2 w-6 rounded bg-blue-500/22 mb-2" />
                    <div className="h-2 w-5 rounded bg-blue-500/16 mb-2" />
                    <div className="h-2 w-4 rounded bg-blue-500/12" />
                  </div>
                  <div className="flex-1 font-mono text-[11px] leading-5">
                    <div className="text-gray-800/55 dark:text-gray-100/55">
                      <span className="text-purple-600/55 dark:text-purple-300/55">const</span>{" "}
                      <span className="text-blue-700/55 dark:text-blue-300/55">stack</span> = [
                    </div>
                    <div className="text-gray-800/45 dark:text-gray-100/45 pl-4">
                      <span className="text-emerald-700/55 dark:text-emerald-300/55">\"React\"</span>,
                      <span className="text-emerald-700/55 dark:text-emerald-300/55">\"Tailwind\"</span>,
                      <span className="text-emerald-700/55 dark:text-emerald-300/55">\"Node\"</span>
                    </div>
                    <div className="text-gray-800/55 dark:text-gray-100/55">];</div>
                    <div className="text-gray-800/45 dark:text-gray-100/45">
                      <span className="text-purple-600/55 dark:text-purple-300/55">export</span>{" "}
                      <span className="text-purple-600/55 dark:text-purple-300/55">default</span>{" "}
                      <span className="text-blue-700/55 dark:text-blue-300/55">stack</span>;
                    </div>
                  </div>
                </div>
              )}

              {panel.kind === "powershell" && (
                <div className="font-mono text-[11px] leading-5">
                  <div className="text-gray-800/55 dark:text-gray-100/55">
                    <span className="text-blue-700/55 dark:text-blue-300/55">PS</span>{" "}
                    C:\\Users\\mayur&gt; <span className="text-purple-600/80 dark:text-purple-300/90">git</span> status
                  </div>
                  <div className="text-gray-700/45 dark:text-gray-200/45">
                    On branch <span className="text-emerald-700/80 dark:text-emerald-300/90">main</span>
                  </div>
                  <div className="text-gray-700/45 dark:text-gray-200/45">
                    Changes not staged for commit:
                  </div>
                  <div className="text-gray-800/50 dark:text-gray-100/50 pl-4">
                    modified: <span className="text-blue-700/55 dark:text-blue-300/55">src/components/BackgroundAnimation.jsx</span>
                  </div>
                  <div className="text-gray-800/55 dark:text-gray-100/55 mt-1">
                    <span className="text-blue-700/55 dark:text-blue-300/55">PS</span>{" "}
                    C:\\Users\\mayur&gt; <span className="text-purple-600/55 dark:text-purple-300/55">npm</span> run dev
                  </div>
                </div>
              )}

              {panel.kind === "figma" && (
                <div className="flex gap-3">
                  <div className="w-14 rounded-lg bg-gray-900/4 dark:bg-white/4 p-2">
                    <div className="h-2 w-10 rounded bg-purple-500/16 mb-2" />
                    <div className="h-2 w-8 rounded bg-purple-500/12 mb-2" />
                    <div className="h-2 w-9 rounded bg-purple-500/10" />
                  </div>
                  <div className="flex-1">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-14 rounded-xl border border-gray-900/8 dark:border-white/8 bg-gradient-to-br from-blue-500/6 to-purple-500/6" />
                      <div className="h-14 rounded-xl border border-gray-900/8 dark:border-white/8 bg-gradient-to-br from-purple-500/6 to-pink-500/6" />
                      <div className="h-10 rounded-xl border border-gray-900/8 dark:border-white/8 bg-white/22 dark:bg-gray-900/18" />
                      <div className="h-10 rounded-xl border border-gray-900/8 dark:border-white/8 bg-white/18 dark:bg-gray-900/14" />
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-pink-500/35" />
                      <div className="h-2 w-2 rounded-full bg-purple-500/35" />
                      <div className="h-2 w-2 rounded-full bg-blue-500/35" />
                      <div className="h-[2px] flex-1 bg-gray-900/8 dark:bg-white/8" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Particle effects */}
      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400 dark:bg-blue-500 rounded-full opacity-14 transition-colors duration-300"
          style={{
            left: p.left,
            top: p.top,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.d,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
