import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check, X } from "lucide-react";

const rows = [
  { label: "Conectividade", ka8: "Satelital contínua", other: "GSM/Celular (perde em áreas remotas)" },
  { label: "Cobertura", ka8: "Alto-mar, rios, qualquer área", other: "Apenas onde há sinal terrestre" },
  { label: "Atualização", ka8: "Frequente e precisa", other: "Lenta, instável ou com perda de dados" },
  { label: "Dados de combustível", ka8: "Monitoramento de múltiplos tanques", other: "Inexistente ou limitado" },
  { label: "Vídeo integrado", ka8: "Sim, cruzado com telemetria", other: "Não disponível" },
  { label: "Operação sem energia", ka8: "Sistema independente", other: "Rastreamento interrompido" },
  { label: "Suporte", ka8: "Direto com os sócios", other: "Call center / ticket" },
  { label: "Origem", ka8: "Empresa brasileira, produto próprio", other: "Soluções adaptadas / importadas" },
];

const Comparison = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding section-mid" ref={ref}>
      <div className="container-ka8">
        <div className="text-center mb-12 reveal">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">
            Por que o rastreamento tradicional{" "}
            <span className="gradient-text">não é suficiente</span>
          </h2>
        </div>

        {/* Desktop table */}
        <div className="reveal hidden md:block max-w-4xl mx-auto rounded-2xl overflow-hidden border border-border">
          <div className="grid grid-cols-[1fr_1.2fr_1.2fr]">
            <div className="p-4 bg-secondary/20 font-display font-bold text-sm border-b border-border" />
            <div className="p-4 bg-primary/10 font-display font-bold text-primary text-center border-b border-border">
              KA8
            </div>
            <div className="p-4 bg-secondary/20 font-display font-bold text-muted-foreground text-center border-b border-border">
              Outros Sistemas
            </div>
            {rows.map((r, i) => (
              <div key={i} className="contents">
                <div className="p-4 text-sm font-semibold border-b border-border bg-secondary/10">{r.label}</div>
                <div className="p-4 text-sm text-foreground border-b border-border bg-primary/5 flex items-start gap-2">
                  <Check size={16} className="text-primary shrink-0 mt-0.5" />
                  {r.ka8}
                </div>
                <div className="p-4 text-sm text-muted-foreground border-b border-border bg-secondary/10 flex items-start gap-2">
                  <X size={16} className="text-destructive/60 shrink-0 mt-0.5" />
                  {r.other}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4 reveal">
          {rows.map((r, i) => (
            <div key={i} className="card-glass p-4">
              <div className="font-display font-bold text-sm mb-3">{r.label}</div>
              <div className="flex items-start gap-2 mb-2 text-sm">
                <Check size={16} className="text-primary shrink-0 mt-0.5" />
                <span><strong className="text-primary">KA8:</strong> {r.ka8}</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <X size={16} className="text-destructive/60 shrink-0 mt-0.5" />
                <span><strong>Outros:</strong> {r.other}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comparison;
