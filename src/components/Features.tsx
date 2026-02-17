import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { Satellite, Fuel, Video, Check } from "lucide-react";

const tabs = [
  {
    id: "tracking",
    label: "Rastreamento",
    icon: Satellite,
    title: "Posição real. Não estimada.",
    bullets: [
      "Atualização frequente de posição via satélite, sem depender de sinal celular",
      "Histórico completo de rotas com horário, velocidade e direção",
      "Cobertura total em alto-mar, rios, canais, portos e áreas remotas — mar e fluvial",
    ],
    testimonial: {
      quote: "Com a KA8, sei exatamente onde cada embarcação está. Isso mudou a forma como gerencio minha frota.",
      name: "Gestor de Frota",
      role: "Empresa de navegação, PA",
    },
    img: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=900&auto=format&fit=crop&q=80",
  },
  {
    id: "fuel",
    label: "Combustível",
    icon: Fuel,
    title: "Consumo deixou de ser estimativa.",
    bullets: [
      "Monitoramento preciso de múltiplos tanques em tempo real",
      "Alertas automáticos para consumo fora do padrão",
      "Dados que permitem justificar custos operacionais com prova concreta",
    ],
    testimonial: {
      quote: "Identificamos desvio de consumo em 3 dias. Antes, levávamos meses para perceber o problema.",
      name: "Diretor Operacional",
      role: "Frota pesqueira, SC",
    },
    img: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=900&auto=format&fit=crop&q=80",
  },
  {
    id: "video",
    label: "Vídeo Integrado",
    icon: Video,
    title: "Veja o que acontece. Não só onde.",
    bullets: [
      "Vídeo integrado à posição e telemetria na mesma plataforma",
      "Visualização remota da operação em tempo real",
      "Contexto completo: dados + imagem, sem precisar ligar para o capitão",
    ],
    testimonial: {
      quote: "A integração de vídeo com o rastreamento nos deu um nível de controle que não imaginávamos possível.",
      name: "Gerente de Operações",
      role: "Transporte marítimo, RJ",
    },
    img: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=900&auto=format&fit=crop&q=80",
  },
];

const Features = () => {
  const ref = useScrollReveal();
  const [activeTab, setActiveTab] = useState("tracking");
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <section className="section-padding section-white" ref={ref}>
      <div className="container-ka8">
        <div className="text-center mb-12 reveal">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4 text-ka8-text-dark">
            Tudo que você precisa.{" "}
            <span className="gradient-text">Em um único painel.</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="reveal flex gap-1 mb-10 border-b-2 border-ka8-navy-100 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 text-[15px] font-semibold border-b-[3px] -mb-[2px] transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "text-primary border-primary"
                  : "text-ka8-text-muted border-transparent hover:text-ka8-text-body"
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="reveal grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left - text */}
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-extrabold text-ka8-text-dark mb-6">
              {active.title}
            </h3>
            <ul className="space-y-4 mb-8">
              {active.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-ka8-text-body text-[15px] leading-relaxed">
                  <Check size={18} className="text-primary shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>

            {/* Testimonial */}
            <div className="bg-ka8-bg-light border-l-[3px] border-primary rounded-r-lg p-5">
              <p className="text-ka8-text-body text-sm italic mb-3">"{active.testimonial.quote}"</p>
              <div className="text-sm">
                <span className="font-bold text-ka8-text-dark">{active.testimonial.name}</span>
                <span className="text-ka8-text-muted"> · {active.testimonial.role}</span>
              </div>
            </div>
          </div>

          {/* Right - image */}
          <div className="rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(7,57,104,0.12)]">
            <img src={active.img} alt={active.title} className="w-full h-auto object-cover aspect-[4/3]" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
