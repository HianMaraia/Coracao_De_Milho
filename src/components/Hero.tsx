import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import heroImage from "@/assets/hero-pamonhas.jpg";

const Hero = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Vim pelo site e quero experimentar o sabor da tradição! 🌽");
    window.open(`https://wa.me/5566984186403?text=${message}`, "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <Heart className="w-16 h-16 mx-auto text-primary animate-pulse" />
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-secondary leading-tight">
            Coração de Milho
          </h1>
          
          <p className="text-2xl md:text-3xl font-display text-secondary/80 italic">
            Tradição de Gerações
          </p>
          
          <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto leading-relaxed">
            Tudo começa no coração da família. Uma herança de afeto, carinhosamente passada de mãe para filha.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg"
              onClick={handleWhatsAppClick}
              className="gradient-warm text-white font-semibold text-lg px-8 py-6 shadow-card-hover hover:scale-105 transition-smooth"
            >
              Encomendar Agora
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('cardapio')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/80 backdrop-blur-sm border-secondary text-secondary font-semibold text-lg px-8 py-6 hover:bg-white transition-smooth"
            >
              Ver Cardápio
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-secondary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-secondary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
