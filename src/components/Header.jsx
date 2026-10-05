import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useLang } from "@/context/LangContext";
import { Button } from "@/components/ui/button";

export default function Header() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t.navAbout },
    { href: "#status", label: t.navProducts },
    { href: "#location", label: t.navLocation },
    { href: "#contact", label: t.navContact },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b border-line transition-colors ${
        scrolled ? "bg-ink/95 shadow-lg" : "bg-ink/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center">
          <img src="/brand/logo.png" alt="KAG" className="h-8 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground font-medium uppercase tracking-wide">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link hover:text-cream transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setLang(lang === "sq" ? "en" : "sq")}
            className="text-xs font-display uppercase tracking-widest text-muted-foreground hover:text-brand transition-colors border border-line rounded px-2.5 py-1.5"
          >
            {lang === "sq" ? "EN" : "SQ"}
          </button>
          <Button asChild>
            <a href="#contact">{t.navContact}</a>
          </Button>
        </div>

        <button
          className="md:hidden text-cream"
          aria-label="menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-line bg-ink px-6 py-5 flex flex-col gap-4 text-muted-foreground font-medium uppercase tracking-wide">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="hover:text-cream">
              {l.label}
            </a>
          ))}
          <button
            onClick={() => setLang(lang === "sq" ? "en" : "sq")}
            className="text-left text-brand"
          >
            {lang === "sq" ? "Switch to English" : "Kalo në Shqip"}
          </button>
          <Link to="/admin" className="text-xs text-muted-foreground/60 mt-2">
            {t.adminLogin}
          </Link>
        </div>
      )}
    </header>
  );
}
