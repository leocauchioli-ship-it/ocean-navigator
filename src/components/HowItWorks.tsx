import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight } from "lucide-react";
import imgStep1 from "@/assets/embarcacao-instalacao.jpg";
import imgStep2 from "@/assets/rastreador-satelite.png";
import imgStep3 from "@/assets/painel-unificado.png";

const steps = [
  {
    num: "01",
    label: "PASSO 01",
    title: "Instalação integrada, sem interferir na operação",
    desc: "Módulos e sensores são instalados na embarcação de forma integrada, sem interferir na operação. O setup é rápido e a embarcação volta ao mar rapidamente.",
    link: "Ver como instalamos",
    img: imgStep1,
    alt: "Rastreador satelital KA8 com painel solar em modelos horizontal e vertical",
    reverse: false,
  },
  {
    num: "02",
    label: "PASSO 02",
    title: "Transmissão via satélite. Onde o barco estiver.",
    desc: "Os dados são transmitidos via satélite, sem depender de sinal de celular. Funciona onde a operação realmente acontece: hidrovias, alto-mar e áreas remotas.",
    link: "Por que satélite?",
    img: imgStep2,
    alt: "Diagrama de comunicação satelital: satélite em órbita transmitindo dados para rastreador instalado em embarcação",
    reverse: true,
  },
  {
    num: "03",
    label: "PASSO 03",
    title: "Você gerencia. De qualquer lugar.",
    desc: "Você acessa uma plataforma unificada com posição atualizada, telemetria de múltiplos ativos, vídeo integrado e histórico completo de rotas, centralizando informações que hoje estão fragmentadas em várias ferramentas. Tudo em um lugar, de qualquer dispositivo, a qualquer hora.",
    link: "Ver o painel",
    img: imgStep3,
    alt: "Gestor acessando painel KA8 via tablet para monitorar embarcação em tempo real",
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
                  <img src={step.img} alt={step.alt} className="w-full h-auto object-contain aspect-[4/3] bg-white p-4" loading="lazy" />
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
