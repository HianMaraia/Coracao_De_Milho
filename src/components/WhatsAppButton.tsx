import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleClick = () => {
    const message = encodeURIComponent("Olá! Vim pelo site e quero experimentar o sabor da tradição! 🌽");
    window.open(`https://wa.me/5566984186403?text=${message}`, "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 right-6 w-16 h-16 rounded-full gradient-warm text-white shadow-lg hover:scale-110 transition-smooth z-50 animate-pulse hover:animate-none p-0"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </Button>
  );
};

export default WhatsAppButton;
