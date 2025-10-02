import { create } from "zustand";
import { getMyArticles } from "../../services/articles";

export const useArticlesStore = create((set) => ({
  articles: [],
  loading: false,
  error: null,

  async loadMyArticles() {
    set((state) => ({ ...state, isLoading: true }));

    const { data, error } = await getMyArticles();
    if (!error) {
      set((state) => ({
        ...state,
        articles: data.data.items,
        isLoading: false,
      }));
    } else {
      set((state) => ({ ...state, isLoading: false }));
    }
  },
}));
