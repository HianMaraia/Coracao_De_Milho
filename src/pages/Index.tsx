import Hero from "@/components/Hero";
import About from "@/components/About";
import Pillars from "@/components/Pillars";
import Menu from "@/components/Menu";
import Target from "@/components/Target";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Pillars />
      <Menu />
      <Target />
      <Contact />
      <WhatsAppButton />
      <Footer />
    </main>
  );
};

export default Index;
