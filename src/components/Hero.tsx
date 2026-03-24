import heroBg from "@/assets/background.png";
import { ArrowRight, Play } from "lucide-react";

const baseSegments = [
  "Empresa de Pesca", "Transporte de Carga", "Embarcações de Apoio",
  "Petroleiros", "Rebocadores", "Operações Fluviais",
];
const segments = [...baseSegments, ...baseSegments, ...baseSegments, ...baseSegments];

const Hero = () => {
  return (
    <section className="relative min-h-[75vh] md:min-h-[88vh] flex flex-col justify-center overflow-hidden">
      {/* Background image — VIDEO-READY: replace this div with a <video> element when available.
          Use: <video autoPlay muted loop playsInline poster={heroBg} className="absolute inset-0 w-full h-full object-cover z-[1]">
            <source src="/assets/hero-animation.webm" type="video/webm" />
            <source src="/assets/hero-animation.mp4" type="video/mp4" />
          </video>
      */}
      <div className="absolute inset-0" style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />
      {/* Dark gradient overlay for contrast and video-readiness */}
      <div className="absolute inset-0 z-[2]" style={{
        background: 'linear-gradient(to bottom, rgba(1,25,46,0.35), rgba(1,25,46,0.55))',
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
            Para gestores de embarcações marítimas e fluviais que precisam saber o que acontece em cada viagem: telemetria, rota e risco.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <a href="#contato" className="btn-white text-base w-full sm:w-auto text-center">
              Solicitar Demonstração
            </a>
            <a href="#como-funciona" className="btn-ghost-white text-base w-full sm:w-auto text-center justify-center">
              <Play size={16} /> Ver como funciona
            </a>
          </div>
        </div>
      </div>

      {/* Logo strip marquee */}
      <div className="relative z-10 border-t" style={{
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
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
