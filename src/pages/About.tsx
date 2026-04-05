import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { AboutSkeleton } from "@/components/about/AboutSkeleton";
import { usePageEntryLoading } from "@/hooks/use-page-entry-loading";

const AboutHero = lazy(() =>
  import("@/components/about/AboutHero").then((m) => ({ default: m.AboutHero })),
);
const AboutPhilosophy = lazy(() =>
  import("@/components/about/AboutPhilosophy").then((m) => ({ default: m.AboutPhilosophy })),
);
const AboutOrigins = lazy(() =>
  import("@/components/about/AboutOrigins").then((m) => ({ default: m.AboutOrigins })),
);
const AboutTeam = lazy(() =>
  import("@/components/about/AboutTeam").then((m) => ({ default: m.AboutTeam })),
);
const AboutCTA = lazy(() =>
  import("@/components/about/AboutCTA").then((m) => ({ default: m.AboutCTA })),
);

const About = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isEntryLoading = usePageEntryLoading();

  useEffect(() => {
    setIsVideoLoaded(false);

    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-black text-foreground">
      <div className="fixed inset-0 z-0 pointer-events-none bg-background">
        <div
          className={`absolute inset-0 z-10 flex items-center justify-center bg-background transition-opacity duration-1000 ${
            isVideoLoaded ? "pointer-events-none opacity-0" : "opacity-80"
          }`}
        >
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-foreground/10 border-t-foreground" />
        </div>

        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
          src="/background.mp4"
          preload="auto"
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setIsVideoLoaded(true)}
        />
      </div>

      <div className="relative z-10 flex w-full flex-col">
        <Suspense fallback={<AboutSkeleton />}>
          {isEntryLoading ? (
            <AboutSkeleton />
          ) : (
            <>
              <AboutHero />
              <AboutPhilosophy />
              <AboutOrigins />
              <AboutTeam />
              <AboutCTA />
            </>
          )}
        </Suspense>

        <footer className="w-full border-t border-white/5 bg-black/40 py-8 text-center backdrop-blur-md">
          <span className="font-display text-xs uppercase tracking-[0.2em] text-foreground/30">
            The Clutch Series © 2026
          </span>
        </footer>
      </div>
    </div>
  );
};

export default About;
