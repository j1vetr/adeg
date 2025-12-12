import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Zap, Globe, Shield, ArrowDown, ArrowUp } from "lucide-react";
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
    <section id="packages" className="py-24 bg-gradient-to-b from-black to-background relative border-t border-white/5">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-[0.2em] mb-2 uppercase text-sm">Esnek Planlar</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white font-display mb-6">Veri Paketleri</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            İhtiyacınıza uygun paketi seçin. Tüm paketlerde yüksek hız ve düşük gecikme garantisi.
          </p>
        </div>

        {/* Speed Specs Banner */}
        <div className="max-w-4xl mx-auto mb-20 grid md:grid-cols-2 gap-8">
           {/* Download Card */}
           <div className="relative group rounded-2xl bg-black overflow-hidden border border-white/10 h-[200px]">
             <div className="absolute inset-[2px] bg-black/80 rounded-xl z-10 backdrop-blur-sm" />
             
             {/* Animated Download Icons */}
             <div className="absolute left-6 top-0 h-full w-8 z-20 pointer-events-none overflow-hidden">
               <div className="animate-drop-down absolute left-0 w-6 h-6 flex items-center justify-center">
                  <ArrowDown className="w-full h-full text-primary opacity-80" />
               </div>
               <div className="animate-drop-down absolute left-0 w-6 h-6 flex items-center justify-center" style={{ animationDelay: '0.8s' }}>
                  <ArrowDown className="w-full h-full text-primary opacity-60" />
               </div>
               <div className="animate-drop-down absolute left-0 w-6 h-6 flex items-center justify-center" style={{ animationDelay: '1.6s' }}>
                  <ArrowDown className="w-full h-full text-primary opacity-40" />
               </div>
             </div>
             <div className="absolute right-6 top-0 h-full w-8 z-20 pointer-events-none overflow-hidden">
               <div className="animate-drop-down absolute left-0 w-6 h-6 flex items-center justify-center" style={{ animationDelay: '0.4s' }}>
                  <ArrowDown className="w-full h-full text-primary opacity-80" />
               </div>
               <div className="animate-drop-down absolute left-0 w-6 h-6 flex items-center justify-center" style={{ animationDelay: '1.2s' }}>
                  <ArrowDown className="w-full h-full text-primary opacity-60" />
               </div>
               <div className="animate-drop-down absolute left-0 w-6 h-6 flex items-center justify-center" style={{ animationDelay: '2.0s' }}>
                  <ArrowDown className="w-full h-full text-primary opacity-40" />
               </div>
             </div>
             
             <div className="relative z-30 h-full p-8 flex flex-col items-center justify-center text-center">
                 <div className="mb-4 p-3 bg-white/5 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Zap className="w-8 h-8 text-primary" />
                 </div>
                 <div className="text-gray-400 text-sm uppercase tracking-wider font-medium mb-1">Download Hızı</div>
                 <div className="text-6xl font-bold text-white font-display tracking-tight group-hover:scale-105 transition-transform duration-300">
                   325 <span className="text-2xl text-primary/80 font-sans font-normal">Mbps</span>
                 </div>
             </div>
           </div>

           {/* Upload Card */}
           <div className="relative group rounded-2xl bg-black overflow-hidden border border-white/10 h-[200px]">
             <div className="absolute inset-[2px] bg-black/80 rounded-xl z-10 backdrop-blur-sm" />

             {/* Animated Upload Icons */}
             <div className="absolute left-6 top-0 h-full w-8 z-20 pointer-events-none overflow-hidden">
               <div className="animate-rise-up absolute left-0 w-6 h-6 flex items-center justify-center">
                  <ArrowUp className="w-full h-full text-primary opacity-80" />
               </div>
               <div className="animate-rise-up absolute left-0 w-6 h-6 flex items-center justify-center" style={{ animationDelay: '0.8s' }}>
                  <ArrowUp className="w-full h-full text-primary opacity-60" />
               </div>
               <div className="animate-rise-up absolute left-0 w-6 h-6 flex items-center justify-center" style={{ animationDelay: '1.6s' }}>
                  <ArrowUp className="w-full h-full text-primary opacity-40" />
               </div>
             </div>
             <div className="absolute right-6 top-0 h-full w-8 z-20 pointer-events-none overflow-hidden">
               <div className="animate-rise-up absolute left-0 w-6 h-6 flex items-center justify-center" style={{ animationDelay: '0.4s' }}>
                  <ArrowUp className="w-full h-full text-primary opacity-80" />
               </div>
               <div className="animate-rise-up absolute left-0 w-6 h-6 flex items-center justify-center" style={{ animationDelay: '1.2s' }}>
                  <ArrowUp className="w-full h-full text-primary opacity-60" />
               </div>
               <div className="animate-rise-up absolute left-0 w-6 h-6 flex items-center justify-center" style={{ animationDelay: '2.0s' }}>
                  <ArrowUp className="w-full h-full text-primary opacity-40" />
               </div>
             </div>
             
             <div className="relative z-30 h-full p-8 flex flex-col items-center justify-center text-center">
                 <div className="mb-4 p-3 bg-white/5 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Globe className="w-8 h-8 text-primary" />
                 </div>
                 <div className="text-gray-400 text-sm uppercase tracking-wider font-medium mb-1">Upload Hızı</div>
                 <div className="text-6xl font-bold text-white font-display tracking-tight group-hover:scale-105 transition-transform duration-300">
                   25 <span className="text-2xl text-primary/80 font-sans font-normal">Mbps</span>
                 </div>
             </div>
           </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group ${tier.recommended ? 'lg:-mt-4 lg:mb-4 z-10' : ''}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${tier.recommended ? 'opacity-40' : ''}`} />
              
              <Card className={`h-full border-0 relative overflow-hidden flex flex-col transition-all duration-300 
                ${tier.recommended 
                  ? 'bg-gradient-to-b from-white/10 to-black ring-1 ring-primary shadow-2xl shadow-primary/10' 
                  : 'bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20'
                } rounded-2xl`}
              >
                {tier.recommended && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-primary shadow-[0_0_20px_rgba(255,222,89,0.5)]" />
                )}
                
                <CardHeader className="text-center pt-10 pb-6 relative">
                  {tier.recommended && (
                    <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider text-black bg-primary px-2 py-0.5 rounded-full">
                      Popüler
                    </span>
                  )}
                  <CardTitle className={`text-4xl font-bold font-display tracking-tight ${tier.recommended ? 'text-primary text-glow' : 'text-white'}`}>
                    {tier.size}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="flex-grow flex flex-col items-center justify-center space-y-4 px-6 text-center">
                   <p className="text-gray-400 text-sm">Starlink Maritime<br/>Yüksek Hızlı İnternet</p>
                   
                   <div className="w-full h-px bg-white/5 my-4" />
                   
                   <div className="space-y-2">
                     <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                        <Shield className="w-3 h-3 text-primary" />
                        <span>Güvenli Bağlantı</span>
                     </div>
                     <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                        <Globe className="w-3 h-3 text-primary" />
                        <span>Global Kapsama</span>
                     </div>
                   </div>
                </CardContent>
                
                <CardFooter className="pt-6 pb-8 px-6">
                  <Button 
                    variant={tier.recommended ? "default" : "outline"} 
                    className={`w-full font-bold h-10 transition-all duration-300
                      ${tier.recommended 
                        ? 'bg-primary text-black hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(255,222,89,0.4)]' 
                        : 'border-white/20 text-white hover:bg-white/10 hover:border-white/40'
                      }`}
                  >
                    Hemen Başvur
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