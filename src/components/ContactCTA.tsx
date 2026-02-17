import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";

const subjects = ["Demonstração", "Orçamento", "Suporte", "Outro"];

const ContactCTA = () => {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", assunto: "Demonstração", mensagem: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send to API
    setSubmitted(true);
  };

  return (
    <section id="contato" className="section-padding section-mid" ref={ref}>
      <div className="container-ka8">
        <div className="text-center mb-12 reveal">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">
            Entre em contato com a{" "}
            <span className="gradient-text">equipe KA8</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nossos consultores estão prontos para entender as necessidades do seu negócio e apresentar a solução ideal.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left — info */}
          <div className="reveal space-y-6">
            <div className="card-glass">
              <h3 className="font-display font-bold text-lg mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                <a href="tel:+5515997987632" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone size={18} className="text-primary" />
                  <div>
                    <div className="text-foreground font-medium">Contato técnico</div>
                    +55 (15) 99798-7632
                  </div>
                </a>
                <a href="tel:+5591999912844" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone size={18} className="text-primary" />
                  <div>
                    <div className="text-foreground font-medium">Contato comercial</div>
                    +55 (91) 9991-2844
                  </div>
                </a>
                <a href="mailto:contato@ka8.com.br" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={18} className="text-primary" />
                  contato@ka8.com.br
                </a>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin size={18} className="text-primary" />
                  São Paulo/SP • Belém/PA – Brasil
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Clock size={18} className="text-primary" />
                  Segunda a sexta, das 8h às 18h (Brasília)
                </div>
              </div>

              <a
                href="https://wa.me/5515997987632"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ka8-primary mt-6 w-full justify-center"
              >
                <MessageCircle size={18} /> Fale via WhatsApp
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal" style={{ transitionDelay: "0.15s" }}>
            <div className="card-glass">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Send size={28} className="text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-2">Mensagem enviada!</h3>
                  <p className="text-muted-foreground text-sm">Retornaremos em breve. Obrigado pelo interesse.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Nome completo</label>
                    <input
                      type="text"
                      required
                      value={form.nome}
                      onChange={(e) => setForm({ ...form, nome: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block">E-mail</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Telefone</label>
                      <input
                        type="tel"
                        value={form.telefone}
                        onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Assunto</label>
                    <select
                      value={form.assunto}
                      onChange={(e) => setForm({ ...form, assunto: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      {subjects.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Mensagem</label>
                    <textarea
                      rows={4}
                      required
                      value={form.mensagem}
                      onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-ka8-primary w-full justify-center">
                    <Send size={18} /> Enviar Mensagem
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
