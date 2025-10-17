import { create } from "zustand";
import { getMyArticles } from "../../services/articles";

export const useArticlesStore = create((set) => ({
  articles: [],
  loading: false,
  error: null,

  async loadMyArticles(workbenchId) {
    set((state) => ({ ...state, isLoading: true }));

    const { data, error } = await getMyArticles(workbenchId);
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
