import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Instagram, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Vim pelo site e quero experimentar o sabor da tradição! 🌽");
    window.open(`https://wa.me/5566984186403?text=${message}`, "_blank");
  };

  const handleInstagram = () => {
    window.open("https://instagram.com/coracaodemilho", "_blank");
  };

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-6">
              Leve esse Afeto para sua Casa
            </h2>
            <p className="text-lg text-foreground/80">
              Entre em contato e faça sua encomenda. Estamos prontos para atendê-lo!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-8 text-center shadow-card hover:shadow-card-hover transition-smooth group">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-smooth">
                <MessageCircle className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display font-bold text-secondary text-xl mb-2">
                WhatsApp
              </h3>
              <p className="text-foreground/80 mb-4">
                Faça seu pedido direto pelo WhatsApp
              </p>
              <Button 
                onClick={handleWhatsApp}
                className="gradient-warm text-white font-semibold w-full hover:scale-105 transition-smooth"
              >
                (66) 98418-6403
              </Button>
            </Card>

            <Card className="p-8 text-center shadow-card hover:shadow-card-hover transition-smooth group">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-smooth">
                <Instagram className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-bold text-secondary text-xl mb-2">
                Instagram
              </h3>
              <p className="text-foreground/80 mb-4">
                Acompanhe nosso dia a dia
              </p>
              <Button 
                onClick={handleInstagram}
                variant="outline"
                className="border-2 border-primary text-primary font-semibold w-full hover:bg-primary/10 transition-smooth"
              >
                @coracaodemilho
              </Button>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4 items-start">
                <MapPin className="w-6 h-6 text-secondary flex-shrink-0" />
                <div>
                  <h4 className="font-display font-bold text-secondary mb-1">
                    Localização
                  </h4>
                  <p className="text-foreground/80">
                    Atendimento em toda a região
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Clock className="w-6 h-6 text-secondary flex-shrink-0" />
                <div>
                  <h4 className="font-display font-bold text-secondary mb-1">
                    Horário de Atendimento
                  </h4>
                  <p className="text-foreground/80">
                    Segunda a Sábado: 8h às 18h
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              onClick={handleWhatsApp}
              className="gradient-warm text-white font-bold text-xl px-12 py-6 shadow-card-hover hover:scale-105 transition-smooth"
            >
              Encomendar Agora! 🌽
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
