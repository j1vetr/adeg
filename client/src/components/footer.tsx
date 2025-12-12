import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
             <h3 className="text-2xl font-bold text-white font-display mb-2">ADEGLOBA<span className="text-primary">SPACE</span></h3>
             <p className="text-gray-500 text-sm">Connecting the world, securing your data.</p>
          </div>
          
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
        
        <Separator className="my-8 bg-white/5" />
        
        <div className="text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Adegloba Space. All rights reserved.
        </div>
      </div>
    </footer>
  );
}