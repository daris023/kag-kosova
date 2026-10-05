import { Shield, Target, Cog } from "lucide-react";
import { useLang } from "@/context/LangContext";

export default function About() {
  const { t, lang } = useLang();
  const points = [
    { icon: Shield, label: lang === "en" ? "MIL-SPEC Standards" : "Standarde MIL-SPEC" },
    { icon: Target, label: lang === "en" ? "Precision Manufacturing" : "Prodhim Precizioni" },
    { icon: Cog, label: lang === "en" ? "American Equipment Partnership" : "Partneritet Pajisjesh Amerikane" },
  ];
  return (
    <section id="about" className="py-24 md:py-32 border-y border-line bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <p className="font-display text-brand text-xs tracking-[0.3em] uppercase mb-3">
            {t.aboutEyebrow}
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-5xl uppercase tracking-tight mb-5">
            {t.aboutTitle}
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-lg">{t.aboutBody}</p>
        </div>
        <div className="grid gap-4">
          {points.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="card-hover flex items-center gap-4 rounded-lg border border-line bg-ink px-6 py-5"
            >
              <Icon className="text-brand shrink-0" size={22} />
              <span className="font-display uppercase tracking-wide text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
