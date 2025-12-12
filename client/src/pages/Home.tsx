import { lazy, Suspense } from 'react';
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";

// Lazy load components for performance
const MaritimeService = lazy(() => import("@/components/maritime-service"));
const Services = lazy(() => import("@/components/services"));
const Packages = lazy(() => import("@/components/packages"));
const AppShowcase = lazy(() => import("@/components/app-showcase"));
const Contact = lazy(() => import("@/components/contact"));
const Footer = lazy(() => import("@/components/footer"));

// Loading placeholder
const SectionLoader = () => <div className="py-24 bg-black min-h-[50vh]" />;

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        {/* Hero loaded immediately for LCP */}
        <Hero />
        
        {/* Below fold content lazy loaded */}
        <Suspense fallback={<SectionLoader />}>
          <MaritimeService />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Services />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Packages />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <AppShowcase />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>
      
      <Suspense fallback={<div className="h-24 bg-black" />}>
        <Footer />
      </Suspense>
    </div>
  );
}