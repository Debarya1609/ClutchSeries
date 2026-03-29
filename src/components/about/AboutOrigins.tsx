"use client";

import BlurFade from "@/components/magicui/blur-fade";
import Meteors from "@/components/magicui/meteors";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Cpu, Network, ShieldAlert } from "lucide-react";

export function AboutOrigins() {
  return (
    <section className="relative w-full py-32 px-6 md:px-10 bg-transparent overflow-hidden min-h-screen flex items-center border-t border-white/5">
      
      {/* ── Massive Background Year Parallax ── */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center pointer-events-none z-0 select-none overflow-hidden">
        <h2 className="text-[35vw] font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/[0.04] to-transparent leading-none tracking-tighter whitespace-nowrap">
          2026
        </h2>
      </div>

      <div className="w-full justify-center mx-auto flex flex-col relative z-10 max-w-[1400px]">
        
        {/* Header Section */}
        <div className="mb-16 md:mb-24 flex flex-col items-center justify-center w-full text-center">
          <BlurFade inView>
            <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-[#9cacdd]/30 bg-[#9cacdd]/5 backdrop-blur-md mb-6 mx-auto">
              <span className="w-2 h-2 rounded-full bg-[#9cacdd] animate-pulse shadow-[0_0_10px_#9cacdd]" />
              <span className="text-[10px] font-display uppercase tracking-[0.3em] text-[#9cacdd]">Servers Live</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter mb-6 leading-[0.9] drop-shadow-md mx-auto">
              Genesis <span className="font-display italic text-transparent bg-clip-text bg-gradient-to-r from-[#9cacdd] to-[#e4d7ae] pr-2 md:pr-4 py-2">Protocol</span>
            </h2>
            <p className="text-foreground/90 md:text-xl font-light leading-relaxed max-w-2xl border-l-[2px] border-[#9cacdd]/30 pl-6 drop-shadow-md mx-auto text-left inline-block">
              The journey begins now. 2026 marks the official launch of The Clutch Series. A hard reset on how esports ecosystems are structured, broadcasted, and fiercely contested.
            </p>
          </BlurFade>
        </div>

        {/* ── Asymmetric Data-Center Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full auto-rows-auto">
          
          {/* Card 1: Tactical Inception (Spans 8 cols) */}
          <BlurFade inView delay={0.2} className="md:col-span-8 group relative w-full p-[1px] bg-white/5 overflow-hidden">
            {/* Hover Border Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#9cacdd] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0" />
            
            <div className="relative z-10 w-full h-full min-h-[350px] bg-black/60 backdrop-blur-[40px] p-8 md:p-12 flex flex-col justify-between overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_center,rgba(156,172,221,0.1)_0%,transparent_60%)] blur-[40px] rounded-full pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100" />
              
              <div className="flex items-start justify-between z-10 w-full mb-12">
                <ShieldAlert className="w-10 h-10 text-white/40 group-hover:text-[#9cacdd] transition-colors duration-500" strokeWidth={1} />
                <span className="text-xs font-display tracking-[0.2em] text-white/30 uppercase">Bracket Alpha</span>
              </div>
              
              <div className="z-10 mt-auto">
                <h3 className="text-3xl lg:text-4xl font-display uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 group-hover:from-[#9cacdd] group-hover:to-[#e4d7ae] transition-all duration-500 mb-4 drop-shadow-sm">The Arena</h3>
                <p className="text-foreground/80 md:text-lg font-light max-w-xl leading-relaxed group-hover:text-white transition-colors">
                  Frustrated with amateur broadcasting and chaotic matchmaking, we designed a high-stakes, uncompromising arena where every frame of a match feels like a world championship final.
                </p>
              </div>
              
              {/* Data lines overlay */}
              <div className="absolute bottom-0 right-8 w-[1px] h-32 bg-gradient-to-t from-[#9cacdd]/40 to-transparent transform translate-y-full group-hover:-translate-y-4 transition-transform duration-700 opacity-0 group-hover:opacity-100" />
            </div>
          </BlurFade>

          {/* Card 2: Monolithic Core (Spans 4 cols) */}
          <BlurFade inView delay={0.3} className="md:col-span-4 group relative w-full p-[1px] bg-white/5 overflow-hidden">
             {/* Border Beam Effect */}
             <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
               <BorderBeam duration={12} size={150} colorFrom="#e4d7ae" colorTo="#9cacdd" borderWidth={2} />
             </div>
            
            <div className="relative z-10 w-full h-full min-h-[350px] bg-black/60 backdrop-blur-[40px] p-8 flex flex-col items-center justify-center text-center overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
               {/* Internal rotating core */}
               <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none">
                 <div className="w-48 h-48 border border-[#e4d7ae] rounded-full animate-[spin_10s_linear_infinite] border-dashed" />
               </div>
               
               <Cpu className="w-12 h-12 text-[#e4d7ae] mb-6 transform group-hover:scale-110 group-hover:shadow-[0_0_20px_#e4d7ae] rounded-full transition-all duration-500" strokeWidth={1} />
               <h3 className="text-2xl font-display uppercase tracking-widest text-white mb-4">The Engine</h3>
               <p className="text-foreground/70 font-light leading-relaxed max-w-xs group-hover:text-foreground/90 transition-colors">
                 Forging the proprietary tournament architecture that powers lag-free, high-fidelity multi-title bracket escalation.
               </p>
               
               <span className="absolute bottom-6 right-8 text-xs font-display tracking-[0.2em] text-white/30 uppercase">Main Stage</span>
            </div>
          </BlurFade>

          {/* Card 3: Global Network (Spans 12 cols, horizontal bar) */}
          <BlurFade inView delay={0.4} className="md:col-span-12 group relative w-full p-[1px] bg-white/5 overflow-hidden">
            <div className="relative z-10 w-full bg-black/50 backdrop-blur-[30px] p-8 md:px-12 md:py-16 flex flex-col md:flex-row items-center justify-between overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.8)] border-t-[1px] border-t-white/10 group-hover:border-t-[#9cacdd] transition-colors duration-500">
              
              {/* Network flow effect */}
              <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-50 transition-opacity duration-1000 pointer-events-none mix-blend-screen">
                <Meteors number={15} className="!w-[1px] bg-[#9cacdd]" />
              </div>
              
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 z-10 mb-8 md:mb-0 w-full md:w-auto">
                <Network className="w-16 h-16 text-white/20 group-hover:text-[#9cacdd] transition-colors duration-500 shrink-0" strokeWidth={1} />
                <div className="flex flex-col text-left">
                  <h3 className="text-3xl md:text-4xl font-display uppercase tracking-widest text-[#9cacdd] mb-3 drop-shadow-md">
                    Global Syndicate
                  </h3>
                  <p className="text-foreground/80 font-light max-w-xl md:text-lg leading-relaxed group-hover:text-white transition-colors">
                    The rollout of our monolithic competitive platform. We expand beyond single regional matches into an interconnected, elite global league. Only the best survive.
                  </p>
                </div>
              </div>
              
              <div className="z-10 flex flex-col items-end w-full md:w-auto text-right md:-mr-4">
                <span className="text-[3rem] md:text-[5rem] font-display font-light text-white/20 group-hover:text-white leading-[0.8] transition-colors duration-700 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  MATCH
                </span>
                <span className="text-[10px] md:text-xs font-display tracking-[0.4em] text-[#e4d7ae] uppercase mt-4 block">
                  Found In Progress
                </span>
              </div>
            </div>
          </BlurFade>

        </div>
      </div>
    </section>
  );
}
