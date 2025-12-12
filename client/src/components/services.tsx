import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Satellite, ShieldCheck, Globe, Wifi } from "lucide-react";
import firewallImage from "@assets/generated_images/cybersecurity_abstract.png";

export default function Services() {
  const services = [
    {
      icon: <Satellite className="w-12 h-12 text-primary" />,
      title: "Starlink Maritime",
      description: "High-speed, low-latency internet for vessels at sea. Stay connected globally with the world's most advanced satellite constellation.",
      features: ["Global Coverage", "Low Latency (<50ms)", "High Speed Downloads", "Easy Installation"]
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-primary" />,
      title: "Firewall Protection",
      description: "Enterprise-grade security for your maritime network. Protect your crew and operational data from cyber threats.",
      features: ["Real-time Threat Monitoring", "Traffic Filtering", "Secure VPN Access", "Bandwidth Management"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-900/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-[0.2em] mb-2 uppercase">What We Do</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white font-display">Comprehensive Maritime Solutions</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Starlink Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full bg-card/50 border-white/10 backdrop-blur-sm overflow-hidden group hover:border-primary/50 transition-colors duration-300">
              <CardHeader className="p-8">
                <div className="mb-6 p-4 bg-primary/10 w-fit rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Satellite className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-white mb-2 font-display">Starlink Maritime</CardTitle>
                <CardDescription className="text-gray-400 text-lg">
                  Revolutionary high-speed internet for your fleet.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <ul className="space-y-4">
                  {services[0].features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <Wifi className="w-5 h-5 text-primary mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Firewall Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full bg-card/50 border-white/10 backdrop-blur-sm overflow-hidden group hover:border-primary/50 transition-colors duration-300">
              <div className="h-48 overflow-hidden relative">
                 <img src={firewallImage} alt="Cybersecurity" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
              </div>
              <CardHeader className="p-8 relative -mt-12">
                <div className="mb-6 p-4 bg-primary/10 w-fit rounded-lg group-hover:bg-primary/20 transition-colors backdrop-blur-md border border-white/10">
                  <ShieldCheck className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-white mb-2 font-display">Managed Firewall</CardTitle>
                <CardDescription className="text-gray-400 text-lg">
                  Secure your vessel's network against modern threats.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <ul className="space-y-4">
                  {services[1].features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <Globe className="w-5 h-5 text-primary mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}