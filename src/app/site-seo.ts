export type SeoEntry = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  noindex?: boolean;
  schemaType?: "WebSite" | "AboutPage" | "CollectionPage" | "ContactPage" | "WebPage";
};

export const siteConfig = {
  name: "The Clutch Series",
  defaultTitle: "The Clutch Series | Premium Esports Tournaments",
  defaultDescription:
    "The Clutch Series is a premium esports platform focused on high-stakes tournaments, elevated production value, and competitive experiences built to feel world-class.",
  defaultOgImage: "/og/home-social.svg",
  siteUrl: "https://theclutchseries.vercel.app",
  sameAs: [
    "https://instagram.com/theclutchseries",
    "https://x.com/TheClutchSeries",
  ],
};

export const seoEntries: Record<string, SeoEntry> = {
  "/": {
    path: "/",
    title: "The Clutch Series | Premium Esports Tournaments",
    description:
      "Enter The Clutch Series, a premium esports arena built for high-stakes esports tournaments, cinematic broadcast presentation, Valorant events, and serious competitive gaming energy.",
    keywords: [
      "esports",
      "esports tournaments",
      "competitive gaming",
      "valorant tournament",
      "premium esports",
      "gaming events",
      "the clutch series",
    ],
    ogImage: "/og/home-social.svg",
    schemaType: "WebSite",
  },
  "/about": {
    path: "/about",
    title: "About The Clutch Series | Vision, Philosophy, and Team",
    description:
      "Learn about The Clutch Series, our competitive philosophy, esports production standards, founding vision, and the team shaping a premium gaming tournament arena.",
    keywords: [
      "about the clutch series",
      "esports production",
      "gaming tournament company",
      "esports organizer",
      "competitive gaming brand",
    ],
    ogImage: "/og/about-social.svg",
    schemaType: "AboutPage",
  },
  "/tournaments": {
    path: "/tournaments",
    title: "Tournaments | The Clutch Series Invitational",
    description:
      "Explore current and upcoming Clutch Series esports tournaments, including the TCS Invitational, Valorant competition details, prize pool information, and registration pathways.",
    keywords: [
      "valorant tournament",
      "esports invitational",
      "gaming competition",
      "esports event",
      "prize pool tournament",
    ],
    ogImage: "/og/tournaments-social.svg",
    schemaType: "CollectionPage",
  },
  "/registration": {
    path: "/registration",
    title: "Registration | Join The Next Clutch Series Bracket",
    description:
      "Register your team for upcoming Clutch Series esports tournaments and prepare your lineup for a premium competitive bracket and professional event experience.",
    keywords: [
      "tournament registration",
      "esports signup",
      "team registration",
      "valorant registration",
      "gaming tournament entry",
    ],
    ogImage: "/og/registration-social.svg",
    schemaType: "WebPage",
  },
  "/contact": {
    path: "/contact",
    title: "Contact | Partnerships, Teams, and Enquiries",
    description:
      "Contact The Clutch Series for esports partnerships, team enquiries, tournament collaboration, sponsor discussions, and premium production conversations.",
    keywords: [
      "contact esports organizer",
      "sponsorship enquiry",
      "tournament partnership",
      "esports contact",
      "gaming event partnership",
    ],
    ogImage: "/og/contact-social.svg",
    schemaType: "ContactPage",
  },
  "/privacy-policy": {
    path: "/privacy-policy",
    title: "Privacy Policy | The Clutch Series",
    description:
      "Read the Clutch Series privacy policy covering data handling, visitor information, contact requests, and platform protections.",
    keywords: ["privacy policy", "data protection", "clutch series privacy", "website privacy"],
    ogImage: "/og/legal-social.svg",
    schemaType: "WebPage",
  },
  "/terms-and-conditions": {
    path: "/terms-and-conditions",
    title: "Terms and Conditions | The Clutch Series",
    description:
      "Review the Clutch Series terms and conditions for access, participation, user responsibilities, and platform rules.",
    keywords: ["terms and conditions", "website terms", "tournament rules", "user agreement"],
    ogImage: "/og/legal-social.svg",
    schemaType: "WebPage",
  },
  "/cookie-policy": {
    path: "/cookie-policy",
    title: "Cookie Policy | The Clutch Series",
    description:
      "Understand how The Clutch Series uses cookies, essential storage, and consent preferences across the site.",
    keywords: ["cookie policy", "website cookies", "cookie consent", "privacy preferences"],
    ogImage: "/og/legal-social.svg",
    schemaType: "WebPage",
  },
};

export function normalizePathname(urlOriginal: string) {
  const pathname = new URL(urlOriginal, "http://localhost").pathname;
  if (pathname !== "/" && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

export function getSiteUrl() {
  return (
    process.env.PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ||
    siteConfig.siteUrl
  );
}

export function getSeoEntry(urlOriginal: string): SeoEntry {
  const pathname = normalizePathname(urlOriginal);
  return (
    seoEntries[pathname] ?? {
      path: pathname,
      title: `Page Not Found | ${siteConfig.name}`,
      description: "The page you requested could not be found on The Clutch Series.",
      noindex: true,
    }
  );
}

export function getCanonicalUrl(urlOriginal: string) {
  const pathname = normalizePathname(urlOriginal);
  const siteUrl = getSiteUrl();
  return `${siteUrl}${pathname === "/" ? "" : pathname}`;
}
