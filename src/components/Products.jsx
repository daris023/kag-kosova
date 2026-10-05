import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useLang } from "@/context/LangContext";
import { db } from "@/lib/firebase";

export default function Products() {
  const { t, lang } = useLang();
  const [override, setOverride] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const snap = await getDoc(doc(db, "content", "products"));
        if (snap.exists()) setOverride(snap.data());
      } catch {
        // Firebase not configured yet - fall back to default text
      }
    })();
  }, []);

  const desc1 =
    (lang === "sq" ? override?.product1Desc_sq : override?.product1Desc_en) || t.product1Desc;
  const desc2 =
    (lang === "sq" ? override?.product2Desc_sq : override?.product2Desc_en) || t.product2Desc;

  return (
    <section id="products" className="py-24 md:py-32 border-y border-line bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-14 max-w-2xl">
          <p className="font-display text-brand text-xs tracking-[0.3em] uppercase mb-3">
            {t.productsEyebrow}
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-5xl uppercase tracking-tight mb-5">
            {t.productsTitle}
          </h2>
          <p className="text-muted-foreground leading-relaxed">{t.productsIntro}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card-hover rounded-xl border border-line bg-ink overflow-hidden shadow-card">
            <img
              src="/images/product-line.jpg"
              alt={t.product1Name}
              className="w-full h-56 md:h-64 object-cover"
            />
            <div className="p-7">
              <h3 className="font-display text-xl font-semibold uppercase tracking-tight mb-2 text-brand">
                {t.product1Name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc1}</p>
            </div>
          </div>

          <div className="card-hover rounded-xl border border-line bg-ink overflow-hidden shadow-card">
            <img
              src="/images/ammo-digital.jpg"
              alt={t.product2Name}
              className="w-full h-56 md:h-64 object-cover"
            />
            <div className="p-7">
              <h3 className="font-display text-xl font-semibold uppercase tracking-tight mb-2 text-brand">
                {t.product2Name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
