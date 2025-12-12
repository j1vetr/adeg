import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, ArrowRight, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { QuoteModal } from "@/components/quote-modal";

export default function Contact() {
  const { t } = useTranslation();

  const contactItems = [
    {
      icon: MapPin,
      title: t('contact.office'),
      content: "71-75 Shelton Street\nLondon, WC2H 9JQ\nUnited Kingdom",
      link: "https://maps.google.com/?q=71-75+Shelton+Street+London",
      isExternal: true,
    },
    {
      icon: Mail,
      title: t('contact.email'),
      content: "starlink@adegloba.space",
      link: "mailto:starlink@adegloba.space",
      isExternal: false,
    },
    {
      icon: Phone,
      title: t('contact.phone'),
      content: "+44 7440 225 375",
      link: "tel:+447440225375",
      isExternal: false,
    },
  ];

  return (
    <section id="contact" className="py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,222,89,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,222,89,0.3) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            <Headphones className="w-4 h-4" />
            <span>{t('contact.support')}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white font-display mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            {t('contact.supportDesc')}
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Contact Cards - Compact but aligned with CTA */}
          <div className="lg:col-span-3 flex flex-col gap-4 justify-between h-full">
            {contactItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-300 flex items-center gap-5 flex-1"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(255,222,89,0.15)] transition-all duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                
                {/* Content */}
                <div className="flex-grow min-w-0">
                  <h4 className="text-white font-semibold text-base mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {item.content.replace(/\n/g, ', ')}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowRight className="w-5 h-5 text-primary/30 group-hover:text-primary flex-shrink-0 transform group-hover:translate-x-1 transition-all" />
              </motion.a>
            ))}
          </div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 relative"
          >
            <div className="h-full p-8 md:p-10 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 flex flex-col justify-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-[60px] pointer-events-none" />
              
              {/* 24/7 Badge */}
              <div className="relative inline-flex items-center gap-2 mb-6">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-green-400 text-xs font-bold uppercase tracking-wider">7/24 Online</span>
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl md:text-3xl font-bold text-white font-display">
                    {t('contact.support')}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Denizcilik operasyonlarınız için kesintisiz destek. Teknik sorunlar, kurulum ve paket yönetimi konularında yanınızdayız.
                </p>

                <QuoteModal 
                  trigger={
                    <Button className="w-full bg-primary text-black hover:bg-primary/90 font-bold h-14 text-base shadow-[0_0_30px_rgba(255,222,89,0.3)] hover:shadow-[0_0_40px_rgba(255,222,89,0.5)] transition-all duration-300">
                      {t('nav.getStarted')}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  }
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}