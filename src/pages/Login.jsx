import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

export default function Login() {
  const { loginWithGoogle, loginWithEmail } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleGoogle() {
    setError("");
    setLoading(true);
    try {
      await loginWithGoogle();
      navigate("/admin");
    } catch (err) {
      setError("Kycja me Google deshtoi. Provo perseri.");
    } finally {
      setLoading(false);
    }
  }

  async function handleEmailLogin(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await loginWithEmail(email, password);
      navigate("/admin");
    } catch (err) {
      setError("Email ose fjalekalim i gabuar.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-ink flex items-center justify-center px-6 dot-grid-bg">
      <Card className="w-full max-w-md p-8 md:p-10">
        <div className="flex flex-col items-center mb-8">
          <img src="/brand/logo.png" alt="KAG" className="h-9 mb-6" />
          <h1 className="font-display text-xl font-semibold uppercase tracking-wide">
            Paneli i Adminit
          </h1>
        </div>

        <Button
          type="button"
          variant="outline"
          size="lg"
          className="w-full mb-4 normal-case"
          onClick={handleGoogle}
          disabled={loading}
        >
          Vazhdo me Google
        </Button>

        <div className="flex items-center gap-3 my-6">
          <div className="h-px bg-line flex-1" />
          <span className="text-xs text-muted-foreground uppercase tracking-wide">ose</span>
          <div className="h-px bg-line flex-1" />
        </div>

        <form onSubmit={handleEmailLogin} className="space-y-5">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@kag-ks.com"
              required
            />
          </div>
          <div>
            <Label htmlFor="password">Fjalekalimi</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <Button type="submit" size="lg" className="w-full normal-case" disabled={loading}>
            {loading ? "Duke u kycur..." : "Kyçu"}
          </Button>
        </form>
      </Card>
    </div>
  );
}
