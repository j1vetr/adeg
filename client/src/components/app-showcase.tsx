import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import desktopImg from "@assets/masa1_1765548406035.png";
import mobileImg from "@assets/mobil1_1765548415955.png";
import { Smartphone, Zap, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function AppShowcase() {
  const { t } = useTranslation();

  return (
    <section id="app" className="py-24 bg-black/50 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-bold tracking-[0.2em] mb-2 uppercase">{t('app.title')}</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white font-display mb-6 leading-tight whitespace-pre-line">
              {t('app.mainTitle')}
            </h3>
            
            <div className="bg-white/5 border-l-4 border-primary p-6 rounded-r-xl mb-8 backdrop-blur-sm">
              <p className="text-gray-200 text-lg leading-relaxed">
                {t('app.description')}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Zap className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">{t('app.feature1Title')}</h4>
                  <p className="text-gray-500 text-sm">{t('app.feature1Desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <ShieldCheck className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">{t('app.feature2Title')}</h4>
                  <p className="text-gray-500 text-sm">{t('app.feature2Desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Smartphone className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">{t('app.feature3Title')}</h4>
                  <p className="text-gray-500 text-sm">{t('app.feature3Desc')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative"
          >
            <Tabs defaultValue="desktop" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-white/5 border border-white/10 mb-8 p-1 rounded-lg">
                <TabsTrigger value="desktop" className="rounded-md data-[state=active]:bg-primary data-[state=active]:text-black font-bold transition-all">{t('app.desktop')}</TabsTrigger>
                <TabsTrigger value="mobile" className="rounded-md data-[state=active]:bg-primary data-[state=active]:text-black font-bold transition-all">{t('app.mobile')}</TabsTrigger>
              </TabsList>
              
              <TabsContent value="desktop" className="relative mt-0">
                <div className="relative rounded-xl overflow-hidden border border-white/20 shadow-2xl shadow-primary/10 group bg-black/40">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none" />
                  <img src={desktopImg} alt="ADS Desktop Dashboard" className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700" />
                </div>
              </TabsContent>
              
              <TabsContent value="mobile" className="flex justify-center mt-0">
                <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-gray-900 shadow-2xl w-[320px] bg-black group">
                  <img src={mobileImg} alt="ADS Mobile App" className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-700" />
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>

        </div>
      </div>
    </section>
  );
}