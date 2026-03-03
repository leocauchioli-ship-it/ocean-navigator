import { useScrollReveal } from "@/hooks/useScrollReveal";

const rows = [
  { before: "Operação baseada em relato", after: "Operação baseada em dados" },
  { before: '"Acho que foi isso"', after: '"Foi aqui, nesse horário, com esse consumo"' },
  { before: "Consumo é estimativa", after: "Consumo é dado preciso" },
  { before: "Desvio é suspeita", after: "Desvio é comprovado" },
  { before: "Rota é dúvida", after: "Rota é histórico verificável" },
];

const Solution = () => {
  const ref = useScrollReveal();

  return (
    <section id="solucao" className="section-padding section-light" ref={ref}>
      <div className="container-ka8">
        <div className="text-center mb-12 reveal">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4 text-ka8-text-dark">
            Deixe de reagir ao passado.{" "}
            <span className="gradient-text">Comece a gerir com dados.</span>
          </h2>
          <p className="text-ka8-text-muted max-w-2xl mx-auto text-lg">
            O ponto de virada não é instalar mais um equipamento. É trazer os dados da embarcação para terra, em tempo útil, com contexto.
          </p>
        </div>

        <div className="reveal max-w-3xl mx-auto">
          <div className="grid grid-cols-2 gap-0 rounded-xl overflow-hidden border border-ka8-navy-100 bg-background">
            <div className="p-3 md:p-4 bg-ka8-bg-subtle text-center font-display font-bold text-ka8-text-muted text-xs md:text-sm border-b border-ka8-navy-100">
              ANTES
            </div>
            <div className="p-3 md:p-4 bg-ka8-primary-100 text-center font-display font-bold text-primary text-xs md:text-sm border-b border-ka8-navy-100">
              DEPOIS
            </div>
            {rows.map((r, i) => (
              <div key={i} className="contents">
                <div className="p-3 md:p-4 text-xs md:text-sm text-ka8-text-muted border-b border-ka8-navy-100 bg-background">
                  {r.before}
                </div>
                <div className="p-3 md:p-4 text-xs md:text-sm text-ka8-text-dark font-medium border-b border-ka8-navy-100 bg-ka8-primary-100/50 border-l border-ka8-navy-100">
                  {r.after}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
