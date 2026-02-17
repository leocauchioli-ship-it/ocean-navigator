import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center section-dark overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--ka8-teal)) 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

      {/* Animated SVG route line */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <path
          d="M-50 600 Q200 500 400 450 Q600 400 750 300 Q900 200 1050 250 Q1200 300 1350 200"
          fill="none"
          stroke="hsl(var(--ka8-teal))"
          strokeWidth="2"
          strokeOpacity="0.2"
          strokeDasharray="8 6"
          className="draw-line"
        />
        {/* GPS dots */}
        <circle cx="400" cy="450" r="4" fill="hsl(var(--ka8-teal))" opacity="0.6">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="750" cy="300" r="4" fill="hsl(var(--ka8-teal))" opacity="0.6">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="1050" cy="250" r="5" fill="hsl(var(--ka8-teal))" opacity="0.8">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin="1s" repeatCount="indefinite" />
        </circle>
      </svg>

      <div className="container-ka8 relative z-10 px-4 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="badge-ka8 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="ping-slow absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Cobertura Satelital 24/7
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Controle total da sua embarcação,{" "}
              <span className="gradient-text">de qualquer lugar do mundo.</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-4 max-w-xl">
              Para donos e gestores que precisam saber exatamente o que acontece em cada viagem — combustível, rota, risco — sem depender do que chega no relatório final.
            </p>

            <p className="text-sm text-primary/80 font-medium mb-8 italic">
              A gestão real começa quando a informação não fica presa dentro do barco.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <a href="#contato" className="btn-ka8-primary text-base">
                Solicitar Demonstração
              </a>
              <a href="#como-funciona" className="btn-ka8-secondary">
                Ver como funciona <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Right visual — dashboard mockup */}
          <div className="hidden lg:block relative">
            <div className="float">
              <div className="card-glass p-6 relative">
                {/* Mini dashboard */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-3 w-3 rounded-full bg-primary" />
                  <span className="text-sm font-display font-semibold">Painel KA8 — Frota Ativa</span>
                </div>
                {/* Fake map area */}
                <div className="bg-secondary/50 rounded-lg h-48 mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--ka8-teal)) 0.5px, transparent 0)`,
                    backgroundSize: '20px 20px',
                  }} />
                  {/* GPS points */}
                  <div className="absolute top-1/3 left-1/4">
                    <span className="relative flex h-3 w-3">
                      <span className="ping-slow absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
                    </span>
                  </div>
                  <div className="absolute top-1/2 left-1/2">
                    <span className="relative flex h-3 w-3">
                      <span className="ping-slow absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" style={{ animationDelay: '0.7s' }} />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
                    </span>
                  </div>
                  <div className="absolute bottom-1/4 right-1/4">
                    <span className="relative flex h-3 w-3">
                      <span className="ping-slow absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" style={{ animationDelay: '1.4s' }} />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
                    </span>
                  </div>
                </div>
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Embarcações", val: "12" },
                    { label: "Em navegação", val: "8" },
                    { label: "Alertas", val: "2" },
                  ].map((s) => (
                    <div key={s.label} className="bg-secondary/30 rounded-lg p-3 text-center">
                      <div className="text-xl font-display font-bold text-primary">{s.val}</div>
                      <div className="text-xs text-muted-foreground">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
