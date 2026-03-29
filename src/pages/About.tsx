import { Suspense, lazy, useEffect, useState, useRef } from "react";
import { AboutSkeleton } from "@/components/about/AboutSkeleton";

// Lazy load heavy components to prevent render blocking
const AboutHero = lazy(() => import("@/components/about/AboutHero").then(m => ({ default: m.AboutHero })));
const AboutPhilosophy = lazy(() => import("@/components/about/AboutPhilosophy").then(m => ({ default: m.AboutPhilosophy })));
const AboutOrigins = lazy(() => import("@/components/about/AboutOrigins").then(m => ({ default: m.AboutOrigins })));
const AboutTeam = lazy(() => import("@/components/about/AboutTeam").then(m => ({ default: m.AboutTeam })));
const AboutCTA = lazy(() => import("@/components/about/AboutCTA").then(m => ({ default: m.AboutCTA })));

const About = () => {
  const [mounted, setMounted] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <div className="w-full min-h-screen bg-black text-foreground flex flex-col relative">
      
      {/* ── Fixed Persistent Video Background ── */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-background">
        <div 
          className={`absolute inset-0 z-10 flex items-center justify-center bg-background transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-0 pointer-events-none" : "opacity-80"
          }`}
        >
          <div className="w-12 h-12 border-4 border-foreground/10 border-t-foreground rounded-full animate-spin" />
        </div>
        
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
          src="/background.mp4"
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setIsVideoLoaded(true)}
        />
      </div>

      {/* ── Scrolling Content Flow (Liquid Glass) ── */}
      <div className="relative z-10 flex flex-col w-full">
        <Suspense fallback={<AboutSkeleton />}>
          {mounted ? (
            <>
              <AboutHero />
              <AboutPhilosophy />
              <AboutOrigins />
              <AboutTeam />
              <AboutCTA />
            </>
          ) : (
            <AboutSkeleton />
          )}
        </Suspense>
        
        {/* ── Footer ── */}
        <footer className="w-full py-8 text-center border-t border-white/5 bg-black/40 backdrop-blur-md">
          <span className="text-xs uppercase tracking-[0.2em] text-foreground/30 font-display">
            The Clutch Series © 2026
          </span>
        </footer>
      </div>
    </div>
  );
};

export default About;
