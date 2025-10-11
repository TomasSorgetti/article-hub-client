import { create } from "zustand";
import { getMyCategories } from "../../services/categories";

export const useCategoriesStore = create((set) => ({
  categories: [],
  loading: false,
  error: null,

  async loadMyCategories() {
    set((state) => ({ ...state, isLoading: true }));

    const { data, error } = await getMyCategories();
    if (!error) {
      set((state) => ({
        ...state,
        categories: data.data,
        isLoading: false,
      }));
    } else {
      set((state) => ({ ...state, isLoading: false }));
    }
  },
}));
