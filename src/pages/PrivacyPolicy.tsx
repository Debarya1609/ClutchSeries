import BlurFade from "@/components/magicui/blur-fade";

const sections = [
  {
    title: "Information We Collect",
    body: "The Clutch Series may collect the information you submit directly, including names, email addresses, social handles, team details, registration form responses, and messages sent through enquiry or contact forms. We may also collect technical information such as browser type, approximate location, device identifiers, and page interaction data when needed to keep the website stable, secure, and useful.",
  },
  {
    title: "How We Use Information",
    body: "We use information to review registrations, communicate with players and partners, respond to enquiries, improve tournament operations, maintain website performance, understand demand for our events, and protect the integrity of the platform. We may also use limited analytics and preference data to improve user experience and measure the effectiveness of site content and campaigns.",
  },
  {
    title: "Sharing, Retention, and Security",
    body: "We do not sell personal information. Information may be shared with trusted service providers only when required to host the site, support registrations, deliver communications, or meet legal obligations. We retain information only for as long as it is reasonably needed for tournament administration, relationship management, compliance, or dispute resolution, and we use practical administrative and technical safeguards to reduce unauthorized access, misuse, or loss.",
  },
  {
    title: "Your Rights and Contact",
    body: "Depending on your location, you may have rights to request access to, correction of, or deletion of certain personal information. You may also ask us to clarify how your data is being used or withdraw from non-essential communications. Privacy requests and questions can be directed through the Contact page, and we will review them in good faith and within a reasonable period.",
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black px-6 pb-24 pt-32 text-foreground md:px-10">
      <div className="mx-auto max-w-4xl">
        <BlurFade>
          <p className="text-xs uppercase tracking-[0.3em] text-[#9cacdd]">Privacy Policy</p>
          <h1 className="mt-4 font-display text-5xl tracking-tight md:text-7xl">Privacy, Clearly Stated.</h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground/75 md:text-lg">
            This Privacy Policy explains what information The Clutch Series may collect, why it may be collected, how
            it may be used, and what choices visitors, players, and partners have when interacting with this website.
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

export default PrivacyPolicy;
