import { Users, Radio, ShieldCheck, Sparkles } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";

const TEAM = [
  {
    name: "Founding Team",
    detail: "Vision, direction, and tournament identity.",
    icon: Users,
    delay: 0.1,
  },
  {
    name: "Production Core",
    detail: "Broadcast rhythm, stage polish, and flow control.",
    icon: Radio,
    delay: 0.2,
  },
  {
    name: "Competitive Ops",
    detail: "Bracket integrity, rules, and match execution.",
    icon: ShieldCheck,
    delay: 0.3,
  },
  {
    name: "Creative Partners",
    detail: "Motion, visuals, and atmosphere around every event.",
    icon: Sparkles,
    delay: 0.4,
  },
];

export function AboutTeam() {
  return (
    <section className="relative w-full overflow-hidden bg-transparent px-6 py-32 md:px-10">
      <div className="flex w-full max-w-[1400px] flex-col">
        <div className="mb-20 text-left">
          <BlurFade inView>
            <h2 className="-ml-1 mb-6 text-4xl font-light tracking-tight drop-shadow-md md:text-5xl">
              The <span className="font-display italic text-[#9cacdd]">Vanguard</span>
            </h2>
            <p className="max-w-2xl text-xl font-light leading-relaxed text-foreground/90 drop-shadow-md">
              Architects of the arena. Our roster operates in the shadows to guarantee the spotlight never dims on the
              competitors.
            </p>
          </BlurFade>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member, idx) => (
            <BlurFade key={idx} delay={member.delay} inView yOffset={30}>
              <div className="group relative aspect-[3/4] w-full overflow-hidden border border-white/10 bg-black/50 p-[1px] shadow-[0_8px_32px_rgba(0,0,0,0.8)] backdrop-blur-[24px]">
                <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                  <BorderBeam
                    duration={8}
                    size={200}
                    colorFrom="#9cacdd"
                    colorTo="#e4d7ae"
                    borderWidth={2}
                  />
                </div>

                <div className="relative z-10 h-full w-full overflow-hidden bg-black/40">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(156,172,221,0.25),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(228,215,174,0.18),transparent_38%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.03)_0%,transparent_40%,rgba(255,255,255,0.02)_100%)] opacity-70 transition-opacity duration-700 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-20" />

                  <div className="absolute inset-0 z-10 flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-110">
                    <member.icon className="h-24 w-24 text-white/35 group-hover:text-[#9cacdd]" strokeWidth={1} />
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 z-30 translate-y-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="border border-white/20 bg-black/60 px-4 py-3 backdrop-blur-xl drop-shadow-lg">
                      <span className="block text-sm font-display uppercase tracking-[0.2em] text-white">
                        {member.name}
                      </span>
                      <span className="mt-2 block text-xs uppercase tracking-[0.18em] text-white/55">
                        {member.detail}
                      </span>
                    </div>
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
