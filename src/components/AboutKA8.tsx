import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Compass, Target } from "lucide-react";

const AboutKA8 = () => {
  const ref = useScrollReveal();

  return (
    <section id="quem-somos" className="section-padding section-light" ref={ref}>
      <div className="container-ka8">
        <div className="text-center mb-12 reveal">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-3 text-ka8-text-dark">
            Sobre a KA8
          </h2>
          <p className="text-ka8-text-muted text-lg max-w-2xl mx-auto">
            Inteligência operacional brasileira para o setor aquático
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Quem Somos */}
          <div
            className="reveal rounded-2xl bg-background p-8 md:p-10"
            style={{
              borderLeft: "4px solid hsl(var(--primary))",
              transitionDelay: "0.1s",
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "rgba(11,164,174,0.12)" }}>
                <Compass size={20} className="text-primary" />
              </div>
              <h3 className="font-display font-extrabold text-base uppercase tracking-wider text-primary">
                Quem Somos
              </h3>
            </div>
            <p className="text-ka8-text-body text-[15px] leading-[1.7] mb-4">
              A KA8 é uma empresa brasileira de inteligência operacional especializada no monitoramento e rastreamento de ativos móveis. Com um DNA tecnológico e foco prioritário no setor marítimo e fluvial, entregamos soluções que conectam operações terrestres, costeiras e remotas em uma única interface estratégica.
            </p>
            <p className="text-ka8-text-muted text-sm leading-relaxed">
              O nome KA8 deriva do conceito de "Kite" (pipa), representando nossa visão aérea e controle estratégico, somado ao número "8", que remete ao fluxo infinito de dados e ao monitoramento ininterrupto.
            </p>
          </div>

          {/* Nosso Propósito */}
          <div
            className="reveal rounded-2xl bg-background p-8 md:p-10"
            style={{
              borderLeft: "4px solid hsl(var(--primary))",
              transitionDelay: "0.2s",
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "rgba(11,164,174,0.12)" }}>
                <Target size={20} className="text-primary" />
              </div>
              <h3 className="font-display font-extrabold text-base uppercase tracking-wider text-primary">
                Nosso Propósito
              </h3>
            </div>
            <p className="text-ka8-text-body text-[15px] leading-[1.7] mb-4">
              Não vendemos apenas localização; entregamos <strong className="text-primary font-bold">Controle Total</strong>.
            </p>
            <p className="text-ka8-text-body text-[15px] leading-[1.7]">
              Nosso compromisso é viabilizar a tomada de decisão baseada em dados reais, aumentando a segurança de quem está a bordo e a rentabilidade de quem faz a gestão em terra.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutKA8;
