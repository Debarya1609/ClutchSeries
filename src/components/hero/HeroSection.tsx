import { useState, useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { ProgressCircle } from "@/components/hero/ProgressCircle";

const VIDEO_URL =
  "/background.mp4";

export const HeroSection = () => {
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
