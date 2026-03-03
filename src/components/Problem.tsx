import { useScrollReveal } from "@/hooks/useScrollReveal";
import { AlertCircle, HardDrive, ShieldQuestion } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "Você fica sabendo depois",
    desc: "Informação que chega no relatório final, quando já não dá para mudar nada.",
  },
  {
    icon: HardDrive,
    title: "Dados que ficam a bordo",
    desc: "Câmeras e registros que só podem ser acessados quando o barco volta.",
  },
  {
    icon: ShieldQuestion,
    title: "Relatos que nem sempre são verificáveis",
    desc: "Você depende exclusivamente do relato de quem está a bordo. E não tem como confirmar.",
  },
];

const Problem = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding section-white" ref={ref}>
      <div className="container-ka8">
        <div className="text-center mb-12 reveal">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4 text-ka8-text-dark">
            A realidade de quem opera no ambiente aquático
          </h2>
          <p className="text-ka8-text-muted max-w-2xl mx-auto text-lg">
            Cada viagem movimenta milhares em combustível. Cada rota envolve risco. Cada decisão acontece longe do seu campo de visão.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {problems.map((p, i) => (
            <div key={i} className="card-ka8 reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="card-icon">
                <p.icon size={20} />
              </div>
              <h3 className="font-body font-bold text-base mb-2 text-ka8-text-dark">{p.title}</h3>
              <p className="text-ka8-text-muted text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="reveal text-center">
          <blockquote className="text-xl md:text-2xl font-display font-bold italic text-ka8-navy max-w-2xl mx-auto">
            "O prejuízo maior não é o que aparece.<br />
            É o que pode estar acontecendo sem você ver."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Problem;
