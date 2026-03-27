import { useState, useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { MenuOverlay } from "@/components/hero/MenuOverlay";
import { ProgressCircle } from "@/components/hero/ProgressCircle";

const VIDEO_URL =
  "/background.mp4";

export const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6; // Slow down the video
    }
  }, []);

  return (
    <section className="relative w-full h-screen min-h-screen flex flex-col overflow-hidden bg-background">
      {/* ── Loader Overlay ── */}
      <div 
        className={`absolute inset-0 z-10 flex items-center justify-center bg-background transition-opacity duration-1000 ${
          isVideoLoaded ? "opacity-0 pointer-events-none" : "opacity-80"
        }`}
      >
        <div className="w-12 h-12 border-4 border-foreground/10 border-t-foreground rounded-full animate-spin" />
      </div>

      {/* ── Video Background ── */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover object-[37%_center] z-0 transition-opacity duration-1000 ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
        src={VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
        onCanPlay={() => setIsVideoLoaded(true)}
      />

      {/* ── Overlay Menu ── */}
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* ── Navigation Bar ── */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-5">
        {/* Menu button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="flex items-center gap-3 px-4 py-2 rounded-full border border-foreground/30 text-foreground uppercase tracking-widest text-xs font-medium"
        >
          <span className="flex flex-col gap-[4px]">
            <span className="block w-7 h-[2px] bg-foreground" />
            <span className="block w-7 h-[2px] bg-foreground" />
          </span>
          <span>Menu</span>
        </button>

        {/* Center Logo */}
        <a href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 text-2xl font-bold tracking-wider text-foreground">
          TCS
        </a>

        {/* Right nav links (desktop only) */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/about"
            className="px-4 py-2 rounded-full border border-foreground/30 text-foreground text-xs font-medium uppercase tracking-widest hover:bg-foreground/10 transition-colors"
          >
            About Us
          </a>
          <a
            href="/tournaments"
            className="px-4 py-2 rounded-full border border-foreground/30 text-foreground text-xs font-medium uppercase tracking-widest hover:bg-foreground/10 transition-colors"
          >
            Tournaments
          </a>
          <a
            href="/registration"
            className="px-5 py-2 rounded-full text-xs font-medium uppercase tracking-widest text-background transition-opacity hover:opacity-90"
            style={{
              background:
                "linear-gradient(to right, hsl(220, 70%, 78%), hsl(40, 80%, 82%))",
            }}
          >
            Registration
          </a>
        </div>
      </nav>

      {/* ── Main Content ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-start md:justify-end pt-6 px-6 pb-2 md:pt-0 md:px-10 md:pb-16">
        {/* Subheading row */}
        <div className="flex items-center gap-2 mb-6">
          <ArrowRight className="text-foreground w-4 h-4 shrink-0" />
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-foreground">
            The Clutch Series
          </span>
        </div>

        {/* Heading + Stats */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-0 flex-1 lg:flex-none">
          {/* Heading */}
          <h1
            className="leading-[0.9] -tracking-[0.02em]"
            style={{ letterSpacing: "-0.05em" }}
          >
            <span
              className="block font-light text-foreground"
              style={{ fontSize: "clamp(4rem, 12vw, 6rem)" }}
            >
              Enter The
            </span>
            <span
              className="block font-light text-foreground"
              style={{ fontSize: "clamp(4rem, 12vw, 6rem)" }}
            >
              Ultimate
            </span>
            <span
              className="block font-display text-foreground"
              style={{ fontSize: "clamp(4rem, 12vw, 6rem)" }}
            >
              Arena
            </span>
          </h1>

          {/* Stats / Progress Circle */}
          <div className="mt-auto lg:mt-0 pt-8 lg:pt-0">
            <ProgressCircle />
          </div>
        </div>
      </div>

    </section>
  );
};
