import { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const DOC_REF = () => doc(db, "content", "status");

export default function Admin() {
  const { user, logout } = useAuth();
  const [form, setForm] = useState({
    statusTitle_sq: "",
    statusBody_sq: "",
    statusTitle_en: "",
    statusBody_en: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    (async () => {
      const snap = await getDoc(DOC_REF());
      if (snap.exists()) {
        setForm((f) => ({ ...f, ...snap.data() }));
      }
      setLoading(false);
    })();
  }, []);

  async function handleSave(e) {
    e.preventDefault();
    setSaving(true);
    setSaved(false);
    await setDoc(DOC_REF(), form, { merge: true });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  return (
    <div className="min-h-screen bg-ink dot-grid-bg">
      <header className="border-b border-line bg-surface">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/brand/logo.png" alt="KAG" className="h-7" />
            <span className="font-display uppercase tracking-wide text-sm text-muted-foreground">
              Paneli i Adminit
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground hidden sm:inline">{user?.email}</span>
            <Button variant="outline" size="sm" onClick={logout} className="normal-case">
              Dil
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10 md:py-14">
        <Card className="p-7 md:p-10">
          <h2 className="font-display text-lg font-semibold uppercase tracking-wide mb-2">
            Mesazhi i Statusit (seksioni publik)
          </h2>
          <p className="text-muted-foreground text-sm mb-8">
            Ky tekst shfaqet te seksioni "Status aktual" në faqen kryesore. Ndryshoje kur
            prodhimi të fillojë ose situata të ndryshojë.
          </p>

          {loading ? (
            <p className="text-muted-foreground">Duke ngarkuar...</p>
          ) : (
            <form onSubmit={handleSave} className="space-y-10">
              <div>
                <h3 className="text-brand font-display text-sm uppercase tracking-widest mb-4">
                  Shqip
                </h3>
                <div className="space-y-5">
                  <div>
                    <Label>Titulli</Label>
                    <Input
                      value={form.statusTitle_sq}
                      onChange={(e) => update("statusTitle_sq", e.target.value)}
                      placeholder="p.sh. Prodhimi ka filluar"
                    />
                  </div>
                  <div>
                    <Label>Përshkrimi</Label>
                    <textarea
                      className="flex w-full rounded-md border border-line bg-[#0B1017] px-4 py-3 text-sm text-cream placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/20"
                      rows={4}
                      value={form.statusBody_sq}
                      onChange={(e) => update("statusBody_sq", e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-brand font-display text-sm uppercase tracking-widest mb-4">
                  English
                </h3>
                <div className="space-y-5">
                  <div>
                    <Label>Title</Label>
                    <Input
                      value={form.statusTitle_en}
                      onChange={(e) => update("statusTitle_en", e.target.value)}
                      placeholder="e.g. Production has begun"
                    />
                  </div>
                  <div>
                    <Label>Description</Label>
                    <textarea
                      className="flex w-full rounded-md border border-line bg-[#0B1017] px-4 py-3 text-sm text-cream placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/20"
                      rows={4}
                      value={form.statusBody_en}
                      onChange={(e) => update("statusBody_en", e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button type="submit" disabled={saving} className="normal-case">
                  {saving ? "Duke ruajtur..." : "Ruaj Ndryshimet"}
                </Button>
                {saved && <span className="text-brand text-sm">U ruajt me sukses ✓</span>}
              </div>
            </form>
          )}
        </Card>
      </main>
    </div>
  );
}
