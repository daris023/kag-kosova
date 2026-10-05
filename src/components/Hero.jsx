import { useLang } from "@/context/LangContext";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const { t } = useLang();
  return (
    <section
      id="top"
      className="relative pt-40 pb-28 md:pt-52 md:pb-36 overflow-hidden dot-grid-bg diag-lines bg-ink"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/70 to-ink pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="stagger">
          <p
            style={{ animationDelay: ".05s" }}
            className="font-display text-brand text-xs md:text-sm tracking-[0.3em] uppercase mb-6"
          >
            {t.heroEyebrow}
          </p>
          <h1
            style={{ animationDelay: ".15s" }}
            className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight max-w-3xl uppercase"
          >
            {t.heroTitle}
          </h1>
          <p
            style={{ animationDelay: ".3s" }}
            className="mt-7 max-w-xl text-white/65 text-base md:text-lg leading-relaxed"
          >
            {t.heroSubtitle}
          </p>
          <div style={{ animationDelay: ".45s" }} className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <a href="#contact">{t.heroCta1}</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#about">{t.heroCta2}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
