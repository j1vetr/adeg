import { Separator } from "@/components/ui/separator";
import logoUrl from "../assets/logo.png";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black py-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Logo Side */}
          <div className="flex-shrink-0">
             <img src={logoUrl} alt="Adegloba Space" className="h-16 w-auto" />
          </div>
          
          {/* Contact Info Side */}
          <div className="flex flex-col md:flex-row gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>71-75 Shelton Street, London, WC2H 9JQ</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <a href="mailto:starlink@adegloba.space" className="hover:text-primary transition-colors">starlink@adegloba.space</a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <a href="tel:+447440225375" className="hover:text-primary transition-colors">+44 7440 225 375</a>
            </div>
          </div>
        </div>
        
        <Separator className="my-6 bg-white/5" />
        
        <div className="text-center text-gray-600 text-xs md:text-sm">
          AdeGloba Tüm Hakları Saklıdır. Bu Website <a href="https://toov.com.tr" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors font-semibold">TOOV</a> tarafından hazırlanmıştır.
        </div>
      </div>
    </footer>
  );
}