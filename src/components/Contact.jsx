import { Button } from "@/components/ui/button";
import { useLang } from "@/context/LangContext";
import { getContactEmailProps } from "@/lib/mail";

export default function Contact() {
  const { t } = useLang();
  const mailProps = getContactEmailProps("Kerkese nga faqja e KAG");

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 border-t border-line bg-surface overflow-hidden dot-grid-bg"
    >
      <div className="relative max-w-3xl mx-auto px-6 md:px-10 text-center">
        <p className="font-display text-brand text-xs tracking-[0.3em] uppercase mb-4">
          {t.contactEyebrow}
        </p>
        <h2 className="font-display font-semibold text-3xl md:text-5xl uppercase tracking-tight mb-5">
          {t.contactTitle}
        </h2>
        <p className="text-muted-foreground mb-10">{t.contactBody}</p>
        <Button asChild size="lg">
          <a {...mailProps}>{t.contactBtn}</a>
        </Button>
      </div>
    </section>
  );
}
