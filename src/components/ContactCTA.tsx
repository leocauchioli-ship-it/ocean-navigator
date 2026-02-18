import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MessageCircle } from "lucide-react";

const ContactCTA = () => {
  const ref = useScrollReveal();

  return (
    <section id="contato" className="section-padding text-center" ref={ref} style={{
      background: "linear-gradient(135deg, #0BA4AE 0%, #11CBB0 50%, #073968 100%)",
    }}>
      <div className="container-ka8 relative z-10">
        <div className="reveal max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-[44px] font-extrabold text-white leading-tight mb-4">
            Transforme a forma como você gerencia sua operação marítima.
          </h2>
          <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.82)" }}>
            Fale com um especialista e veja como a KA8 pode reduzir custos e trazer clareza à sua frota.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:contato@ka8.com.br" className="btn-white text-base">
              Solicitar Demonstração
            </a>
            <a
              href="https://wa.me/5515991675910"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-white text-base"
            >
              <MessageCircle size={18} /> Fale via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
