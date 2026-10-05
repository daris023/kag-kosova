import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, isAdmin, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-ink flex items-center justify-center text-muted-foreground">
        Duke ngarkuar...
      </div>
    );
  }

  if (!user) return <Navigate to="/admin/login" replace />;

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-ink flex items-center justify-center px-6 text-center">
        <div>
          <p className="text-cream font-display text-lg mb-2">Qasje e refuzuar</p>
          <p className="text-muted-foreground text-sm">
            Llogaria {user.email} nuk ka leje admini per kete panel.
          </p>
        </div>
      </div>
    );
  }

  return children;
}
