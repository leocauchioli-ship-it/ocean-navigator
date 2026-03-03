import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { ChevronDown, Phone, Mail, MessageCircle } from "lucide-react";
import faqContratos from "@/assets/faq-contratos.png";
import faqDevices from "@/assets/faq-devices.png";
import faqSuporte from "@/assets/faq-suporte.png";

const categories = [
  {
    title: "Serviço e Contratação",
    icon: faqContratos,
    items: [
      { q: "Como funciona o serviço da KA8?", a: "A KA8 instala sensores e módulos de comunicação na sua embarcação. Os dados são transmitidos via satélite para a nossa plataforma, onde você acompanha tudo em tempo real: posição, telemetria, vídeo e mais." },
      { q: "É possível contratar apenas parte dos serviços?", a: "Sim. A plataforma é modular. Você pode começar com rastreamento e adicionar telemetria, vídeo e alertas conforme sua necessidade." },
      { q: "Qual o custo do serviço?", a: "O custo depende do número de embarcações, dos módulos contratados e da frequência de atualização. Solicite uma demonstração e receba uma proposta personalizada." },
    ],
  },
  {
    title: "Equipamentos e Conectividade",
    icon: faqDevices,
    items: [
      { q: "Preciso de internet para o rastreamento?", a: "Não. A KA8 utiliza comunicação via satélite, que não depende de internet local ou sinal de celular. O sistema funciona de forma autônoma em qualquer área, mesmo completamente remota." },
      { q: "Consigo acessar o sistema pelo celular?", a: "Sim. A plataforma é responsiva e pode ser acessada por qualquer navegador, em qualquer dispositivo." },
      { q: "A KA8 funciona em rios e ambientes fluviais?", a: "Sim! Atendemos mar e rio. A cobertura satelital funciona em qualquer lugar: hidrovias, alto-mar e áreas remotas. A mesma tecnologia e plataforma para operações marítimas e fluviais." },
      { q: "Por que o satélite é mais confiável que o GSM?", a: 'Embora o sinal GSM seja comum em áreas urbanas, ele é limitado e instável no ambiente aquático. Mesmo próximo à costa ou em rios, existem inúmeras "zonas de sombra" onde o sinal de celular desaparece devido ao relevo, vegetação ou distância das torres. Depender apenas do GSM significa aceitar que seu ativo ficará "invisível" em diversos momentos da rota. Diferente do celular, o satélite não depende de infraestrutura terrestre. Ele garante continuidade total dos dados, mesmo em áreas remotas, alto-mar ou hidrovias distantes.' },
      { q: "A KA8 possui limitações para o tamanho da frota ou complexidade da operação?", a: "Não. A KA8 foi projetada para ser totalmente escalável, suportando desde uma única embarcação até frotas com centenas de ativos. A plataforma cresce junto com sua operação, sem limitações de tamanho ou complexidade." },
    ],
  },
  {
    title: "Suporte e Prazos",
    icon: faqSuporte,
    items: [
      { q: "Vocês oferecem suporte em caso de falhas?", a: "Sim. O suporte é feito diretamente com a equipe técnica da KA8, sem intermediários, sem ticket, sem espera." },
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
    <section id="faq" className="section-padding section-white" ref={ref}>
      <div className="container-ka8">
        <div className="text-center mb-12 reveal">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4 text-ka8-text-dark">
            Perguntas frequentes
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {categories.map((cat, ci) => (
            <div key={ci} className="reveal" style={{ transitionDelay: `${ci * 0.1}s` }}>
              <div className="flex items-center gap-3 mb-4">
                <img src={cat.icon} alt={cat.title} className="w-12 h-12 object-contain rounded-full p-1" style={{ background: "rgba(11,164,174,0.08)" }} />
                <h3 className="font-display font-bold text-lg text-primary">{cat.title}</h3>
              </div>
              <div className="space-y-2">
                {cat.items.map((item, ii) => {
                  const id = `${ci}-${ii}`;
                  const isOpen = openItem === id;
                  return (
                    <div key={id} className="border border-ka8-navy-100 rounded-xl overflow-hidden bg-background">
                      <button
                        onClick={() => toggle(id)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-ka8-bg-light transition-colors"
                      >
                        <span className="text-sm font-medium pr-4 text-ka8-text-dark">{item.q}</span>
                        <ChevronDown
                          size={18}
                          className={`text-ka8-text-muted shrink-0 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className="overflow-hidden transition-all duration-300"
                        style={{ maxHeight: isOpen ? "500px" : "0" }}
                      >
                        <p className="px-4 pb-4 text-sm text-ka8-text-muted leading-relaxed">
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
        <div className="reveal mt-12 card-ka8 text-center max-w-2xl mx-auto">
          <p className="font-display font-bold mb-4 text-ka8-text-dark">Não encontrou sua dúvida? Fale direto com a gente.</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
             <a href="tel:+5515997987632" className="flex items-center gap-2 text-ka8-text-muted hover:text-primary transition-colors">
               <Phone size={16} /> +55 (15) 99798-7632
            </a>
            <a href="mailto:contato@ka8.com.br" className="flex items-center gap-2 text-ka8-text-muted hover:text-primary transition-colors">
              <Mail size={16} /> contato@ka8.com.br
            </a>
            <a
              href="https://wa.me/5515997987632"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-solid text-sm py-2 px-4"
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
