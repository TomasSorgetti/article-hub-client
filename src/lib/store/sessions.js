import { create } from "zustand";
import { getMySessions } from "../../services/sessions";

export const useSessionStore = create((set) => ({
  sessions: [],
  loading: false,
  error: null,

  async loadMySessions() {
    set((state) => ({ ...state, isLoading: true }));

    const { data, error } = await getMySessions();

    if (!error) {
      set((state) => ({
        ...state,
        sessions: data.data,
        isLoading: false,
      }));
    } else {
      set((state) => ({ ...state, isLoading: false }));
    }
  },
}));
