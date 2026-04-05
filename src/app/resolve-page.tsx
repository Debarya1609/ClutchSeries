import Index from "@/pages/Index";
import About from "@/pages/About";
import Registration from "@/pages/Registration";
import Tournaments from "@/pages/Tournaments";
import Contact from "@/pages/Contact";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsAndConditions from "@/pages/TermsAndConditions";
import CookiePolicy from "@/pages/CookiePolicy";
import NotFound from "@/pages/NotFound";
import { normalizePathname } from "@/app/site-seo";

const routeMap = new Map([
  ["/", Index],
  ["/about", About],
  ["/registration", Registration],
  ["/tournaments", Tournaments],
  ["/contact", Contact],
  ["/privacy-policy", PrivacyPolicy],
  ["/terms-and-conditions", TermsAndConditions],
  ["/cookie-policy", CookiePolicy],
]);

export function resolvePageComponent(urlOriginal: string) {
  const pathname = normalizePathname(urlOriginal);
  return routeMap.get(pathname) ?? NotFound;
}

export function isKnownRoute(urlOriginal: string) {
  return routeMap.has(normalizePathname(urlOriginal));
}
