import { create } from "zustand";
import { GoogleSignInUser, SignInUser, SignOutUser } from "../../services/auth";

export const useAuthStore = create((set) => ({
  user: null,
  isAdmin: false,
  isAuthenticated: !!localStorage.getItem("isAuthenticated"),
  loading: false,
  error: null,

  setUser: (user) => set({ user }),

  login: async (credentials) => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await SignInUser(credentials);

      if (error) {
        set({
          user: null,
          error,
          isAdmin: false,
          isAuthenticated: false,
          loading: false,
        });
        return { success: false, error };
      }

      if (!data?.success) {
        const msg = data?.message || "Login failed";
        set({
          user: null,
          isAdmin: false,
          error: msg,
          isAuthenticated: false,
          loading: false,
        });
        return { success: false, error: msg };
      }

      localStorage.setItem("isAuthenticated", "true");

      set({
        user: data.data.user,
        isAdmin: data.data.user.role === "admin",
        isAuthenticated: true,
        error: null,
        loading: false,
      });

      return { success: true, user: data.data };
    } catch (err) {
      set({
        user: null,
        error: err?.message || err,
        isAuthenticated: false,
        loading: false,
      });
      return { success: false, error: err?.message || err };
    }
  },

  logout: async () => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await SignOutUser();
      if (error || !data?.success) {
        set({ loading: false, error: error || data?.message });
        return { success: false, error: error || data?.message };
      }

      localStorage.removeItem("isAuthenticated");

      set({
        user: null,
        isAdmin: false,
        isAuthenticated: false,
        loading: false,
        error: null,
      });
      return { success: true };
    } catch (err) {
      set({ loading: false, error: err?.message || err });
      return { success: false, error: err?.message || err };
    }
  },

  // todo => if user add google account method to login, and add google avatar (if doesnt allready have one), must update global state
  googleLogin: async ({ idToken, rememberme }) => {
    try {
      set({ loading: true, error: null });
      const { data, error } = await GoogleSignInUser({ idToken, rememberme });

      console.log("Data: ", data);
      console.log("Error: ", error);

      if (error) {
        set({
          user: null,
          error,
          isAdmin: false,
          isAuthenticated: false,
          loading: false,
        });
        return { success: false, error };
      }

      if (!data?.success) {
        const msg = data?.message || "Login failed";
        set({
          user: null,
          isAdmin: false,
          error: msg,
          isAuthenticated: false,
          loading: false,
        });
        return { success: false, error: msg };
      }

      localStorage.setItem("isAuthenticated", "true");

      set({
        user: data.data.user,
        isAdmin: data.data.user.role === "admin",
        isAuthenticated: true,
        error: null,
        loading: false,
      });

      return { success: true, user: data.data };
    } catch (err) {
      set({
        user: null,
        error: err?.message || err,
        isAuthenticated: false,
        loading: false,
      });
      return { success: false, error: err?.message || err };
    }
  },
}));
