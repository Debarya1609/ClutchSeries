import { useEffect, useState } from "react";
import { AppLink } from "@/components/AppLink";

const COOKIE_KEY = "tcs-cookie-consent";

type ConsentValue = "accepted" | "essential";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(COOKIE_KEY);
    setVisible(!stored);
  }, []);

  const saveConsent = (value: ConsentValue) => {
    window.localStorage.setItem(COOKIE_KEY, value);
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[60] mx-auto max-w-4xl border border-white/10 bg-black/80 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.28em] text-[#9cacdd]">Cookie Preferences</p>
          <h2 className="mt-3 font-display text-2xl text-foreground">We use essential cookies and preference storage.</h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground/75">
            We use browser storage to remember your consent choice, support core website functionality, and improve the
            reliability of key pages. You can accept all cookies, continue with essential-only storage, or review the
            details in our <AppLink href="/cookie-policy" className="underline">Cookie Policy</AppLink>.
          </p>
        </div>

        <div className="flex flex-col gap-3 md:min-w-[240px]">
          <button
            onClick={() => saveConsent("accepted")}
            className="rounded-none bg-gradient-to-r from-[#9cacdd] to-[#e4d7ae] px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#08101f]"
          >
            Accept All
          </button>
          <button
            onClick={() => saveConsent("essential")}
            className="border border-white/15 px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-foreground transition-colors hover:bg-white/5"
          >
            Essential Only
          </button>
        </div>
      </div>
    </div>
  );
}
