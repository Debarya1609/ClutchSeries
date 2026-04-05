"use client";

import { useState, useRef, useEffect } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";
import Meteors from "@/components/magicui/meteors";
import { ArrowUpRight, Trophy, Users, Calendar } from "lucide-react";
import { AppLink } from "@/components/AppLink";

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

  const handleMouseEnter = () => setIsMediaActive(true);
  const handleMouseLeave = () => setIsMediaActive(false);
  const handleTap = () => {
    if (typeof window !== "undefined" && !window.matchMedia("(pointer: fine)").matches) {
      setIsMediaActive((prev) => !prev);
    }
  };

  return (
    <section className="relative z-10 w-full px-6 py-24 md:px-10 md:py-32">
      <div className="flex flex-col gap-12">
        <BlurFade delay={0.1} yOffset={20}>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-light uppercase tracking-tight text-foreground/90 md:text-5xl">
              TCS <span className="font-display italic">Invitational</span>
            </h2>
            <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.2em] text-foreground/50">
              <span>Valorant</span>
              <span className="h-1 w-1 rounded-full bg-foreground/30" />
              <span className="flex items-center gap-2 text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Upcoming
              </span>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.2} yOffset={30}>
          <div className="group relative flex aspect-[4/5] w-full flex-col overflow-hidden border border-white/5 bg-background/60 backdrop-blur-3xl md:aspect-[21/9] md:flex-row">
            <BorderBeam size={400} duration={8} anchor={90} colorFrom="#9cacdd" colorTo="#e4d7ae" />

            <div
              className="relative h-1/2 w-full cursor-pointer overflow-hidden bg-[#1c1b1b] md:h-full md:w-2/3"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleTap}
            >
              <Meteors number={20} className="z-0 opacity-30" />
              <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-background/90 via-transparent to-transparent md:bg-gradient-to-r" />
              <img
                src="/Tournament.png"
                alt="Valorant Tournament"
                className={`pointer-events-none absolute inset-0 z-0 h-full w-full object-cover transition-all duration-700 ease-in-out ${
                  isMediaActive ? "scale-105 opacity-0" : "scale-100 opacity-100"
                }`}
              />
              <video
                ref={videoRef}
                src="/Tournament.mp4"
                preload="auto"
                muted
                loop
                playsInline
                className={`pointer-events-none absolute inset-0 z-0 h-full w-full object-cover transition-all duration-700 ease-in-out ${
                  isMediaActive ? "scale-105 opacity-100" : "scale-100 opacity-0"
                }`}
              />
            </div>

            <div className="relative z-20 flex h-1/2 w-full flex-col justify-between gap-8 p-8 md:h-full md:w-1/3 md:p-12">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-foreground/40">
                      Prize Pool
                    </span>
                    <span className="flex items-center gap-3 text-3xl font-light text-foreground">
                      <Trophy className="h-5 w-5 text-primary" />
                      Rs 5,000
                    </span>
                  </div>

                  <div className="h-[1px] w-full bg-white/5" />

                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-foreground/40">
                      Max Teams
                    </span>
                    <span className="flex items-center gap-3 text-xl font-light text-foreground/80">
                      <Users className="h-4 w-4 text-foreground/50" />
                      12 team slots
                    </span>
                  </div>

                  <div className="h-[1px] w-full bg-white/5" />

                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-foreground/40">
                      Date
                    </span>
                    <span className="flex items-center gap-3 text-xl font-light text-foreground/80">
                      <Calendar className="h-4 w-4 text-foreground/50" />
                      To be announced
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-auto flex flex-col gap-4">
                <AppLink
                  href="/registration"
                  className="group relative flex w-full items-center justify-center gap-2 overflow-hidden py-4 text-xs font-semibold uppercase tracking-widest text-background transition-all hover:opacity-90"
                  style={{
                    background:
                      "linear-gradient(to right, hsl(220, 70%, 78%), hsl(40, 80%, 82%))",
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Register Now
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </AppLink>

                <AppLink
                  href="/contact"
                  className="group flex w-full items-center justify-center gap-2 border border-white/5 py-4 text-xs font-semibold uppercase tracking-widest text-foreground transition-all hover:bg-white/5"
                >
                  Contact Us
                </AppLink>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}


