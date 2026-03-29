"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { Trophy, Goal, Shield, Crosshair, Hexagon, CircleDashed } from "lucide-react";
import { motion } from "framer-motion";

const TENETS = [
  {
    title: "Competitive Integrity",
    desc: "We build stages where skill shines and legacies are cemented, enforcing the highest standards of fair play. Our zero-tolerance policies ensure that the best team always wins.",
    icon: Shield,
    className: "col-span-1 md:col-span-7",
    delay: 0.1,
  },
  {
    title: "Elite Production",
    desc: "Flawless logistics, pristine stream overlay management, and broadcast standards that rival tier-1 traditional sports.",
    icon: Crosshair,
    className: "col-span-1 md:col-span-5",
    delay: 0.2,
  },
  {
    title: "Turnkey Execution",
    desc: "When an organization brings us their vision, we execute the plan flawlessly. You provide the dream, we handle the brackets, broadcast, and logistics.",
    icon: Goal,
    className: "col-span-1 md:col-span-5 relative overflow-hidden",
    delay: 0.3,
  },
  {
    title: "Zero Friction",
    desc: "From qualifiers to the final stream, we strip away the noise so players can focus purely on the win. A seamless, frictionless experience.",
    icon: Trophy,
    className: "col-span-1 md:col-span-7",
    delay: 0.4,
  },
];

export function AboutPhilosophy() {
  return (
    <section className="relative w-full py-32 px-6 md:px-10 bg-transparent overflow-hidden">
      {/* ── Abstract Background Shapes ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ willChange: "transform" }}
          animate={{
            x: ["0%", "30%", "0%"],
            y: ["0%", "40%", "0%"],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(156,172,221,0.08)_0%,transparent_60%)]"
        />
        <motion.div
          style={{ willChange: "transform" }}
          animate={{
            x: ["0%", "-30%", "0%"],
            y: ["0%", "40%", "0%"],
            scale: [1, 1.4, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] right-[0%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(228,215,174,0.05)_0%,transparent_60%)]"
        />
        
        {/* Subtle grid pattern over the void */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBoNDBWMEgweiIgZmlsbD0ibm9uZSIvPjxwaGF0IGQ9Ik0wIDQwaDQwVjBIMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzNmNGU2MCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZykiLz48L3N2Zz4=')] opacity-30 pointer-events-none" />
      </div>

      <div className="relative z-10 w-full flex flex-col gap-24">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 md:gap-12 w-full max-w-[1400px]">
          <BlurFade delay={0.1} inView yOffset={20}>
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-6">
                <Hexagon className="text-[#9cacdd] w-4 h-4 shrink-0" />
                <span className="text-xs font-medium tracking-[0.25em] uppercase text-[#9cacdd] drop-shadow-md">
                  Our Philosophy
                </span>
              </div>
              <h2 className="text-[clamp(3rem,8vw,5.5rem)] font-light tracking-tighter text-foreground max-w-2xl leading-[0.9] -ml-1 drop-shadow-lg">
                The Pursuit Of <br />
                <span className="font-display italic text-transparent bg-clip-text bg-gradient-to-r from-[#9cacdd] to-[#e4d7ae]">
                  Excellence.
                </span>
              </h2>
            </div>
          </BlurFade>
          
          <BlurFade delay={0.2} inView yOffset={20}>
            <p className="text-foreground/90 text-xl font-light leading-relaxed max-w-lg pb-4 border-l border-white/20 pl-6 drop-shadow-md">
              Our philosophy revolves around monolithic minimalism. We remove the excess to reveal the raw, unadulterated nature of true competition.
            </p>
          </BlurFade>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 w-full">
          {TENETS.map((tenet, idx) => (
            <BlurFade key={idx} delay={tenet.delay} inView yOffset={30} className={tenet.className}>
              <div className="group relative w-full h-full min-h-[320px] p-8 md:p-12 bg-black/50 backdrop-blur-[30px] shadow-[0_8px_32px_rgba(0,0,0,0.8)] border border-white/15 overflow-hidden transition-all duration-700 hover:border-white/30 hover:bg-black/60">
                
                {/* Hover Glow Background Map */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#9cacdd]/[0.15] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                {/* Abstract corner shape on hover */}
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[radial-gradient(circle_at_center,rgba(228,215,174,0.25)_0%,transparent_60%)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none will-change-transform" />

                <div className="relative z-10 flex flex-col h-full justify-between gap-12">
                  {/* Icon & Abstract ring */}
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <CircleDashed className="absolute inset-0 w-full h-full text-white/20 group-hover:text-white/40 group-hover:animate-[spin_6s_linear_infinite] transition-all duration-700 stroke-[1px]" />
                    <tenet.icon className="w-8 h-8 text-foreground/70 group-hover:text-[#9cacdd] transition-colors duration-500 transform group-hover:scale-110 drop-shadow-md" />
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <h3 className="text-2xl md:text-3xl font-medium tracking-tight uppercase text-foreground/90 font-display transition-colors duration-300 drop-shadow-md">
                      {tenet.title}
                    </h3>
                    <p className="text-foreground/80 text-lg font-light leading-relaxed group-hover:text-foreground/100 transition-colors duration-300 drop-shadow-sm">
                      {tenet.desc}
                    </p>
                  </div>
                </div>
                
                {/* Micro-interaction: HUD Corner Accents */}
                <div className="absolute top-0 right-0 w-12 h-[1px] bg-gradient-to-r from-transparent to-white/40 group-hover:to-[#9cacdd] transition-colors duration-500" />
                <div className="absolute top-0 right-0 w-[1px] h-12 bg-gradient-to-b from-transparent to-white/40 group-hover:to-[#9cacdd] transition-colors duration-500" />
              </div>
            </BlurFade>
          ))}
        </div>

      </div>
    </section>
  );
}
