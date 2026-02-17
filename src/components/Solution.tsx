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
    <section id="solucao" className="section-padding section-dark" ref={ref}>
      <div className="container-ka8">
        <div className="text-center mb-12 reveal">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">
            Deixe de reagir ao passado.{" "}
            <span className="gradient-text">Comece a gerir com dados.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            O ponto de virada não é instalar mais um equipamento. É trazer os dados da embarcação para terra, em tempo útil, com contexto.
          </p>
        </div>

        <div className="reveal max-w-3xl mx-auto">
          <div className="grid grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border">
            {/* Headers */}
            <div className="p-4 bg-secondary/30 text-center font-display font-bold text-muted-foreground border-b border-border">
              ANTES
            </div>
            <div className="p-4 bg-primary/10 text-center font-display font-bold text-primary border-b border-border">
              DEPOIS
            </div>
            {/* Rows */}
            {rows.map((r, i) => (
              <div key={i} className="contents">
                <div className="p-4 text-sm text-muted-foreground border-b border-border bg-secondary/10">
                  {r.before}
                </div>
                <div className="p-4 text-sm text-foreground font-medium border-b border-border bg-primary/5 border-l border-border">
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
