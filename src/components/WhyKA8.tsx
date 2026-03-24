import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Satellite, Flag, Link2, Handshake, TrendingDown, LayoutDashboard } from "lucide-react";

const pillars = [
  {
    icon: Satellite,
    title: "Satélite, não celular",
    desc: "Funciona onde a operação acontece de verdade: hidrovias, alto-mar e áreas remotas. Sem sinal nenhum.",
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

const metrics = [
  {
    icon: TrendingDown,
    number: "5~15%",
    title: "Redução no combustível",
    desc: "Monitoramento preciso de consumo que permite identificar desvios e otimizar abastecimento.",
  },
  {
    icon: LayoutDashboard,
    number: "1",
    title: "Tudo em um painel",
    desc: "Posição + Telemetria + Vídeo integrados em uma única plataforma.",
  },
];

const WhyKA8 = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding section-navy-deep" ref={ref}>
      <div className="container-ka8 relative z-10">
        <div className="text-center mb-12 reveal">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4 max-w-3xl mx-auto text-white">
            Não é produto genérico adaptado do terrestre.{" "}
            <span className="text-ka8-secondary">É solução pensada para o mar.</span>
          </h2>
        </div>

        {/* 4 pillars */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="reveal rounded-xl p-7 transition-all duration-200"
              style={{
                transitionDelay: `${i * 0.1}s`,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(11,164,174,0.2)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-2px)";
                el.style.borderColor = "rgba(11,164,174,0.5)";
                el.style.background = "rgba(255,255,255,0.08)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "";
                el.style.borderColor = "rgba(11,164,174,0.2)";
                el.style.background = "rgba(255,255,255,0.05)";
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

        {/* 2 metric cards */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mt-6 reveal">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="reveal rounded-xl p-7 text-center transition-all duration-200"
              style={{
                transitionDelay: `${(pillars.length + i) * 0.1}s`,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(11,164,174,0.2)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-2px)";
                el.style.borderColor = "rgba(11,164,174,0.5)";
                el.style.background = "rgba(255,255,255,0.08)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "";
                el.style.borderColor = "rgba(11,164,174,0.2)";
                el.style.background = "rgba(255,255,255,0.05)";
              }}
            >
              <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 mx-auto" style={{ background: "rgba(11,164,174,0.15)" }}>
                <m.icon size={22} className="text-ka8-secondary" />
              </div>
              <div className="font-display text-4xl md:text-5xl font-extrabold text-ka8-secondary leading-none mb-3">
                {m.number}
              </div>
              <div className="font-body text-base font-bold text-white mb-2">{m.title}</div>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyKA8;
