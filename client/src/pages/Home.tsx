import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import AppShowcase from "@/components/app-showcase";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AppShowcase />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}