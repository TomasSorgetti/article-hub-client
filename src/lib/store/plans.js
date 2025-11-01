import { create } from "zustand";
import { GetAllPlans } from "../../services/plans";

export const usePlanStore = create((set) => ({
  plans: [],
  loading: false,
  error: null,

  fetchPlans: async () => {
    set((state) => ({ ...state, isLoading: true }));

    const { data, error } = await GetAllPlans();

    if (!error) {
      set((state) => ({
        ...state,
        plans: data.data,
        isLoading: false,
      }));
    } else {
      // todo => error
      set((state) => ({
        ...state,
        isLoading: false,
        error: error.message || error,
      }));
    }
  },
}));
