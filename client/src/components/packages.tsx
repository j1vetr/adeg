import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Check, Wifi, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Packages() {
  const tiers = [
    { size: "50 GB", recommended: false },
    { size: "100 GB", recommended: false },
    { size: "250 GB", recommended: true },
    { size: "500 GB", recommended: false },
    { size: "1 TB", recommended: false },
  ];

  return (
    <section id="packages" className="py-24 bg-black/80 relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-[0.2em] mb-2 uppercase">Esnek Planlar</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white font-display mb-4">Veri Paketleri</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            İhtiyacınıza uygun paketi seçin. Tüm paketlerde yüksek hız ve düşük gecikme garantisi.
          </p>
        </div>

        {/* Speed Specs Banner */}
        <div className="max-w-4xl mx-auto mb-16 bg-gradient-to-r from-primary/10 via-blue-900/20 to-primary/10 border border-primary/20 rounded-2xl p-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
             <div>
                <div className="text-gray-400 text-sm uppercase tracking-wider mb-1">Download Hızı</div>
                <div className="text-4xl md:text-5xl font-bold text-white font-display">325 <span className="text-xl text-primary font-sans">Mbps</span></div>
             </div>
             <div className="h-12 w-px bg-white/10 hidden md:block" />
             <div>
                <div className="text-gray-400 text-sm uppercase tracking-wider mb-1">Upload Hızı</div>
                <div className="text-4xl md:text-5xl font-bold text-white font-display">25 <span className="text-xl text-primary font-sans">Mbps</span></div>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`h-full border-white/10 backdrop-blur-sm flex flex-col relative overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 ${tier.recommended ? 'bg-primary/5 border-primary/30 scale-105 z-10' : 'bg-card/30'}`}>
                {tier.recommended && (
                  <div className="absolute top-0 inset-x-0 bg-primary/20 text-primary text-xs font-bold text-center py-1 uppercase tracking-wider">
                    Önerilen
                  </div>
                )}
                <CardHeader className="text-center pt-8 pb-4">
                  <CardTitle className="text-3xl font-bold text-white font-display">{tier.size}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col items-center justify-center space-y-2 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Öncelikli Veri</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Küresel Roaming</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-4 pb-6 flex justify-center">
                  <Button variant={tier.recommended ? "default" : "outline"} className={`w-full ${tier.recommended ? 'bg-primary text-black hover:bg-primary/90' : 'border-white/20 text-white hover:bg-white/10'}`}>
                    Seç
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}