import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import vike from "vike/plugin";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    vike({ prerender: true }),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
  ssr: {
    noExternal: ["@radix-ui/*", "lucide-react", "framer-motion", "clsx", "tailwind-merge"],
  },
}));
