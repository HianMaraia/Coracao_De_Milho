import { Leaf, Users, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const pillars = [
  {
    icon: Leaf,
    title: "Ingredientes Frescos",
    description: "Milho verde cuidadosamente selecionado, colhido no ponto ideal para garantir o melhor sabor e textura.",
    color: "accent"
  },
  {
    icon: Users,
    title: "Receita de Família",
    description: "Um segredo passado de geração em geração, preservando a autenticidade e o sabor tradicional.",
    color: "secondary"
  },
  {
    icon: Heart,
    title: "Afeto em Cada Etapa",
    description: "Cada pamonha é preparada artesanalmente, com o cuidado e carinho de quem faz para quem ama.",
    color: "primary"
  }
];

const Pillars = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-6">
            Resgatando o Sabor e a Tradição
          </h2>
          <p className="text-lg text-foreground/80">
            Três pilares que fazem de cada pamonha uma experiência inesquecível
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card 
                key={index}
                className="p-8 text-center shadow-card hover:shadow-card-hover transition-smooth border-2 bg-card hover:scale-105 group"
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-${pillar.color}/10 flex items-center justify-center group-hover:scale-110 transition-smooth`}>
                  <Icon className={`w-10 h-10 text-${pillar.color}`} />
                </div>
                
                <h3 className="text-2xl font-display font-bold text-secondary mb-4">
                  {pillar.title}
                </h3>
                
                <p className="text-foreground/80 leading-relaxed">
                  {pillar.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
