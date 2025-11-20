import { create } from "zustand";
import {
  getMyArticles,
  getArticle,
  createArticle,
  deleteArticle,
} from "../../services/articles";

export const useArticlesStore = create((set) => ({
  articles: [],
  article: {},
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
      set((state) => ({ ...state, error, isLoading: false }));
    }
  },

  async loadArticle(articleSlug) {
    set((state) => ({ ...state, isLoading: true }));

    const { data, error } = await getArticle(articleSlug);
    console.log({ data, error });

    if (!error) {
      set((state) => ({
        ...state,
        article: data.data,
        isLoading: false,
      }));
    } else {
      set((state) => ({ ...state, error, isLoading: false }));
    }
  },

  async createArticle(article) {
    set((state) => ({ ...state, isLoading: true }));

    const { data, error } = await createArticle(article);

    if (!error) {
      set((state) => ({
        ...state,
        articles: [...state.articles, data.data],
        isLoading: false,
      }));

      return { success: true };
    } else {
      set((state) => ({ ...state, error, isLoading: false }));
      return { success: false };
    }
  },

  async deleteArticle(articleId) {
    set((state) => ({ ...state, isLoading: true }));

    const { error } = await deleteArticle(articleId);

    if (!error) {

      set((state) => ({
        ...state,
        articles: state.articles.filter((article) => article._id !== articleId),
        isLoading: false,
      }));

      return { success: true };
    } else {
      set((state) => ({ ...state, error, isLoading: false }));
      return { success: false };
    }
  },
}));
