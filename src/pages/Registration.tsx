import BlurFade from "@/components/magicui/blur-fade";
import RetroGrid from "@/components/magicui/retro-grid";
import { ArrowRight, ClipboardCheck, Shield, Trophy } from "lucide-react";

const steps = [
  {
    title: "Secure Your Slot",
    copy: "Claim your team position early and lock into the first competitive wave before brackets fill up.",
    icon: ClipboardCheck,
  },
  {
    title: "Verify Your Lineup",
    copy: "Confirm roster details, competitive identity, and platform readiness so match day stays clean and fair.",
    icon: Shield,
  },
  {
    title: "Enter The Arena",
    copy: "Step into a tournament environment built to feel premium, visible, and fiercely competitive from the first round.",
    icon: Trophy,
  },
];

const Registration = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-foreground">
      <RetroGrid className="opacity-[0.06]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(156,172,221,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(228,215,174,0.14),transparent_30%)]" />

      <section className="relative z-10 flex min-h-screen flex-col px-6 pb-16 pt-28 md:px-10 md:pt-36">
        <BlurFade delay={0.05}>
          <div className="mb-8 flex items-center gap-2">
            <ArrowRight className="h-4 w-4 text-foreground" />
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-foreground">
              Registration
            </span>
          </div>
        </BlurFade>

        <div className="grid flex-1 grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <BlurFade delay={0.12}>
              <h1
                className="max-w-5xl leading-[0.9] text-foreground"
                style={{ fontSize: "clamp(3.8rem, 11vw, 7rem)", letterSpacing: "-0.05em" }}
              >
                Enter The
                <span className="block bg-gradient-to-r from-[#9cacdd] to-[#e4d7ae] bg-clip-text font-display italic text-transparent">
                  Next Bracket
                </span>
              </h1>
            </BlurFade>

            <BlurFade delay={0.2} yOffset={20}>
              <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-foreground/80 md:text-xl">
                This page is now live and functional instead of sending visitors into a dead route. Use it as the
                registration landing experience while you connect the final form or external sign-up flow.
              </p>
            </BlurFade>
          </div>

          <BlurFade delay={0.28} yOffset={24}>
            <div className="border border-white/10 bg-black/45 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-[24px]">
              <span className="text-xs uppercase tracking-[0.3em] text-[#9cacdd]">Current Status</span>
              <p className="mt-4 text-3xl font-light leading-tight text-foreground">
                Registration flow placeholder is ready for your final form.
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.24em] text-foreground/55">
                Connect this card to Google Forms, Typeform, Discord, or your own backend when you are ready.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      <section className="relative z-10 grid grid-cols-1 gap-6 px-6 pb-24 md:px-10 lg:grid-cols-3">
        {steps.map((step, index) => (
          <BlurFade key={step.title} delay={0.12 + index * 0.08} inView yOffset={24}>
            <div className="group min-h-[280px] border border-white/10 bg-black/40 p-8 backdrop-blur-[22px] transition-colors duration-500 hover:border-white/20">
              <step.icon className="h-10 w-10 text-[#e4d7ae] transition-transform duration-500 group-hover:scale-110" strokeWidth={1.2} />
              <h2 className="mt-12 font-display text-3xl tracking-tight text-foreground">{step.title}</h2>
              <p className="mt-6 text-base leading-relaxed text-foreground/75">{step.copy}</p>
            </div>
          </BlurFade>
        ))}
      </section>
    </div>
  );
};

export default Registration;
