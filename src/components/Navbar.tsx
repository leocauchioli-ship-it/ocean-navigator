import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoNeg from "@/assets/logo-ka8-nav.png";
import logoPos from "@/assets/logo-ka8-pos.png";

const navLinks = [
  { label: "Solução", href: "#solucao" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Casos de Uso", href: "#casos-de-uso" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setPastHero(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${
        scrolled ? "shadow-[0_1px_12px_rgba(0,0,0,0.08)]" : ""
      }`}
      style={{
        background: scrolled ? "rgba(255,255,255,0.55)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderColor: scrolled ? "hsl(var(--ka8-navy-100))" : "transparent",
      }}
    >
      <div className="container-ka8 flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center">
          <img src={pastHero ? logoNeg : logoPos} alt="KA8" className="h-9 transition-all duration-500" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pastHero ? "text-ka8-text-body hover:text-primary" : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a href="#contato" className={`text-sm ${pastHero ? "btn-ghost" : "btn-ghost-white"}`}>
            Fale Conosco
          </a>
          <a href="#contato" className={`text-sm ${pastHero ? "btn-solid" : "btn-white"}`}>
            Solicitar Demo
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden ${pastHero ? "text-foreground" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t" style={{ background: "rgba(255,255,255,0.95)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", borderColor: "hsl(var(--ka8-navy-100))" }}>
          <div className="container-ka8 py-4 px-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ka8-text-body hover:text-primary py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contato" className="btn-ghost text-sm text-center" onClick={() => setMenuOpen(false)}>
              Fale Conosco
            </a>
            <a href="#contato" className="btn-solid text-sm text-center" onClick={() => setMenuOpen(false)}>
              Solicitar Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
