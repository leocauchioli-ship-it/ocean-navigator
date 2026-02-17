import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { ChevronDown, Phone, Mail, MessageCircle } from "lucide-react";

const categories = [
  {
    title: "Serviço e Contratação",
    items: [
      { q: "Como funciona o serviço da KA8?", a: "A KA8 instala sensores e módulos de comunicação na sua embarcação. Os dados são transmitidos via satélite para a nossa plataforma, onde você acompanha tudo em tempo real — posição, combustível, vídeo e mais." },
      { q: "Qual o período dos planos?", a: "Trabalhamos com planos mensais e anuais, adaptados ao tamanho da sua frota e às suas necessidades operacionais. Entre em contato para uma proposta personalizada." },
      { q: "É possível contratar apenas parte dos serviços?", a: "Sim. A plataforma é modular — você pode começar com rastreamento e adicionar combustível, vídeo e alertas conforme sua necessidade." },
      { q: "Qual o custo do serviço?", a: "O custo depende do número de embarcações, dos módulos contratados e da frequência de atualização. Solicite uma demonstração e receba uma proposta personalizada." },
    ],
  },
  {
    title: "Equipamentos e Conectividade",
    items: [
      { q: "Os equipamentos são do cliente ou da KA8?", a: "Os equipamentos são fornecidos pela KA8 em regime de comodato durante a vigência do contrato." },
      { q: "Preciso de internet no local?", a: "Não. A transmissão é feita via satélite diretamente da embarcação. Você só precisa de internet para acessar a plataforma no seu computador ou celular." },
      { q: "Consigo acessar o sistema pelo celular?", a: "Sim. A plataforma é responsiva e pode ser acessada por qualquer navegador, em qualquer dispositivo." },
      { q: "A KA8 funciona em rios e ambientes fluviais?", a: "Sim. A cobertura satelital funciona em qualquer lugar — alto-mar, rios, canais e áreas remotas." },
      { q: "Por que o satélite é mais confiável que o GSM?", a: "O sinal GSM depende de torres terrestres e não alcança áreas remotas ou em alto-mar. O satélite cobre o planeta inteiro, sem falhas de cobertura." },
      { q: "A KA8 suporta quantas embarcações ao mesmo tempo?", a: "Não há limite. A plataforma escala conforme o tamanho da sua frota." },
    ],
  },
  {
    title: "Suporte e Prazos",
    items: [
      { q: "Vocês oferecem suporte em caso de falhas?", a: "Sim. O suporte é feito diretamente com a equipe técnica da KA8 — sem intermediários, sem ticket, sem espera." },
      { q: "Quais os prazos de entrega e instalação?", a: "O prazo varia conforme a localização e o tamanho da frota, mas trabalhamos com agilidade para minimizar o tempo de setup." },
      { q: "Os dados ficam armazenados? Posso acessar históricos?", a: "Sim. Todos os dados são armazenados na nuvem com histórico completo, acessível a qualquer momento." },
    ],
  },
];

const FAQ = () => {
  const ref = useScrollReveal();
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggle = (id: string) => setOpenItem(openItem === id ? null : id);

  return (
    <section id="faq" className="section-padding section-dark" ref={ref}>
      <div className="container-ka8">
        <div className="text-center mb-12 reveal">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">
            Perguntas frequentes
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {categories.map((cat, ci) => (
            <div key={ci} className="reveal" style={{ transitionDelay: `${ci * 0.1}s` }}>
              <h3 className="font-display font-bold text-lg text-primary mb-4">{cat.title}</h3>
              <div className="space-y-2">
                {cat.items.map((item, ii) => {
                  const id = `${ci}-${ii}`;
                  const isOpen = openItem === id;
                  return (
                    <div key={id} className="border border-border rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggle(id)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-secondary/20 transition-colors"
                      >
                        <span className="text-sm font-medium pr-4">{item.q}</span>
                        <ChevronDown
                          size={18}
                          className={`text-muted-foreground shrink-0 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className="overflow-hidden transition-all duration-300"
                        style={{ maxHeight: isOpen ? "200px" : "0" }}
                      >
                        <p className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact bar */}
        <div className="reveal mt-12 card-glass text-center max-w-2xl mx-auto">
          <p className="font-display font-bold mb-4">Não encontrou sua dúvida? Fale direto com a gente.</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="tel:+5515997987632" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone size={16} /> +55 15 99798-7632
            </a>
            <a href="mailto:contato@ka8.com.br" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail size={16} /> contato@ka8.com.br
            </a>
            <a
              href="https://wa.me/5515997987632"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ka8-primary text-sm py-2 px-4"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
