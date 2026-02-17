import { useScrollReveal } from "@/hooks/useScrollReveal";

const metrics = [
  { number: "24/7", title: "Cobertura contínua", desc: "Monitoramento ininterrupto, sem falhas de sinal ou interrupções." },
  { number: "-40%", title: "Redução de custos", desc: "Clientes reportam redução significativa em custos operacionais." },
  { number: "100%", title: "Satelital. Sem GSM.", desc: "Funciona em alto-mar, rios, canais e áreas remotas. Mar e rio com a mesma cobertura." },
  { number: "1", title: "Tudo em um painel", desc: "Posição + Combustível + Vídeo integrados em uma única plataforma." },
];

const Metrics = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding section-navy section-kite-bg" ref={ref}>
      <div className="container-ka8 relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="font-display text-3xl md:text-[42px] font-extrabold text-white leading-tight">
            O mar sempre vai ser imprevisível.<br />
            <span className="text-ka8-secondary">A operação não precisa ser.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 reveal">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="rounded-xl p-8 text-center"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(11,164,174,0.2)",
              }}
            >
              <div className="font-display text-5xl font-black text-ka8-secondary leading-none mb-3">
                {m.number}
              </div>
              <div className="font-body text-[15px] font-bold text-white mb-2">{m.title}</div>
              <div className="font-body text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                {m.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
