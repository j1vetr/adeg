import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";

const servicesList = [
  { id: "data", label: "Starlink Veri Hizmeti" },
  { id: "hardware", label: "Starlink Anten & Donanım" },
  { id: "installation", label: "Uçtan Uca Kurulum Hizmeti" },
  { id: "firewall", label: "Yönetilen Firewall & Güvenlik" },
  { id: "support", label: "7/24 Teknik Destek & Bakım" },
  { id: "network", label: "Gemi İçi Network Yönetimi" },
];

interface QuoteModalProps {
  trigger?: React.ReactNode;
  defaultService?: string;
}

export function QuoteModal({ trigger, defaultService }: QuoteModalProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
      toast({
        title: "Teklif Talebiniz Alındı",
        description: "En kısa sürede sizinle iletişime geçeceğiz.",
      });
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-black/95 border-primary/20 backdrop-blur-xl text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display text-primary">Teklif Alın</DialogTitle>
          <DialogDescription className="text-gray-400">
            İhtiyaçlarınıza özel denizcilik çözümleri için formu doldurun.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="grid gap-6 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company">Firma İsmi</Label>
              <Input id="company" required placeholder="Firma Adı" className="bg-white/5 border-white/10 focus:border-primary/50 text-white" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Yetkili Kişi</Label>
              <Input id="name" required placeholder="Ad Soyad" className="bg-white/5 border-white/10 focus:border-primary/50 text-white" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-posta</Label>
              <Input id="email" type="email" required placeholder="ornek@sirket.com" className="bg-white/5 border-white/10 focus:border-primary/50 text-white" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Telefon</Label>
              <Input id="phone" type="tel" required placeholder="+90 555 000 0000" className="bg-white/5 border-white/10 focus:border-primary/50 text-white" />
            </div>
          </div>

          <div className="space-y-3">
            <Label>İlgilendiğiniz Hizmetler</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 rounded-lg border border-white/10 bg-white/5">
              {servicesList.map((service) => (
                <div key={service.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={service.id} 
                    className="border-white/30 data-[state=checked]:bg-primary data-[state=checked]:text-black"
                    defaultChecked={defaultService === service.id} 
                  />
                  <Label htmlFor={service.id} className="text-sm font-normal cursor-pointer text-gray-300 hover:text-white transition-colors">
                    {service.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Ek Notlar</Label>
            <Textarea 
              id="message" 
              placeholder="Varsa gemi sayısı, rota bilgisi veya özel talepleriniz..." 
              className="bg-white/5 border-white/10 focus:border-primary/50 text-white min-h-[80px]" 
            />
          </div>

          <div className="flex justify-end pt-2">
            <Button type="submit" disabled={loading} className="bg-primary text-black hover:bg-primary/90 font-bold w-full md:w-auto">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Gönderiliyor...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Teklif İste
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}