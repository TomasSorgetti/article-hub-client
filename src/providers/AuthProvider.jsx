import { useEffect } from "react";
import { useAuthStore } from "../lib/store/auth";
import { getProfile } from "../services/auth";
import { useNavigate } from "react-router-dom";

export default function AuthProvider({ children }) {
  const navigate = useNavigate();
  const { user, loading, setUser, logout, isAuthenticated } = useAuthStore();

  useEffect(() => {
    const loadProfile = async () => {
      if (!user && isAuthenticated && !loading) {
        try {
          const { data, error } = await getProfile();

          if (error || !data?.success) {
            throw new Error(error?.message || error);
          } else {
            setUser(data.data);
          }
        } catch (err) {
          console.log(err);

          const logoutResponse = await logout();

          if (logoutResponse.success) {
            navigate("/auth/login");
          } else {
            navigate("/500");
          }
        }
      }
    };

    loadProfile();
  }, [isAuthenticated, user, logout, setUser, navigate]);

  return children;
}
