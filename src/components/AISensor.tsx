import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Brain, Zap, BarChart3, BatteryCharging, ArrowRight } from "lucide-react";

const differentials = [
  {
    icon: Brain,
    title: "Processamento local",
    desc: "Análise acontece dentro do próprio sensor",
  },
  {
    icon: Zap,
    title: "Alertas instantâneos",
    desc: "Identificação de consumo anormal em tempo real",
  },
  {
    icon: BarChart3,
    title: "Dados precisos",
    desc: "Monitoramento de múltiplos tanques com alta frequência",
  },
  {
    icon: BatteryCharging,
    title: "Autonomia",
    desc: "Não depende de conexão contínua para processar padrões",
  },
];

const AISensor = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding section-light" ref={ref}>
      <div className="container-ka8">
        <div className="reveal grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left - text */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
              style={{
                background: "rgba(17,203,176,0.15)",
                border: "1px solid rgba(17,203,176,0.3)",
                color: "hsl(var(--ka8-secondary))",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="ping-slow absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "hsl(var(--ka8-secondary))" }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "hsl(var(--ka8-secondary))" }} />
              </span>
              IA Embarcada
            </div>

            <h2 className="font-display text-2xl md:text-[38px] font-extrabold text-ka8-text-dark leading-tight mb-3">
              Sensor de Combustível com{" "}
              <span className="gradient-text">Inteligência Artificial</span>
            </h2>
            <p className="text-ka8-text-muted text-sm mb-2 font-medium">
              Tecnologia Omnicom de ponta global para análise preditiva em tempo real
            </p>
            <p className="text-ka8-text-body text-[15px] leading-relaxed mb-8">
              Utilizamos sensores Omnicom, referência mundial em telemetria de combustível, equipados com IA embarcada que realiza análise preditiva diretamente no equipamento — sem necessidade de enviar dados para processamento externo.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {differentials.map((d, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "rgba(17,203,176,0.12)" }}
                  >
                    <d.icon size={18} className="text-ka8-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ka8-text-dark">{d.title}</p>
                    <p className="text-xs text-ka8-text-muted leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Omnicom partner badge */}
            <div
              className="inline-flex items-center gap-3 px-4 py-3 rounded-lg"
              style={{
                background: "hsl(var(--background))",
                border: "1px solid hsl(var(--ka8-navy-100))",
              }}
            >
              <span className="text-[11px] font-semibold uppercase tracking-widest text-ka8-text-muted">
                Tecnologia
              </span>
              <span className="font-display font-bold text-ka8-text-dark text-sm">Omnicom</span>
            </div>
          </div>

          {/* Right - image */}
          <div
            className="rounded-2xl overflow-hidden relative"
            style={{
              boxShadow: "0 24px 64px rgba(11,164,174,0.2)",
            }}
          >
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background: "linear-gradient(135deg, rgba(11,164,174,0.05) 0%, rgba(17,203,176,0.08) 100%)",
              }}
            />
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80"
              alt="Sensor de combustível com IA embarcada"
              className="w-full h-auto object-cover aspect-[4/3]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISensor;
