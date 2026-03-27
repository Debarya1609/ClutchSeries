import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { useEffect } from "react";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Services", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Contact", href: "#" },
];

const ease = [0.76, 0, 0.24, 1] as const;
const linkEase = [0.25, 1, 0.5, 1] as const;

export const MenuOverlay = ({ isOpen, onClose }: MenuOverlayProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-foreground flex flex-col"
          initial={{ clipPath: "circle(0% at 80px 40px)" }}
          animate={{ clipPath: "circle(150% at 80px 40px)" }}
          exit={{ clipPath: "circle(0% at 80px 40px)" }}
          transition={{ duration: 0.7, ease }}
        >
          {/* Nav bar inside overlay */}
          <div className="relative flex items-center justify-between px-6 py-5">
            {/* Close button */}
            <button
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-2 rounded-full border border-background/30 text-background uppercase tracking-widest text-xs font-medium"
            >
              <span className="flex flex-col gap-[4px] justify-center">
                <X size={16} className="text-background" />
              </span>
              <span>Close</span>
            </button>

            {/* Center logo */}
            <span className="absolute left-1/2 -translate-x-1/2 text-2xl font-bold tracking-wider text-background">
              EVR
            </span>
          </div>

          {/* Menu links */}
          <nav className="flex-1 flex flex-col justify-center px-8 md:px-16">
            {menuLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="group flex items-center justify-between border-b border-background/10 py-4 md:py-5"
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{
                  delay: 0.15 + i * 0.08,
                  duration: 0.5,
                  ease: linkEase,
                }}
                onClick={onClose}
              >
                <span
                  className="text-background font-light transition-transform duration-200 group-hover:translate-x-1"
                  style={{
                    fontSize: "clamp(2rem, 5vw, 4.5rem)",
                    letterSpacing: "-0.06em",
                  }}
                >
                  {link.label}
                </span>
                <ArrowRight
                  className="text-background/50 transition-transform duration-200 group-hover:translate-x-0.5 shrink-0"
                  size={24}
                />
              </motion.a>
            ))}
          </nav>

          {/* Bottom bar */}
          <div className="flex items-center justify-between px-8 md:px-16 pb-8 pt-4">
            <span className="text-background/40 text-xs tracking-[0.2em] uppercase">
              Evolve Responsible Ventures
            </span>
            <span className="text-background/40 text-xs tracking-[0.2em] uppercase">
              © 2026
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
