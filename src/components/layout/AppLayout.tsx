import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuOverlay } from "@/components/hero/MenuOverlay";

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen relative bg-background">
      {/* ── Overlay Menu ── */}
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* ── Global Navigation Bar ── */}
      <nav className="fixed top-0 left-0 right-0 w-full z-40 flex items-center justify-between px-6 py-5">
        {/* Menu button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="flex items-center gap-3 px-4 py-2 rounded-full border border-foreground/30 text-foreground uppercase tracking-widest text-xs font-medium bg-background/50 backdrop-blur-sm transition-colors hover:bg-background/80"
        >
          <span className="flex flex-col gap-[4px]">
            <span className="block w-7 h-[2px] bg-foreground" />
            <span className="block w-7 h-[2px] bg-foreground" />
          </span>
          <span>Menu</span>
        </button>

        {/* Center Logo */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 text-2xl font-bold tracking-wider text-foreground">
          TCS
        </Link>

        {/* Right nav links (desktop only) */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/about"
            className="px-4 py-2 rounded-full border border-foreground/30 text-foreground text-xs font-medium uppercase tracking-widest bg-background/50 backdrop-blur-sm hover:bg-foreground/10 transition-colors"
          >
            About Us
          </Link>
          <Link
            to="/tournaments"
            className="px-4 py-2 rounded-full border border-foreground/30 text-foreground text-xs font-medium uppercase tracking-widest bg-background/50 backdrop-blur-sm hover:bg-foreground/10 transition-colors"
          >
            Tournaments
          </Link>
          <Link
            to="/registration"
            className="px-5 py-2 rounded-full text-xs font-medium uppercase tracking-widest text-background transition-opacity hover:opacity-90"
            style={{
              background:
                "linear-gradient(to right, hsl(220, 70%, 78%), hsl(40, 80%, 82%))",
            }}
          >
            Registration
          </Link>
        </div>
      </nav>

      {/* ── Main Content Area ── */}
      <main className="flex-1 flex flex-col w-full">
        {children}
      </main>
    </div>
  );
};
