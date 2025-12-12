import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-[0.2em] mb-2 uppercase">{t('contact.title')}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white font-display">{t('contact.subtitle')}</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-card/30 border-white/10 backdrop-blur-sm text-center hover:bg-card/50 transition-colors">
            <CardContent className="pt-8 pb-8 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="text-primary w-6 h-6" />
              </div>
              <h4 className="text-white font-bold mb-2">{t('contact.office')}</h4>
              <p className="text-gray-400 text-sm">
                71 - 75 Shelton Street<br />
                London, WC2H 9JQ<br />
                United Kingdom
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/30 border-white/10 backdrop-blur-sm text-center hover:bg-card/50 transition-colors">
            <CardContent className="pt-8 pb-8 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="text-primary w-6 h-6" />
              </div>
              <h4 className="text-white font-bold mb-2">{t('contact.email')}</h4>
              <a href="mailto:starlink@adegloba.space" className="text-gray-400 text-sm hover:text-primary transition-colors">
                starlink@adegloba.space
              </a>
            </CardContent>
          </Card>

          <Card className="bg-card/30 border-white/10 backdrop-blur-sm text-center hover:bg-card/50 transition-colors">
            <CardContent className="pt-8 pb-8 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="text-primary w-6 h-6" />
              </div>
              <h4 className="text-white font-bold mb-2">{t('contact.phone')}</h4>
              <a href="tel:+447440225375" className="text-gray-400 text-sm hover:text-primary transition-colors">
                +44 7440 225 375
              </a>
            </CardContent>
          </Card>

          <Card className="bg-card/30 border-white/10 backdrop-blur-sm text-center hover:bg-card/50 transition-colors">
             <CardContent className="pt-8 pb-8 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="text-primary w-6 h-6" />
              </div>
              <h4 className="text-white font-bold mb-2">{t('contact.support')}</h4>
              <p className="text-gray-400 text-sm whitespace-pre-line">
                {t('contact.supportDesc')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}