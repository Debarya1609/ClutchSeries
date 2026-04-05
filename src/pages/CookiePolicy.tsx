import BlurFade from "@/components/magicui/blur-fade";

const sections = [
  {
    title: "Essential Cookies",
    body: "The site uses essential storage to remember cookie choices, preserve basic interface continuity, and support core website functions that are required for the page to load and behave properly. These technologies do not require separate marketing-style profiling to serve the site at a basic level.",
  },
  {
    title: "Preference and Performance Storage",
    body: "Preference and performance technologies may be used to understand which pages are visited, how users interact with key sections, whether animations and media load correctly, and how the overall experience can be improved across devices. This information helps us refine content, performance, and tournament discovery flows.",
  },
  {
    title: "Your Choices",
    body: "When the consent banner appears, you can accept all cookies or continue with essential-only storage. You can also clear browser storage manually at any time through your browser settings. If we introduce additional analytics, advertising, or third-party tracking categories later, this policy and the consent experience will be updated to reflect those choices more clearly.",
  },
  {
    title: "Third-Party Services",
    body: "Some website functions may rely on trusted hosting, analytics, font, media, or infrastructure providers. When those services set or read data through the website, they do so only to support site delivery, security, measurement, or embedded content. We aim to keep third-party usage limited to services that are relevant to performance, operations, and compliance.",
  },
];

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-black px-6 pb-24 pt-32 text-foreground md:px-10">
      <div className="mx-auto max-w-4xl">
        <BlurFade>
          <p className="text-xs uppercase tracking-[0.3em] text-[#9cacdd]">Cookie Policy</p>
          <h1 className="mt-4 font-display text-5xl tracking-tight md:text-7xl">How Cookies Work Here.</h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground/75 md:text-lg">
            This Cookie Policy explains how The Clutch Series uses cookies and similar browser storage technologies to
            keep the site functioning, remember consent choices, and improve the experience of visitors, teams, and
            partners.
          </p>
        </BlurFade>

        <div className="mt-16 space-y-8">
          {sections.map((section, index) => (
            <BlurFade key={section.title} delay={0.08 * (index + 1)} inView yOffset={24}>
              <section className="border border-white/10 bg-black/40 p-8 backdrop-blur-[18px]">
                <h2 className="font-display text-3xl text-foreground">{section.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-foreground/75">{section.body}</p>
              </section>
            </BlurFade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
