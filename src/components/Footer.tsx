import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Heart className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-display font-bold">Coração de Milho</h3>
          </div>
          
          <p className="text-white/80 italic font-display">
            Tradição de Gerações
          </p>

          <div className="pt-6 border-t border-white/20">
            <p className="text-white/60 text-sm">
              © 2025 Coração de Milho. Feito com amor e carinho.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
