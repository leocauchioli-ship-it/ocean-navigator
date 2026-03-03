import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Crosshair, Droplets, Bell, Activity, ArrowRight } from "lucide-react";
import sensorImg from "@/assets/sensor-combustivel.png";

const differentials = [
  {
    icon: Crosshair,
    title: "Tecnologia capacitiva",
    desc: "Alta precisão na medição de nível de combustível",
  },
  {
    icon: Droplets,
    title: "Margem de erro < 1%",
    desc: "Dados confiáveis para tomada de decisão",
  },
  {
    icon: Bell,
    title: "Detecção imediata",
    desc: "Alertas de drenagens ou abastecimentos irregulares",
  },
  {
    icon: Activity,
    title: "Monitoramento contínuo",
    desc: "Sem interferência na operação da embarcação",
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
              Alta Precisão
            </div>

            <h2 className="font-display text-2xl md:text-[38px] font-extrabold text-ka8-text-dark leading-tight mb-3">
              Sensor de Combustível{" "}
              <span className="gradient-text">Omnicomm com Alta Precisão</span>
            </h2>
            <p className="text-ka8-text-muted text-sm mb-2 font-medium">
              Tecnologia capacitiva de referência global para monitoramento preciso
            </p>
            <p className="text-ka8-text-body text-[15px] leading-relaxed mb-8">
              Integração com sensores de combustível Omnicomm de alta precisão, utilizando tecnologia capacitiva que permite margem de erro inferior a 1% e detecção imediata de drenagens ou abastecimentos irregulares.
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

            {/* Omnicomm partner badge */}
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
              <span className="font-display font-bold text-ka8-text-dark text-sm">Omnicomm</span>
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
              src={sensorImg}
              alt="Corte técnico mostrando instalação do sensor de combustível dentro do tanque da embarcação"
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
