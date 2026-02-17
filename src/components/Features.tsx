import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Satellite, Fuel, Video, Map, Bell, BarChart3 } from "lucide-react";

const features = [
  { icon: Satellite, title: "Rastreamento Satelital Contínuo", desc: "Posição atualizada frequentemente, com histórico completo de rotas, sem dependência de sinal celular." },
  { icon: Fuel, title: "Monitoramento de Combustível", desc: "Controle preciso de múltiplos tanques em tempo real. O consumo deixa de ser estimativa." },
  { icon: Video, title: "Telemetria com Vídeo Integrado", desc: "Posição cruzada com imagem. Mais contexto, mais clareza, menos dúvida." },
  { icon: Map, title: "Mapas e Histórico de Rotas", desc: "Reconstrua qualquer viagem com dados de horário, velocidade, direção e eventos." },
  { icon: Bell, title: "Alertas Inteligentes", desc: "Notificações automáticas para desvios de rota, consumo fora do padrão, zonas de risco e inatividade." },
  { icon: BarChart3, title: "Painel Analítico", desc: "Dashboards configuráveis com indicadores operacionais, gráficos de performance e relatórios por viagem." },
];

const Features = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding section-dark" ref={ref}>
      <div className="container-ka8">
        <div className="text-center mb-12 reveal">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">
            Tudo que você precisa.{" "}
            <span className="gradient-text">Em um único painel.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="card-glass reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <f.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
