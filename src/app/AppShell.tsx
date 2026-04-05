import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { usePageContext } from "vike-react/usePageContext";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppLayout } from "@/components/layout/AppLayout";
import { resolvePageComponent } from "@/app/resolve-page";
import "@/index.css";

export function AppShell() {
  const [queryClient] = useState(() => new QueryClient());
  const pageContext = usePageContext();
  const Page = resolvePageComponent(pageContext.urlOriginal);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AppLayout>
          <Page />
        </AppLayout>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
