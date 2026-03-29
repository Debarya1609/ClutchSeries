import BlurFade from "@/components/magicui/blur-fade";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Users } from "lucide-react";

export function AboutCTA() {
  return (
    <section className="relative w-full py-48 flex justify-center items-center overflow-hidden bg-transparent">

      <BlurFade delay={0.1} inView yOffset={40}>
        <div className="text-center px-6 max-w-2xl flex flex-col items-center">
          <Users className="w-12 h-12 text-[#9cacdd]/30 mb-8" />
          
          <h2 className="text-5xl md:text-7xl font-light tracking-tighter mb-10 font-display">
            The Arena Awaits.
          </h2>
          
          <ShimmerButton 
            className="text-xs font-medium tracking-widest uppercase"
            shimmerColor="rgba(255,255,255,0.4)"
            background="linear-gradient(to right, hsl(220, 70%, 78%), hsl(40, 80%, 82%))"
            borderRadius="0px"
          >
             <span className="text-[#051942]">View Current Roster</span>
          </ShimmerButton>
        </div>
      </BlurFade>
    </section>
  );
}
