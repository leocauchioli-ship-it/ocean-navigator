import fundoEscuro from "@/assets/fundo-escuro.png";
import { ArrowRight, Play } from "lucide-react";

const segments = [
  "Empresa de Pesca", "Transporte de Carga", "Embarcações de Apoio",
  "Petroleiros", "Rebocadores", "Operações Fluviais", "Iates e Lanchas",
  "Empresa de Pesca", "Transporte de Carga", "Embarcações de Apoio",
  "Petroleiros", "Rebocadores", "Operações Fluviais", "Iates e Lanchas",
];

const Hero = () => {
  return (
    <section className="relative min-h-[88vh] flex flex-col justify-center overflow-hidden" style={{
      background: "linear-gradient(160deg, hsl(var(--ka8-navy)) 0%, hsl(var(--ka8-azure)) 60%, hsl(var(--ka8-secondary)) 100%)",
    }}>
      {/* Background overlay */}
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage: `url(${fundoEscuro})`,
        backgroundSize: 'cover',
      }} />

      <div className="container-ka8 relative z-10 px-4 pt-24 pb-16 flex-1 flex flex-col justify-center">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="badge-ka8 mb-8" style={{
            background: "rgba(11,164,174,0.15)",
            borderColor: "rgba(11,164,174,0.4)",
          }}>
            <span className="relative flex h-2 w-2">
              <span className="ping-slow absolute inline-flex h-full w-full rounded-full bg-ka8-secondary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-ka8-secondary" />
            </span>
            Cobertura Satelital 24/7
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-[64px] font-extrabold leading-[1.1] mb-6 text-white tracking-tight">
            Controle total da sua embarcação,{" "}
            <span className="text-ka8-secondary">de qualquer lugar do mundo.</span>
          </h1>

          <p className="text-lg text-ka8-primary-100 mb-8 max-w-[560px] leading-relaxed">
            Para gestores que precisam saber o que acontece em cada viagem — combustível, rota e risco.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <a href="#contato" className="btn-white text-base">
              Solicitar Demonstração
            </a>
            <a href="#como-funciona" className="btn-ghost-white text-base">
              <Play size={16} /> Ver como funciona
            </a>
          </div>
        </div>
      </div>

      {/* Logo strip marquee */}
      <div className="relative z-10 border-t" style={{
        background: "rgba(255,255,255,0.06)",
        borderColor: "rgba(255,255,255,0.1)",
      }}>
        <div className="py-5 overflow-hidden">
          <div className="marquee-track">
            {segments.map((s, i) => (
              <span key={i} className="text-[13px] font-semibold tracking-wider uppercase whitespace-nowrap" style={{ color: "rgba(255,255,255,0.45)" }}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
