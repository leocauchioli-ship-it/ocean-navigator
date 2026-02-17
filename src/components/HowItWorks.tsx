import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Wrench, Satellite, LayoutDashboard, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Wrench,
    num: "01",
    title: "Instalação",
    desc: "Módulos e sensores são instalados na embarcação de forma integrada, sem interferir na operação.",
  },
  {
    icon: Satellite,
    num: "02",
    title: "Transmissão Satelital",
    desc: "Os dados são transmitidos via satélite — sem depender de sinal de celular. Funciona onde a operação realmente acontece: alto-mar, rios, áreas remotas.",
  },
  {
    icon: LayoutDashboard,
    num: "03",
    title: "Gestão na Plataforma",
    desc: "Você acessa um painel online com posição atualizada, consumo de múltiplos tanques, vídeo integrado e histórico completo de rotas — de qualquer dispositivo, a qualquer hora.",
  },
];

const HowItWorks = () => {
  const ref = useScrollReveal();

  return (
    <section id="como-funciona" className="section-padding section-mid" ref={ref}>
      <div className="container-ka8">
        <div className="text-center mb-16 reveal">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">
            Da embarcação para você,{" "}
            <span className="gradient-text">em tempo real</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-primary/30 via-primary to-primary/30" />

          {steps.map((s, i) => (
            <div key={i} className="reveal relative" style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className="text-center">
                {/* Circle icon */}
                <div className="relative inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 border-2 border-primary/30 mb-6 mx-auto">
                  <s.icon size={28} className="text-primary" />
                  <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center font-display">
                    {s.num}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Diagram summary */}
        <div className="reveal mt-16 flex flex-wrap items-center justify-center gap-4 text-sm font-display font-semibold text-muted-foreground">
          <span className="badge-ka8">🚢 Embarcação</span>
          <ArrowRight size={16} className="text-primary" />
          <span className="badge-ka8">🛰️ Satélite</span>
          <ArrowRight size={16} className="text-primary" />
          <span className="badge-ka8">💻 Plataforma</span>
          <ArrowRight size={16} className="text-primary" />
          <span className="badge-ka8">👤 Gestor</span>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
