import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../lib/store/auth";

export default function AdminGuard({ children }) {
  const { user, isAuthenticated, loading } = useAuthStore();

  if (loading) return <div>Loading...</div>;
  return isAuthenticated && user && user.role === "admin" ? (
    children
  ) : (
    <Navigate to="/error/403" replace />
  );
}
