import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Satellite, Flag, Link2, Handshake } from "lucide-react";
import mapaAzul from "@/assets/mapa-azul.jpeg";

const pillars = [
  {
    icon: Satellite,
    title: "Operação projetada para disponibilidade contínua.",
    desc: "Monitoramento com alta resiliência e redundância (99,9% de uptime).",
  },
  {
    icon: Flag,
    title: "Empresa nacional",
    desc: "Produto desenvolvido no Brasil, com entendimento profundo da realidade operacional local.",
  },
  {
    icon: Link2,
    title: "Integração total",
    desc: "Posição + telemetria + vídeo na mesma lógica de gestão. Não é colagem de sistemas, é uma plataforma.",
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
    <section
      className="section-padding relative overflow-hidden"
      ref={ref}
    >
      {/* Background image with reduced opacity */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${mapaAzul})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.75,
        }}
      />
      {/* Subtle dark overlay for text contrast */}
      <div className="absolute inset-0" style={{ background: 'rgba(3,43,74,0.3)' }} />
      <div className="container-ka8 relative z-10">
        <div className="text-center mb-12 reveal">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4 max-w-3xl mx-auto text-white">
            Não é produto genérico adaptado do terrestre.{" "}
            <span className="text-ka8-secondary">É solução pensada para o mar.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="reveal rounded-xl p-7"
              style={{
                transitionDelay: `${i * 0.1}s`,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(11,164,174,0.2)",
              }}
            >
              <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4" style={{ background: "rgba(11,164,174,0.15)" }}>
                <p.icon size={22} className="text-ka8-secondary" />
              </div>
              <h3 className="font-body font-bold text-base mb-2 text-white">{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyKA8;
