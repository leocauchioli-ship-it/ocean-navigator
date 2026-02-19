import { useScrollReveal } from "@/hooks/useScrollReveal";

const Comparison = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding section-light" ref={ref}>
      <div className="container-ka8">
        <div className="grid md:grid-cols-[2fr_3fr] gap-12 md:gap-20 items-center reveal">
          {/* Left - text */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-ka8-text-dark mb-4 leading-tight">
              Por que o rastreamento tradicional{" "}
              <span className="gradient-text">não é suficiente</span>
            </h2>
            <p className="text-ka8-text-muted text-base leading-relaxed">
              Sistemas baseados em GSM perdem sinal onde a operação realmente acontece — no mar e nos rios. A KA8 usa satélite — cobertura marítima e fluvial, sem interrupção.
            </p>
          </div>

          {/* Right - visual infographic */}
          <div className="relative">
            <svg viewBox="0 0 600 320" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Background */}
              <rect x="0" y="0" width="600" height="320" rx="16" fill="white" stroke="hsl(214,33%,93%)" strokeWidth="1" />

              {/* Labels */}
              <text x="120" y="40" fontFamily="Montserrat" fontSize="14" fontWeight="800" fill="#0BA4AE">Com KA8</text>
              <text x="420" y="40" fontFamily="Montserrat" fontSize="14" fontWeight="800" fill="#94A3B8">Sem KA8</text>

              {/* KA8 path - solid teal */}
              <path d="M30 140 Q150 80 300 100 Q450 120 570 80" stroke="#0BA4AE" strokeWidth="3" fill="none" />
              {/* Data points on KA8 line */}
              <circle cx="100" cy="115" r="6" fill="#0BA4AE" />
              <circle cx="200" cy="95" r="6" fill="#0BA4AE" />
              <circle cx="300" cy="100" r="6" fill="#0BA4AE" />
              <circle cx="400" cy="108" r="6" fill="#0BA4AE" />
              <circle cx="500" cy="90" r="6" fill="#0BA4AE" />

              {/* Without KA8 path - dashed gray */}
              <path d="M30 240 Q150 200 200 220 Q250 240 300 260" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="6 4" fill="none" />
              <text x="310" y="265" fontFamily="Inter" fontSize="11" fill="#94A3B8">Sinal perdido</text>
              <path d="M420 230 Q480 210 570 240" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="6 4" fill="none" />

              {/* KA8 labels */}
              <rect x="60" y="55" width="100" height="28" rx="4" fill="#E6F7F8" />
              <text x="110" y="74" fontFamily="Inter" fontSize="10" fontWeight="600" fill="#0BA4AE" textAnchor="middle">Posição ✓</text>
              <rect x="220" y="55" width="100" height="28" rx="4" fill="#E6F7F8" />
              <text x="270" y="74" fontFamily="Inter" fontSize="10" fontWeight="600" fill="#0BA4AE" textAnchor="middle">Telemetria ✓</text>
              <rect x="380" y="55" width="100" height="28" rx="4" fill="#E6F7F8" />
              <text x="430" y="74" fontFamily="Inter" fontSize="10" fontWeight="600" fill="#0BA4AE" textAnchor="middle">Vídeo ✓</text>

              {/* Without KA8 labels */}
              <rect x="80" y="275" width="80" height="24" rx="4" fill="#FEF2F2" />
              <text x="120" y="291" fontFamily="Inter" fontSize="10" fontWeight="600" fill="#EF4444" textAnchor="middle">Estimativa</text>
              <rect x="320" y="275" width="80" height="24" rx="4" fill="#FEF2F2" />
              <text x="360" y="291" fontFamily="Inter" fontSize="10" fontWeight="600" fill="#EF4444" textAnchor="middle">Sem dados</text>
              <rect x="450" y="275" width="80" height="24" rx="4" fill="#FEF2F2" />
              <text x="490" y="291" fontFamily="Inter" fontSize="10" fontWeight="600" fill="#EF4444" textAnchor="middle">Incerteza</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
