import { MapPin } from "lucide-react";
import { useLang } from "@/context/LangContext";

export default function Location() {
  const { t } = useLang();
  return (
    <section id="location" className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-10">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="font-display text-brand text-xs tracking-[0.3em] uppercase mb-3">
            {t.locationEyebrow}
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-5xl uppercase tracking-tight mb-5">
            {t.locationTitle}
          </h2>
          <div className="flex items-center gap-3 text-muted-foreground">
            <MapPin className="text-brand shrink-0" size={20} />
            <span>{t.locationAddr}</span>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden border border-line shadow-card h-72 md:h-80">
          <img
            src="/images/facility.jpg"
            alt={t.locationTitle}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="mt-6 rounded-xl overflow-hidden border border-line shadow-card h-64 md:h-72">
        <iframe
          title="KAG location map"
          className="w-full h-full grayscale contrast-125 opacity-80"
          loading="lazy"
          src="https://www.google.com/maps?q=Mbret%C3%ABresha+Teut%C3%AB,+Pej%C3%AB,+Kosovo&output=embed"
        />
      </div>
    </section>
  );
}
