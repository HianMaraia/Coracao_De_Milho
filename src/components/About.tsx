import { Heart, Sparkles } from "lucide-react";
import familyImage from "@/assets/family-cooking.jpg";

const About = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image Side */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-xl group-hover:blur-2xl transition-smooth"></div>
            <img 
              src={familyImage}
              alt="Família preparando pamonhas juntas"
              className="relative rounded-2xl shadow-card-hover w-full h-[500px] object-cover"
            />
          </div>

          {/* Text Side */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Nossa História</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary">
              A Busca pelo Sabor de Verdade
            </h2>

            <div className="space-y-4 text-foreground/80 text-lg leading-relaxed">
              <p>
                Em um mundo onde os alimentos industrializados dominam as prateleiras, 
                perdemos algo precioso: <span className="font-semibold text-secondary">o sabor autêntico</span> e 
                o <span className="font-semibold text-secondary">carinho artesanal</span> de uma receita de família.
              </p>

              <p>
                É por isso que nasceu a <span className="font-bold text-primary">Coração de Milho</span> - 
                para resgatar aquele gostinho inesquecível da pamonha feita pelas mãos de quem ama.
              </p>
            </div>

            <div className="pt-6">
              <div className="flex items-start gap-3 bg-accent/10 p-6 rounded-xl border border-accent/20">
                <Heart className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display font-bold text-secondary text-xl mb-2">
                    Nosso Propósito
                  </h3>
                  <p className="text-foreground/80">
                    Levar até você o verdadeiro sabor da tradição, preparado com 
                    ingredientes selecionados e todo o amor de uma receita familiar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
