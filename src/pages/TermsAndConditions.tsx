import BlurFade from "@/components/magicui/blur-fade";

const sections = [
  {
    title: "Use of the Website",
    body: "You may access and use this website only for lawful purposes and in a manner that does not interfere with the operation, security, availability, or integrity of The Clutch Series platform. You agree not to misuse forms, attempt unauthorized access, scrape protected areas, or submit misleading information through any registration or contact flow.",
  },
  {
    title: "Tournament Participation",
    body: "Registration through this website does not automatically guarantee entry into an event. Participation in any Clutch Series competition remains subject to eligibility checks, format rules, code-of-conduct requirements, scheduling availability, competitive integrity standards, and any additional event-specific rules or communications issued by the organizer.",
  },
  {
    title: "Content and Intellectual Property",
    body: "Unless otherwise stated, The Clutch Series name, branding, visuals, site design, copy, event concepts, and original materials are owned by or licensed to The Clutch Series. You may not reproduce, distribute, modify, or commercially use this material without prior written permission.",
  },
  {
    title: "Liability, Changes, and Contact",
    body: "We aim to keep the site accurate and available, but we do not guarantee uninterrupted access or error-free content at all times. To the extent permitted by law, The Clutch Series is not responsible for indirect or consequential loss arising from use of the website or reliance on publicly available information. We may update these terms from time to time, and continued use of the site after updates means you accept the revised terms.",
  },
];

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-black px-6 pb-24 pt-32 text-foreground md:px-10">
      <div className="mx-auto max-w-4xl">
        <BlurFade>
          <p className="text-xs uppercase tracking-[0.3em] text-[#9cacdd]">Terms and Conditions</p>
          <h1 className="mt-4 font-display text-5xl tracking-tight md:text-7xl">Terms For Access And Participation.</h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground/75 md:text-lg">
            These Terms and Conditions govern access to The Clutch Series website, communications, and publicly
            available registration pathways for esports tournaments, partnerships, and event enquiries.
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

export default TermsAndConditions;