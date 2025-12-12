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
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

interface QuoteModalProps {
  trigger?: React.ReactNode;
  defaultService?: string;
}

export function QuoteModal({ trigger, defaultService }: QuoteModalProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);

  const servicesList = [
    { id: "data", label: t('modal.serviceList.data') },
    { id: "hardware", label: t('modal.serviceList.hardware') },
    { id: "installation", label: t('modal.serviceList.installation') },
    { id: "firewall", label: t('modal.serviceList.firewall') },
    { id: "support", label: t('modal.serviceList.support') },
    { id: "network", label: t('modal.serviceList.network') },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const selectedServices: string[] = [];
    
    servicesList.forEach((service) => {
      if (formData.get(service.id) === "on") {
        selectedServices.push(service.id);
      }
    });

    const quoteData = {
      companyName: formData.get("company") as string,
      contactName: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      services: selectedServices,
      notes: formData.get("message") as string || "",
    };

    try {
      const response = await fetch("/api/quotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(quoteData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setOpen(false);
        formRef.current?.reset();
        toast({
          title: t('modal.successTitle'),
          description: t('modal.successDesc'),
        });
      } else {
        throw new Error(result.message || "Failed to submit quote");
      }
    } catch (error) {
      console.error("Quote submission error:", error);
      toast({
        title: "Error",
        description: "Failed to submit quote request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-black/95 border-primary/20 backdrop-blur-xl text-white max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display text-primary">{t('modal.title')}</DialogTitle>
          <DialogDescription className="text-gray-400">
            {t('modal.desc')}
          </DialogDescription>
        </DialogHeader>
        
        <form ref={formRef} onSubmit={handleSubmit} className="grid gap-6 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company">{t('modal.company')}</Label>
              <Input name="company" id="company" required placeholder="" className="bg-white/5 border-white/10 focus:border-primary/50 text-white" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">{t('modal.name')}</Label>
              <Input name="name" id="name" required placeholder="" className="bg-white/5 border-white/10 focus:border-primary/50 text-white" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">{t('modal.email')}</Label>
              <Input name="email" id="email" type="email" required placeholder="" className="bg-white/5 border-white/10 focus:border-primary/50 text-white" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">{t('modal.phone')}</Label>
              <Input name="phone" id="phone" type="tel" required placeholder="" className="bg-white/5 border-white/10 focus:border-primary/50 text-white" />
            </div>
          </div>

          <div className="space-y-3">
            <Label>{t('modal.services')}</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 rounded-lg border border-white/10 bg-white/5">
              {servicesList.map((service) => (
                <div key={service.id} className="flex items-center space-x-2">
                  <Checkbox 
                    name={service.id}
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
            <Label htmlFor="message">{t('modal.notes')}</Label>
            <Textarea 
              name="message"
              id="message" 
              placeholder={t('modal.notesPlaceholder')} 
              className="bg-white/5 border-white/10 focus:border-primary/50 text-white min-h-[80px]" 
            />
          </div>

          <div className="flex justify-end pt-2">
            <Button type="submit" disabled={loading} className="bg-primary text-black hover:bg-primary/90 font-bold w-full md:w-auto">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t('modal.sending')}
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  {t('modal.submit')}
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}