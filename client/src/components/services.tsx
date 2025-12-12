import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Satellite, ShieldCheck, Globe, Wifi, Zap, DollarSign, Package, CreditCard } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Globe className="w-10 h-10 text-primary" />,
      title: t('services.globalCoverage'),
      description: t('services.globalCoverageDesc')
    },
    {
      icon: <Zap className="w-10 h-10 text-primary" />,
      title: t('services.fastestConn'),
      description: t('services.fastestConnDesc')
    },
    {
      icon: <Wifi className="w-10 h-10 text-primary" />,
      title: t('services.reliability'),
      description: t('services.reliabilityDesc')
    },
    {
      icon: <DollarSign className="w-10 h-10 text-primary" />,
      title: t('services.budgetControl'),
      description: t('services.budgetControlDesc')
    },
    {
      icon: <Package className="w-10 h-10 text-primary" />,
      title: t('services.easyInstall'),
      description: t('services.easyInstallDesc')
    },
    {
      icon: <CreditCard className="w-10 h-10 text-primary" />,
      title: t('services.paymentPlans'),
      description: t('services.paymentPlansDesc')
    }
  ];

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-900/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-[0.2em] mb-2 uppercase">{t('services.title')}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white font-display">{t('services.subtitle')}</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full bg-card/50 border-white/10 backdrop-blur-sm group hover:bg-card/80 hover:border-primary/30 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="mb-4 p-3 bg-primary/10 w-fit rounded-lg group-hover:bg-primary/20 transition-colors">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-white font-display">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}