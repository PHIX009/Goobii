import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Helmet } from "react-helmet-async";
import { HelmetProvider } from "react-helmet-async";

import Header from "@/components/layout/header";
import FooterCategories from "@/components/FooterCategories";
import Home from "@/pages/home";
import Services from "@/pages/services";
import Subscriptions from "@/pages/subscriptions";
import Buildings from "@/pages/buildings";
import Fleet from "@/pages/fleet";
import About from "@/pages/about";
import FAQs from "@/pages/faqs";
import Contact from "@/pages/contact";
import PurposeAndImpact from "@/pages/purpose-and-impact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/subscriptions" component={Subscriptions} />
          <Route path="/buildings" component={Buildings} />
          <Route path="/fleet" component={Fleet} />
          <Route path="/about" component={About} />
          <Route path="/faqs" component={FAQs} />
          <Route path="/contact" component={Contact} />
          <Route path="/purpose-and-impact" component={PurposeAndImpact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <FooterCategories />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Helmet>
            <title>Goobii - Eco-friendly Car Cleaning in Dubai</title>
            <meta name="description" content="Eco-friendly car cleaning using Sooftwash™ technology. Save water with just 2-4L per wash vs 100-150L traditional methods. Download our app for convenient booking." />
            
            {/* Open Graph */}
            <meta property="og:title" content="Goobii - Eco-friendly Car Cleaning in Dubai" />
            <meta property="og:description" content="Revolutionary water-saving car cleaning service. Book through our app for convenient, eco-friendly car care." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://goobii.com" />
            
            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Goobii - Eco-friendly Car Cleaning" />
            <meta name="twitter:description" content="Save water with Sooftwash™ technology. 2-4L per wash vs 100-150L traditional methods." />

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Goobii",
                "description": "Eco-friendly car cleaning service using Sooftwash™ technology",
                "url": "https://goobii.com",
                "areaServed": {
                  "@type": "City",
                  "name": "Dubai"
                },
                "serviceType": "Car Cleaning Service",
                "priceRange": "$$"
              })}
            </script>
          </Helmet>
          <div className="min-h-screen" style={{ backgroundColor: 'var(--brand-bg)' }}>
            <Toaster />
            <Router />
          </div>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
