import { Link } from "react-router-dom";
import { useLang } from "@/context/LangContext";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <img src="/brand/logo.png" alt="KAG" className="h-6 w-auto" />
        <p className="text-muted-foreground text-xs">© 2026 Kosova Arsenal Group. {t.footerRights}</p>
        <Link to="/admin" className="text-muted-foreground/50 text-xs hover:text-brand transition-colors">
          {t.adminLogin}
        </Link>
      </div>
    </footer>
  );
}
