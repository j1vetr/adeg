import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Map, Wifi, Anchor } from "lucide-react";
import starlinkImg from "@assets/lax1_1765553108513.jpg";
import { useTranslation } from "react-i18next";

export default function MaritimeService() {
  const { t } = useTranslation();

  return (
    <section id="maritime" className="py-24 bg-black/40 relative border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <Anchor className="w-3 h-3" />
              <span>{t('maritime.badge')}</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white font-display mb-6 leading-tight">
              {t('maritime.title')} <br/>
              <span className="text-gray-400">{t('maritime.subtitle')}</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              {t('maritime.description')}
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <Wifi className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">{t('maritime.feature1Title')}</h4>
                  <p className="text-gray-500 text-sm">{t('maritime.feature1Desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <ShieldCheck className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">{t('maritime.feature2Title')}</h4>
                  <p className="text-gray-500 text-sm">{t('maritime.feature2Desc')}</p>
                </div>
              </div>
            </div>

            <Button 
              asChild
              className="bg-primary text-black hover:bg-primary/90 font-bold h-12 px-8 text-base shadow-[0_0_20px_rgba(255,222,89,0.3)] hover:shadow-[0_0_30px_rgba(255,222,89,0.5)] transition-all duration-300"
            >
              <a href="https://lacivertteknoloji.com/starlink-haritasi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Map className="w-5 h-5" />
                {t('maritime.mapButton')}
              </a>
            </Button>
          </motion.div>

          {/* Image Side */}
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10 pointer-events-none" />
              <img 
                src={starlinkImg} 
                alt="Starlink Maritime Antenna" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl z-20 flex items-center justify-between">
                <div>
                  <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">{t('maritime.activeCoverage')}</div>
                  <div className="text-white font-bold font-display">{t('maritime.globalNetwork')}</div>
                </div>
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              </div>
            </div>
            
            {/* Background Decor */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}