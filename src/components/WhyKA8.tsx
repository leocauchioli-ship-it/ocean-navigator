import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Satellite, Flag, Link2, Handshake } from "lucide-react";

const pillars = [
  {
    icon: Satellite,
    title: "Satélite, não celular",
    desc: "Funciona onde a operação acontece de verdade — mesmo em alto-mar, sem sinal nenhum.",
  },
  {
    icon: Flag,
    title: "Empresa nacional",
    desc: "Produto desenvolvido no Brasil, com entendimento profundo da realidade operacional local.",
  },
  {
    icon: Link2,
    title: "Integração total",
    desc: "Posição + combustível + vídeo na mesma lógica de gestão. Não é colagem de sistemas — é uma plataforma.",
  },
  {
    icon: Handshake,
    title: "Atendimento direto",
    desc: "Quem desenvolve é quem atende. Sem intermediários. Sem ticket. Sem espera.",
  },
];

const WhyKA8 = () => {
  const ref = useScrollReveal();

  return (
    <section id="quem-somos" className="section-padding section-mid" ref={ref}>
      <div className="container-ka8">
        <div className="text-center mb-12 reveal">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4 max-w-3xl mx-auto">
            Não é produto genérico adaptado do terrestre.{" "}
            <span className="gradient-text">É solução pensada para o mar.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {pillars.map((p, i) => (
            <div key={i} className="card-glass reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <p.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyKA8;
