"use client";

import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import BlurFade from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";
import Meteors from "@/components/magicui/meteors";
import { ArrowUpRight, Trophy, Users, Calendar } from "lucide-react";

export function ValorantTournament() {
  const [isMediaActive, setIsMediaActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isMediaActive) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isMediaActive]);

  // Separate desktop hover and mobile tap handlers
  const handleMouseEnter = () => setIsMediaActive(true);
  const handleMouseLeave = () => setIsMediaActive(false);
  const handleTap = (e: React.MouseEvent) => {
    // Only fire click toggle on touch devices (mobile), not desktop
    if (!window.matchMedia('(pointer: fine)').matches) {
      setIsMediaActive(prev => !prev);
    }
  };

  return (
    <section className="relative w-full z-10 px-6 py-24 md:px-10 md:py-32">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Header section with BlurFade */}
        <BlurFade delay={0.1} yOffset={20}>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-foreground/90 uppercase">
              TCS <span className="font-display italic">Invitational</span>
            </h2>
            <div className="flex items-center gap-4 text-xs font-medium tracking-[0.2em] uppercase text-foreground/50">
              <span>Valorant</span>
              <span className="w-1 h-1 rounded-full bg-foreground/30" />
              <span className="text-primary flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Upcoming
              </span>
            </div>
          </div>
        </BlurFade>

        {/* Monolithic Glass Card */}
        <BlurFade delay={0.2} yOffset={30}>
          <div className="relative w-full aspect-[4/5] md:aspect-[21/9] bg-background/60 backdrop-blur-3xl border border-white/5 overflow-hidden flex flex-col md:flex-row group rounded-none">
            
            <BorderBeam size={400} duration={8} anchor={90} colorFrom="#9cacdd" colorTo="#e4d7ae" />

            {/* Image with Interactive Video on hover/tap */}
            <div 
              className="relative w-full md:w-2/3 h-1/2 md:h-full bg-[#1c1b1b] overflow-hidden cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleTap}
            >
              <Meteors number={20} className="z-0 opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background/90 via-transparent to-transparent z-10 pointer-events-none" />
              {/* Image — fully visible by default */}
              <img 
                src="/Tournament.png" 
                alt="Valorant Tournament" 
                className={`absolute inset-0 z-0 w-full h-full object-cover transition-all duration-700 ease-in-out pointer-events-none ${isMediaActive ? "opacity-0 scale-105" : "opacity-100 scale-100"}`}
              />
              {/* Video — crossfades in on hover/tap */}
              <video
                ref={videoRef}
                src="/Tournament.mp4"
                muted
                loop
                playsInline
                className={`absolute inset-0 z-0 w-full h-full object-cover transition-all duration-700 ease-in-out pointer-events-none ${isMediaActive ? "opacity-100 scale-105" : "opacity-0 scale-100"}`}
              />
            </div>

            {/* Info Panel */}
            <div className="relative w-full md:w-1/3 p-8 md:p-12 flex flex-col justify-between z-20 gap-8 h-1/2 md:h-full">
              
              <div className="flex flex-col gap-8">
                {/* Stats Grid */}
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-foreground/40 font-medium">Prize Pool</span>
                    <span className="text-3xl font-light text-foreground flex items-center gap-3">
                      <Trophy className="w-5 h-5 text-primary" />
                      $150,000
                    </span>
                  </div>
                  
                  <div className="w-full h-[1px] bg-white/5" />
                  
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-foreground/40 font-medium">Max Teams</span>
                    <span className="text-xl font-light text-foreground/80 flex items-center gap-3">
                      <Users className="w-4 h-4 text-foreground/50" />
                      64 Slots
                    </span>
                  </div>
                  
                  <div className="w-full h-[1px] bg-white/5" />
                  
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-foreground/40 font-medium">Date</span>
                    <span className="text-xl font-light text-foreground/80 flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-foreground/50" />
                      Aug 12 - Aug 20, 2026
                    </span>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-4 mt-auto">
                <Link
                  to="/registration"
                  className="group relative flex items-center justify-center gap-2 w-full py-4 text-xs font-semibold uppercase tracking-widest text-background transition-all hover:opacity-90 overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(to right, hsl(220, 70%, 78%), hsl(40, 80%, 82%))",
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Register Now
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </Link>
                
                <Link
                  to="/contact"
                  className="group flex items-center justify-center gap-2 w-full py-4 text-xs font-semibold uppercase tracking-widest text-foreground transition-all hover:bg-white/5 border border-white/5"
                >
                  Contact Us
                </Link>
              </div>

            </div>
          </div>
        </BlurFade>

      </div>
    </section>
  );
}
