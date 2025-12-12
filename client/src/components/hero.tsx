import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-black/50 z-10" /> {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
        
        {/* YouTube Background Iframe */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] opacity-80">
          <iframe
            className="w-full h-full object-cover"
            src="https://www.youtube.com/embed/WTFTOZUNQZc?autoplay=1&mute=1&controls=0&loop=1&playlist=WTFTOZUNQZc&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1"
            allow="autoplay; encrypted-media"
            title="Starlink Background Video"
            style={{ pointerEvents: "none" }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-primary font-bold tracking-[0.2em] text-sm md:text-base mb-4 uppercase">
            Yeni Nesil Denizcilik Bağlantısı
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-display">
            KÜRESEL <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200 text-glow">BAĞLANTI</span>
            <br />
            GÜVENDE.
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl mb-10 font-light">
            Dünyanın her yerinde denizcilik operasyonları için premium Starlink entegrasyonu ve gelişmiş Firewall hizmetleri.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary text-black hover:bg-primary/90 text-lg font-bold px-8 h-12"
              onClick={scrollToServices}
            >
              HİZMETLERİMİZ
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10 text-lg px-8 h-12 backdrop-blur-sm"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              İLETİŞİM
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}