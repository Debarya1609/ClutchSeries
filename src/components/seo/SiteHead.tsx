import { usePageContext } from "vike-react/usePageContext";
import { getCanonicalUrl, getSeoEntry, getSiteUrl, siteConfig } from "@/app/site-seo";

export function SiteHead() {
  const pageContext = usePageContext();
  const seo = getSeoEntry(pageContext.urlOriginal);
  const canonicalUrl = getCanonicalUrl(pageContext.urlOriginal);
  const siteUrl = getSiteUrl();
  const ogImage = `${siteUrl}${seo.ogImage || siteConfig.defaultOgImage}`;
  const pathname = new URL(pageContext.urlOriginal, "http://localhost").pathname;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteUrl,
    description: siteConfig.defaultDescription,
    logo: `${siteUrl}/favicon.png`,
    sameAs: siteConfig.sameAs,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteUrl,
    description: siteConfig.defaultDescription,
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/tournaments`,
      "query-input": "required name=competitive gaming tournaments",
    },
  };

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": seo.schemaType || "WebPage",
    name: seo.title,
    description: seo.description,
    url: canonicalUrl,
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteUrl,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: ogImage,
    },
  };

  const tournamentEventSchema =
    pathname === "/tournaments"
      ? {
          "@context": "https://schema.org",
          "@type": "Event",
          name: "The Clutch Series Invitational",
          description:
            "A premium Valorant-focused esports invitational presented by The Clutch Series with competitive brackets, broadcast presentation, and registration pathways for teams.",
          eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
          organizer: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteUrl,
          },
          image: [ogImage],
          eventType: "Esports Tournament",
          url: canonicalUrl,
        }
      : null;

  const structuredData = [organizationSchema, pageSchema];
  if (pathname === "/") {
    structuredData.push(websiteSchema);
  }
  if (tournamentEventSchema) {
    structuredData.push(tournamentEventSchema);
  }

  return (
    <>
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={seo.noindex ? "noindex, nofollow" : "index, follow"} />
      {seo.keywords?.length ? <meta name="keywords" content={seo.keywords.join(", ")} /> : null}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={pathname === "/tournaments" ? "event" : "website"} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={ogImage} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
