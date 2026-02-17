import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    label: "PASSO 01",
    title: "Instalação integrada, sem interferir na operação",
    desc: "Módulos e sensores são instalados na embarcação de forma integrada, sem interferir na operação. O setup é rápido e a embarcação volta ao mar rapidamente.",
    link: "Ver como instalamos",
    img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&auto=format&fit=crop&q=80",
    reverse: false,
  },
  {
    num: "02",
    label: "PASSO 02",
    title: "Transmissão via satélite. Onde o barco estiver.",
    desc: "Os dados são transmitidos via satélite — sem depender de sinal de celular. Funciona onde a operação realmente acontece: alto-mar, rios, áreas remotas.",
    link: "Por que satélite?",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
    reverse: true,
  },
  {
    num: "03",
    label: "PASSO 03",
    title: "Você gerencia. De qualquer lugar.",
    desc: "Acesse o painel online com posição atualizada, consumo de múltiplos tanques, vídeo integrado e histórico completo de rotas — de qualquer dispositivo, a qualquer hora.",
    link: "Ver o painel",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    reverse: false,
  },
];

const HowItWorks = () => {
  const ref = useScrollReveal();

  return (
    <section id="como-funciona" ref={ref}>
      {steps.map((step, i) => (
        <div
          key={i}
          className={`section-padding ${i % 2 === 0 ? "section-white" : "section-light"}`}
        >
          <div className="container-ka8">
            <div className={`reveal grid md:grid-cols-2 gap-12 md:gap-20 items-center ${step.reverse ? "md:[direction:rtl]" : ""}`}
              style={{ transitionDelay: "0.1s" }}
            >
              <div className={step.reverse ? "md:[direction:ltr]" : ""}>
                <div className="feature-label">{step.label}</div>
                <h3 className="font-display text-2xl md:text-[38px] font-extrabold text-ka8-text-dark leading-tight mb-4">
                  {step.title}
                </h3>
                <p className="text-ka8-text-body text-base leading-relaxed mb-6">
                  {step.desc}
                </p>
                <a href="#contato" className="inline-flex items-center gap-2 text-[15px] font-semibold text-primary hover:gap-3 transition-all">
                  {step.link} <ArrowRight size={16} />
                </a>
              </div>
              <div className={step.reverse ? "md:[direction:ltr]" : ""}>
                <div className="rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(7,57,104,0.15)]">
                  <img src={step.img} alt={step.title} className="w-full h-auto object-cover aspect-[4/3]" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HowItWorks;
