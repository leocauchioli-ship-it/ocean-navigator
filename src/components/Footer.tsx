import logoLight from "@/assets/logo-light.png";
import { Mail, Phone, MessageCircle } from "lucide-react";

const footerLinks = [
  { label: "Solução", href: "#solucao" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Casos de Uso", href: "#casos-de-uso" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const Footer = () => {
  return (
    <footer className="section-navy-deep border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
      <div className="container-ka8 px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <img src={logoLight} alt="KA8" className="h-12 mb-4" />
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
              Monitoramento satelital marítimo. Visibilidade total para quem opera no mar.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Cobertura Satelital Global", "Tecnologia Brasileira", "GPS + AIS + IoT"].map((b) => (
                <span key={b} className="badge-ka8 text-xs">{b}</span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>Navegação</h4>
            <div className="space-y-2">
              {footerLinks.map((l) => (
                <a key={l.href} href={l.href} className="block text-sm transition-colors hover:text-ka8-secondary" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>Contato</h4>
            <div className="space-y-3 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              <a href="mailto:contato@ka8.com.br" className="flex items-center gap-2 hover:text-ka8-secondary transition-colors">
                <Mail size={14} /> contato@ka8.com.br
              </a>
              <a href="tel:+5515997987632" className="flex items-center gap-2 hover:text-ka8-secondary transition-colors">
                <Phone size={14} /> Técnico: +55 (15) 99798-7632
              </a>
              <a href="tel:+5591999912844" className="flex items-center gap-2 hover:text-ka8-secondary transition-colors">
                <Phone size={14} /> Comercial: +55 (91) 9991-2844
              </a>
              <a href="https://wa.me/5585986989899" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-ka8-secondary transition-colors">
                <MessageCircle size={14} /> WhatsApp: +55 (85) 9869-9899
              </a>
              <p>São Paulo/SP • Belém/PA – Brasil</p>
              <p>Segunda a sexta, das 8h às 18h</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.4)" }}>
          <p>© 2025 KA8 Sistemas de Rastreamento. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-ka8-secondary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-ka8-secondary transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
