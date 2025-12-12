import { Separator } from "@/components/ui/separator";
import logoUrl from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
             <img src={logoUrl} alt="Adegloba Space" className="h-12 w-auto mb-4" />
             <p className="text-gray-500 text-sm">Dünyayı birbirine bağlıyor, verilerinizi koruyoruz.</p>
          </div>
          
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-primary transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-primary transition-colors">Hizmet Şartları</a>
          </div>
        </div>
        
        <Separator className="my-8 bg-white/5" />
        
        <div className="text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Adegloba Space. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}