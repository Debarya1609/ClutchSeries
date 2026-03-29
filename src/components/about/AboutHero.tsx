"use client";

import BlurFade from "@/components/magicui/blur-fade";
import RetroGrid from "@/components/magicui/retro-grid";
import { ArrowRight } from "lucide-react";

export function AboutHero() {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col justify-end pt-24 px-6 pb-2 md:pt-32 md:px-10 md:pb-16 overflow-hidden bg-transparent">
      
      {/* ── Background Grid & Massive Text ── */}
      <RetroGrid className="z-0 opacity-[0.05]" />

      {/* ── Foreground Content ── */}
      <div className="relative z-10 flex flex-col justify-end h-full mt-auto">
        <BlurFade delay={0.1}>
          <div className="flex items-center gap-2 mb-6">
            <ArrowRight className="text-foreground w-4 h-4 shrink-0" />
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-foreground drop-shadow-md">
              The Prologue
            </span>
          </div>
        </BlurFade>

        <div className="flex flex-col max-w-5xl">
          <BlurFade delay={0.2}>
            <h1
              className="leading-[0.9] -tracking-[0.02em] font-light text-foreground drop-shadow-lg"
              style={{ fontSize: "clamp(3rem, 10vw, 5.5rem)", letterSpacing: "-0.04em" }}
            >
              Beyond The
            </h1>
          </BlurFade>
          <BlurFade delay={0.3}>
            <h1
              className="leading-[0.9] -tracking-[0.02em] font-display text-foreground italic drop-shadow-lg"
              style={{ fontSize: "clamp(3rem, 10vw, 5.5rem)", letterSpacing: "-0.04em" }}
            >
              Lobby
            </h1>
          </BlurFade>
          
          <BlurFade delay={0.4} yOffset={20}>
            <p className="mt-8 text-foreground/80 drop-shadow-md text-lg md:text-xl font-light max-w-2xl leading-relaxed">
              We treat competitive gaming as a high-end luxury sport. Sharp, lethal, and prestigious. We bring unparalleled production value to every frame, every match, every legacy.
            </p>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
