import { useState, useEffect } from "react";
import { usePageContext } from "vike-react/usePageContext";
import { AppLink } from "@/components/AppLink";
import { CookieConsent } from "@/components/compliance/CookieConsent";
import { MenuOverlay } from "@/components/hero/MenuOverlay";

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pageContext = usePageContext();

  useEffect(() => {
    setMenuOpen(false);
  }, [pageContext.urlOriginal]);

  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <nav className="fixed left-0 right-0 top-0 z-40 flex w-full items-center justify-between px-6 py-5">
        <button
          onClick={() => setMenuOpen(true)}
          className="flex items-center gap-3 rounded-full border border-foreground/30 bg-background/50 px-4 py-2 text-xs font-medium uppercase tracking-widest text-foreground backdrop-blur-sm transition-colors hover:bg-background/80"
        >
          <span className="flex flex-col gap-[4px]">
            <span className="block h-[2px] w-7 bg-foreground" />
            <span className="block h-[2px] w-7 bg-foreground" />
          </span>
          <span>Menu</span>
        </button>

        <AppLink href="/" className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2 text-2xl font-bold tracking-wider text-foreground">
          TCS
        </AppLink>

        <div className="hidden items-center gap-3 md:flex">
          <AppLink href="/about" className="rounded-full border border-foreground/30 bg-background/50 px-4 py-2 text-xs font-medium uppercase tracking-widest text-foreground backdrop-blur-sm transition-colors hover:bg-foreground/10">
            About Us
          </AppLink>
          <AppLink href="/tournaments" className="rounded-full border border-foreground/30 bg-background/50 px-4 py-2 text-xs font-medium uppercase tracking-widest text-foreground backdrop-blur-sm transition-colors hover:bg-foreground/10">
            Tournaments
          </AppLink>
          <AppLink
            href="/registration"
            className="rounded-full px-5 py-2 text-xs font-medium uppercase tracking-widest text-background transition-opacity hover:opacity-90"
            style={{
              background: "linear-gradient(to right, hsl(220, 70%, 78%), hsl(40, 80%, 82%))",
            }}
          >
            Registration
          </AppLink>
          <AppLink href="/contact" className="rounded-full border border-foreground/30 bg-background/50 px-4 py-2 text-xs font-medium uppercase tracking-widest text-foreground backdrop-blur-sm transition-colors hover:bg-foreground/10">
            Contact
          </AppLink>
        </div>
      </nav>

      <main className="flex w-full flex-1 flex-col">{children}</main>

      <footer className="border-t border-white/8 bg-black/60 px-6 py-6 backdrop-blur-xl md:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">The Clutch Series</p>
          <div className="flex flex-wrap gap-4 text-[11px] uppercase tracking-[0.22em] text-foreground/55">
            <AppLink href="/privacy-policy" className="hover:text-foreground">Privacy Policy</AppLink>
            <AppLink href="/terms-and-conditions" className="hover:text-foreground">Terms & Conditions</AppLink>
            <AppLink href="/cookie-policy" className="hover:text-foreground">Cookie Policy</AppLink>
          </div>
        </div>
      </footer>

      <CookieConsent />
    </div>
  );
};
