import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import desktopImg from "@assets/masa1_1765548406035.png";
import mobileImg from "@assets/generated_images/mobile_app_ui.png";
import { Smartphone, Monitor } from "lucide-react";

export default function AppShowcase() {
  return (
    <section id="app" className="py-24 bg-black/50 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-bold tracking-[0.2em] mb-2 uppercase">ADS Yönetim Sistemi</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white font-display mb-6">
              Tam Kontrol.<br />Her Yerde.
            </h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Özel olarak geliştirilmiş ADS Yönetim Sistemi, filonuzun bağlantı durumunu, bant genişliği kullanımını ve güvenlik uyarılarını gerçek zamanlı olarak görmenizi sağlar. Masaüstü ve mobilde kullanılabilir.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Monitor className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Merkezi Kontrol Paneli</h4>
                  <p className="text-gray-500">Tüm gemilerinizi tek bir ekrandan izleyin.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Smartphone className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Mobil Erişim</h4>
                  <p className="text-gray-500">Filonuzun durumuna hareket halindeyken de erişin.</p>
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
              <TabsList className="grid w-full grid-cols-2 bg-white/5 border border-white/10 mb-8">
                <TabsTrigger value="desktop" className="data-[state=active]:bg-primary data-[state=active]:text-black">Masaüstü</TabsTrigger>
                <TabsTrigger value="mobile" className="data-[state=active]:bg-primary data-[state=active]:text-black">Mobil</TabsTrigger>
              </TabsList>
              
              <TabsContent value="desktop" className="relative mt-0">
                <div className="relative rounded-xl overflow-hidden border border-white/20 shadow-2xl shadow-primary/10 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none" />
                  <img src={desktopImg} alt="ADS Desktop Dashboard" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
                </div>
              </TabsContent>
              
              <TabsContent value="mobile" className="flex justify-center mt-0">
                <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-gray-900 shadow-2xl w-[300px] h-[600px] group">
                  <img src={mobileImg} alt="ADS Mobile App" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>

        </div>
      </div>
    </section>
  );
}