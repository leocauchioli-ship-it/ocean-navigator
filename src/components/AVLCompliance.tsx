import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ShieldCheck, MessageCircle, ExternalLink } from "lucide-react";
import avlDiagram from "@/assets/rastreador-satelite.png";

const MARINHA_NORMAM_204_URL =
  "https://assets.marinha.mil.br/dpc/sites/www.marinha.mil.br.dpc/files/Monitoramento_EMB_NAV_INT.pdf";

const AVLCompliance = () => {
  const ref = useScrollReveal();

  return (
    <section id="avl-marinha" className="section-padding section-light" ref={ref}>
      <div className="container-ka8">
        <div className="reveal grid md:grid-cols-2 gap-10 items-center">
          {/* Text left */}
          <div>
            <div className="badge-ka8 mb-6">
              <ShieldCheck size={14} />
              Homologados pela Marinha do Brasil
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-ka8-text-dark mb-4 leading-tight">
              AVL não é exclusividade,{" "}
              <span className="gradient-text">é um termo técnico.</span>
            </h2>

            <p className="text-ka8-text-muted text-base leading-relaxed mb-4">
              AVL (Automatic Vessel Location) é o termo usado para a transmissão automática de dados de localização para a Marinha — não é um aparelho, não é uma empresa, e não é exclusividade de nenhum fornecedor.
            </p>
            <p className="text-ka8-text-muted text-base leading-relaxed mb-4">
              A KA8 é homologada pela Marinha do Brasil e seu equipamento faz a transmissão AVL: o rastreador embarcado envia o sinal via satélite, que chega até a KA8 e é comunicado diretamente à Marinha.
            </p>
            <p className="text-ka8-text-muted text-base leading-relaxed mb-8">
              E a exigência não é só para embarcações de grande porte — vale também para veleiros e embarcações menores, inclusive em águas interiores (NORMAM-204).
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <a
                href="https://wa.me/5515991675910"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-white text-base inline-flex items-center gap-2 justify-center whitespace-nowrap"
              >
                <MessageCircle size={16} /> Falar no WhatsApp
              </a>
              <a
                href={MARINHA_NORMAM_204_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[15px] font-semibold text-primary hover:gap-3 transition-all justify-center whitespace-nowrap"
              >
                NORMAM-204 <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Illustration right */}
          <div>
            <img
              src={avlDiagram}
              alt="Diagrama do rastreador embarcado enviando sinal via satélite até a KA8, que comunica os dados à Marinha (AVL)"
              className="w-full h-auto rounded-2xl shadow-[0_24px_64px_rgba(7,57,104,0.15)]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AVLCompliance;
