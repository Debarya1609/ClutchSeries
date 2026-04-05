import BlurFade from "@/components/magicui/blur-fade";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Users } from "lucide-react";
import { AppLink } from "@/components/AppLink";

export function AboutCTA() {
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden bg-transparent py-48">
      <BlurFade delay={0.1} inView yOffset={40}>
        <div className="flex max-w-2xl flex-col items-center px-6 text-center">
          <Users className="mb-8 h-12 w-12 text-[#9cacdd]/30" />

          <h2 className="mb-10 font-display text-5xl font-light tracking-tighter md:text-7xl">
            The Arena Awaits.
          </h2>

          <AppLink href="/contact">
            <ShimmerButton
              className="text-xs font-medium uppercase tracking-widest"
              shimmerColor="rgba(255,255,255,0.4)"
              background="linear-gradient(to right, hsl(220, 70%, 78%), hsl(40, 80%, 82%))"
              borderRadius="0px"
            >
              <span className="text-[#051942]">Talk To The Team</span>
            </ShimmerButton>
          </AppLink>
        </div>
      </BlurFade>
    </section>
  );
}
