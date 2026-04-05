import BlurFade from "@/components/magicui/blur-fade";
import { Mail, MessageSquareMore, RadioTower, ArrowRight } from "lucide-react";

const channels = [
  {
    title: "Partnerships",
    body: "Use this area for sponsor decks, collab requests, venue conversations, and production tie-ins.",
    icon: RadioTower,
  },
  {
    title: "Team Enquiries",
    body: "Route roster questions, tournament participation interest, and competitive communication through this section.",
    icon: MessageSquareMore,
  },
  {
    title: "Direct Contact",
    body: "Replace the placeholder text below with your final email, Discord, Instagram, or WhatsApp contact path.",
    icon: Mail,
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <section className="relative overflow-hidden px-6 pb-24 pt-28 md:px-10 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(156,172,221,0.15),transparent_28%),radial-gradient(circle_at_bottom,rgba(228,215,174,0.13),transparent_25%)]" />

        <div className="relative z-10">
          <BlurFade delay={0.05}>
            <div className="mb-8 flex items-center gap-2">
              <ArrowRight className="h-4 w-4 text-foreground" />
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-foreground">
                Contact
              </span>
            </div>
          </BlurFade>

          <BlurFade delay={0.12}>
            <h1
              className="max-w-5xl leading-[0.9]"
              style={{ fontSize: "clamp(3.4rem, 10vw, 6.5rem)", letterSpacing: "-0.05em" }}
            >
              Build The
              <span className="block bg-gradient-to-r from-[#9cacdd] to-[#e4d7ae] bg-clip-text font-display italic text-transparent">
                Signal Line
              </span>
            </h1>
          </BlurFade>

          <BlurFade delay={0.2} yOffset={20}>
            <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-foreground/80 md:text-xl">
              This route now works properly, matches the rest of the site, and gives you a polished place to expose your
              real communication channels instead of dropping visitors onto a 404.
            </p>
          </BlurFade>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 px-6 pb-24 md:px-10 lg:grid-cols-3">
        {channels.map((channel, index) => (
          <BlurFade key={channel.title} delay={0.15 + index * 0.08} inView yOffset={24}>
            <div className="min-h-[260px] border border-white/10 bg-black/45 p-8 shadow-[0_18px_70px_rgba(0,0,0,0.35)] backdrop-blur-[22px]">
              <channel.icon className="h-10 w-10 text-[#9cacdd]" strokeWidth={1.2} />
              <h2 className="mt-10 font-display text-3xl tracking-tight text-foreground">{channel.title}</h2>
              <p className="mt-6 text-base leading-relaxed text-foreground/75">{channel.body}</p>
            </div>
          </BlurFade>
        ))}
      </section>
    </div>
  );
};

export default Contact;
