import { Separator } from "@/components/ui/separator";
import logoUrl from "../assets/logo.png";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-black relative pt-16 pb-8 overflow-hidden">
      {/* Top Gradient Border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          {/* Brand Side */}
          <div className="max-w-md">
             <img src={logoUrl} alt="Adegloba Space" className="h-20 w-auto mb-6" />
             <p className="text-gray-400 leading-relaxed text-sm">
               {t('footer.desc')}
             </p>
          </div>
          
          {/* Contact Info Side - Styled Grid */}
          <div className="grid gap-6">
            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-white/5 rounded-lg group-hover:bg-primary/10 transition-colors border border-white/5 group-hover:border-primary/20">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1">{t('footer.address')}</h4>
                <p className="text-gray-400 text-sm">71-75 Shelton Street, London, WC2H 9JQ</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-white/5 rounded-lg group-hover:bg-primary/10 transition-colors border border-white/5 group-hover:border-primary/20">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1">{t('footer.email')}</h4>
                <a href="mailto:starlink@adegloba.space" className="text-gray-400 text-sm hover:text-primary transition-colors">starlink@adegloba.space</a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-white/5 rounded-lg group-hover:bg-primary/10 transition-colors border border-white/5 group-hover:border-primary/20">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1">{t('footer.phone')}</h4>
                <a href="tel:+447440225375" className="text-gray-400 text-sm hover:text-primary transition-colors">+44 7440 225 375</a>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="bg-white/5 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} {t('footer.rights')} <span className="mx-2 text-primary">|</span> {t('footer.madeBy').split('TOOV')[0]}<a href="https://toov.com.tr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors font-semibold">TOOV</a>{t('footer.madeBy').split('TOOV')[1]}
          </div>
          <div className="flex gap-6">
             <a href="#" className="hover:text-primary transition-colors">{t('footer.privacy')}</a>
             <a href="#" className="hover:text-primary transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}