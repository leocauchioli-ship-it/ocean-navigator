import { useScrollReveal } from "@/hooks/useScrollReveal";
import comparisonImg from "@/assets/com-e-sem-ka8.png";

const Comparison = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding section-light" ref={ref}>
      <div className="container-ka8">
        <div className="reveal grid md:grid-cols-2 gap-10 items-center">
          {/* Text left */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-ka8-text-dark mb-4 leading-tight">
              Por que o rastreamento tradicional{" "}
              <span className="gradient-text">não é suficiente</span>
            </h2>
            <p className="text-ka8-text-muted text-base leading-relaxed">
              Sistemas baseados em GSM perdem sinal onde a operação realmente acontece. A KA8 usa satélite: cobertura em hidrovias, alto-mar e áreas remotas, sem interrupção.
            </p>
          </div>

          {/* Image right */}
          <div>
            <img
              src={comparisonImg}
              alt="Comparativo: com KA8 dados contínuos de posição, telemetria e vídeo vs. sem KA8 apenas estimativas e incerteza"
              className="w-full h-auto rounded-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
