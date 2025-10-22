import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import pamonhaDoce from "@/assets/pamonha-doce.jpg";
import pamonhaSalgada from "@/assets/pamonha-salgada.jpg";

const products = [
  {
    name: "Pamonha Doce Tradicional",
    description: "A clássica pamonha doce, cremosa e na medida certa. Puro sabor de milho verde com aquele toque especial da receita da família.",
    image: pamonhaDoce,
    badge: "Favorita",
    available: true
  },
  {
    name: "Pamonha Salgada com Queijo",
    description: "Para quem prefere o sabor marcante do salgado. Pamonha artesanal recheada com queijo derretido de primeira qualidade.",
    image: pamonhaSalgada,
    badge: "Delícia",
    available: true
  },
  {
    name: "Curau Cremoso",
    description: "Em breve! Curau caseiro preparado com milho verde fresquinho, cremoso e aveludado.",
    image: pamonhaDoce, // placeholder
    badge: "Em Breve",
    available: false
  },
  {
    name: "Bolo de Milho Fofinho",
    description: "Em breve! Bolo de milho tradicional, úmido e aromático, perfeito para o café da tarde.",
    image: pamonhaSalgada, // placeholder
    badge: "Em Breve",
    available: false
  }
];

const Menu = () => {
  const handleOrder = (productName: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de encomendar: ${productName} 🌽`);
    window.open(`https://wa.me/5566984186403?text=${message}`, "_blank");
  };

  return (
    <section id="cardapio" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-6">
            Feito com Amor
          </h2>
          <p className="text-lg text-foreground/80">
            Cada produto é preparado artesanalmente, com ingredientes frescos e muito carinho
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <Card 
              key={index}
              className={`overflow-hidden shadow-card hover:shadow-card-hover transition-smooth group ${!product.available && 'opacity-70'}`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-smooth duration-500"
                />
                <Badge 
                  className={`absolute top-4 right-4 ${
                    product.badge === "Em Breve" 
                      ? "bg-muted text-foreground" 
                      : "gradient-warm text-white"
                  }`}
                >
                  {product.badge}
                </Badge>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-display font-bold text-secondary">
                  {product.name}
                </h3>
                
                <p className="text-foreground/80 leading-relaxed">
                  {product.description}
                </p>

                {product.available && (
                  <Button 
                    onClick={() => handleOrder(product.name)}
                    className="w-full gradient-warm text-white font-semibold hover:scale-105 transition-smooth"
                  >
                    Encomendar pelo WhatsApp
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
