import BlurFade from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";

const TEAM = [
  {
    name: "Co-Founder",
    image: "/team-shirt.png", // Reusing existing placeholder
    delay: 0.1,
  },
  {
    name: "Co-Founder",
    image: "/arena-mockup.png", // Reusing existing placeholder
    delay: 0.2,
  },
  {
    name: "Co-Founder ",
    image: "/team-shirt.png", // Reusing existing placeholder
    delay: 0.3,
  },
  {
    name: "Streaming Partner",
    image: "/arena-mockup.png", // Reusing existing placeholder
    delay: 0.4,
  },
];

export function AboutTeam() {
  return (
    <section className="relative w-full py-32 px-6 md:px-10 bg-transparent overflow-hidden">
      <div className="w-full flex flex-col max-w-[1400px]">
        <div className="mb-20 text-left">
          <BlurFade inView>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6 drop-shadow-md -ml-1">
              The <span className="font-display italic text-[#9cacdd]">Vanguard</span>
            </h2>
            <p className="text-foreground/90 text-xl font-light leading-relaxed max-w-2xl drop-shadow-md">
              Architects of the arena. Our roster operates in the shadows to guarantee the spotlight never dims on the competitors.
            </p>
          </BlurFade>
        </div>

        {/* CSS Grid for Monolithic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
          {TEAM.map((member, idx) => (
            <BlurFade key={idx} delay={member.delay} inView yOffset={30}>
              <div className="group relative w-full aspect-[3/4] overflow-hidden bg-black/50 backdrop-blur-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.8)] border border-white/10 p-[1px]">
                  {/* Subtle Border Beam */}
                  <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <BorderBeam 
                      duration={8} 
                      size={200}
                      colorFrom="#9cacdd" 
                      colorTo="#e4d7ae" 
                      borderWidth={2}
                    />
                  </div>

                  {/* Inner Content */}
                  <div className="relative z-10 w-full h-full overflow-hidden bg-black/40">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-20" />
                    
                    {/* Placeholder Logic: Monochromatic to Color */}
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out z-10"
                    />

                    {/* Label */}
                    <div className="absolute bottom-6 left-6 right-6 z-30 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                      <span className="text-sm font-display tracking-[0.2em] uppercase text-white bg-black/60 backdrop-blur-xl px-4 py-2 border border-white/20 drop-shadow-lg">
                        {member.name}
                      </span>
                    </div>
                  </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
