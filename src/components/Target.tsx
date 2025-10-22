import { Heart, Users, Sparkles, Star } from "lucide-react";
import milhoImage from "@/assets/milho-fresco.jpg";

const Target = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-6">
              Para Quem Busca Mais que Sabor
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Nossas pamonhas são feitas para pessoas especiais que valorizam o que é autêntico
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group order-2 md:order-1">
              <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-xl group-hover:blur-2xl transition-smooth"></div>
              <img 
                src={milhoImage}
                alt="Milho verde fresco"
                className="relative rounded-2xl shadow-card-hover w-full h-[400px] object-cover"
              />
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-secondary text-xl mb-2">
                      Apreciadores de Culinária Afetiva
                    </h3>
                    <p className="text-foreground/80">
                      Aqueles que reconhecem o valor de uma comida feita com amor e dedicação
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-secondary/10 p-3 rounded-xl">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-secondary text-xl mb-2">
                      Famílias que Valorizam Qualidade
                    </h3>
                    <p className="text-foreground/80">
                      Pais e mães que buscam o melhor para seus filhos, sem abrir mão da tradição
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-accent/10 p-3 rounded-xl">
                    <Sparkles className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-secondary text-xl mb-2">
                      Quem Busca Autenticidade
                    </h3>
                    <p className="text-foreground/80">
                      Pessoas cansadas de produtos industrializados e que desejam redescobrir sabores genuínos
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-secondary text-xl mb-2">
                      Nostálgicos de Bons Momentos
                    </h3>
                    <p className="text-foreground/80">
                      Aqueles que querem reviver memórias afetivas através de sabores especiais
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Target;
