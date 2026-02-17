import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoPos from "@/assets/logo-marca-pos.png";

const navLinks = [
  { label: "Solução", href: "#solucao" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Casos de Uso", href: "#casos-de-uso" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background border-b transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_12px_rgba(0,0,0,0.08)]" : ""
      }`}
      style={{ borderColor: "hsl(var(--ka8-navy-100))" }}
    >
      <div className="container-ka8 flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center">
          <img src={logoPos} alt="KA8" className="h-9" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ka8-text-body hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="#contato" className="btn-ghost text-sm">
            Fale Conosco
          </a>
          <a href="#contato" className="btn-solid text-sm">
            Solicitar Demo
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t" style={{ borderColor: "hsl(var(--ka8-navy-100))" }}>
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
