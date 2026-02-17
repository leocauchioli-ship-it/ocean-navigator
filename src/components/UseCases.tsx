import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Fish, Ship, Anchor, ArrowRight } from "lucide-react";

const cases = [
  {
    icon: Fish,
    title: "Empresa de Pesca",
    desc: "Monitore toda a frota de pesqueiros, garanta que as rotas respeitem áreas regulamentadas e tenha prova do que aconteceu em cada viagem.",
    result: "Conformidade, redução de multas, rastreabilidade total.",
  },
  {
    icon: Ship,
    title: "Transporte e Carga",
    desc: "Acompanhe cargueiros, otimize rotas com dados históricos e justifique custos operacionais com informações precisas.",
    result: "Redução de custos, melhor planejamento, confiança do cliente.",
  },
  {
    icon: Anchor,
    title: "Embarcações de Apoio e Rebocadores",
    desc: "Gestão de frotas de apoio com posicionamento em tempo real e controle de consumo por operação.",
    result: "Eficiência operacional e controle de margem.",
  },
];

const UseCases = () => {
  const ref = useScrollReveal();

  return (
    <section id="casos-de-uso" className="section-padding section-white" ref={ref}>
      <div className="container-ka8">
        <div className="text-center mb-12 reveal">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4 text-ka8-text-dark">
            Soluções para cada tipo de{" "}
            <span className="gradient-text">operação</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div key={i} className="card-ka8 reveal flex flex-col" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="card-icon">
                <c.icon size={22} />
              </div>
              <h3 className="font-body font-bold text-base mb-3 text-ka8-text-dark">{c.title}</h3>
              <p className="text-ka8-text-muted text-sm leading-relaxed mb-4 flex-1">{c.desc}</p>
              <div className="border-t border-ka8-navy-100 pt-3 mt-auto">
                <p className="text-sm font-semibold text-primary">
                  Resultado: <span className="text-ka8-text-body font-normal">{c.result}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
