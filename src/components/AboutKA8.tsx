import { useScrollReveal } from "@/hooks/useScrollReveal";
import logoBg from "@/assets/logo-marca-pos.png";
import conceitoImg from "@/assets/conceito-ka8.png";

const AboutKA8 = () => {
  const ref1 = useScrollReveal();
  const ref2 = useScrollReveal();

  return (
    <>
      {/* Seção 1 — Quem Somos (fundo claro, imagem full-bleed direita) */}
      <section
        id="quem-somos"
        className="section-light relative overflow-hidden"
        style={{ minHeight: "600px" }}
        ref={ref1}
      >
        {/* Imagem full-bleed — ocupa metade direita sem caixa */}
        <div className="hidden md:block absolute top-0 right-0 w-[50%] h-full">
          <img
            src={conceitoImg}
            alt="KA8 — inteligência operacional marítima"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Gradient fade para fundir com o fundo claro */}
          <div
            className="absolute inset-y-0 left-0 w-48"
            style={{
              background:
                "linear-gradient(to right, hsl(var(--ka8-bg-light)), transparent)",
            }}
          />
        </div>

        {/* Texto — metade esquerda */}
        <div className="container-ka8 relative z-10 py-16 md:py-24 px-4">
          <div className="md:w-1/2 md:pr-16 reveal">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "hsl(var(--primary))" }}
            >
              Quem Somos
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-6 text-ka8-text-dark leading-tight">
              Uma empresa brasileira construída para onde a operação realmente acontece.
            </h2>
            <p className="text-[16px] leading-[1.8] text-ka8-text-body mb-4">
              A KA8 é uma empresa de inteligência operacional especializada no monitoramento e rastreamento de ativos móveis. Com DNA tecnológico e foco prioritário no setor marítimo e fluvial, entregamos soluções que conectam operações terrestres, costeiras e remotas em uma única interface estratégica.
            </p>
            <p className="text-[15px] leading-[1.7] text-ka8-text-muted">
              O nome KA8 deriva do conceito de <strong className="text-ka8-text-body">"Kite"</strong> (pipa) — nossa visão aérea e controle estratégico — somado ao número <strong className="text-ka8-text-body">"8"</strong>, que remete ao fluxo infinito de dados e ao monitoramento ininterrupto.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 2 — Nosso Propósito (fundo navy escuro com watermark) */}
      <section className="section-padding section-navy relative overflow-hidden" ref={ref2}>
        {/* Background watermark */}
        <div
          className="absolute inset-0 pointer-events-none select-none"
          style={{
            backgroundImage: `url(${logoBg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
            backgroundSize: "40%",
            opacity: 0.04,
          }}
        />
        <div className="container-ka8 relative z-10">
          <div className="max-w-3xl mx-auto reveal">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "hsl(var(--ka8-secondary))" }}
            >
              Nosso Propósito
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-6 text-white leading-tight">
              Não vendemos apenas localização.{" "}
              <span style={{ color: "hsl(var(--ka8-secondary))" }}>Entregamos Controle Total.</span>
            </h2>
            <p className="text-[16px] leading-[1.8] mb-4" style={{ color: "rgba(255,255,255,0.82)" }}>
              Nosso compromisso é viabilizar a tomada de decisão baseada em dados reais — aumentando a segurança de quem está a bordo e a rentabilidade de quem faz a gestão em terra.
            </p>
            <p className="text-[15px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.55)" }}>
              Cada funcionalidade da plataforma existe para que o gestor nunca mais precise esperar a embarcação voltar para saber o que aconteceu. A informação chega em tempo real, onde você estiver.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutKA8;
