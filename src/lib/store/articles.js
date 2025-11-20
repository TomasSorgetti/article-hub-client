import { create } from "zustand";
import {
  getMyArticles,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle,
} from "../../services/articles";

export const useArticlesStore = create((set) => ({
  articles: [],
  article: {},
  loading: false,
  error: null,

  async loadMyArticles(workbenchId) {
    set((state) => ({ ...state, loading: true }));

    const { data, error } = await getMyArticles(workbenchId);

    if (!error) {
      set((state) => ({
        ...state,
        articles: data.data.items,
        loading: false,
      }));
    } else {
      set((state) => ({ ...state, error, loading: false }));
    }
  },

  async loadArticle(articleSlug) {
    set((state) => ({ ...state, loading: true }));

    const { data, error } = await getArticle(articleSlug);

    if (!error) {
      set((state) => ({
        ...state,
        article: data.data,
        loading: false,
      }));
    } else {
      set((state) => ({ ...state, error, loading: false }));
    }
  },

  async createArticle(article) {
    set((state) => ({ ...state, loading: true }));

    const { data, error } = await createArticle(article);

    if (!error) {
      set((state) => ({
        ...state,
        articles: [...state.articles, data.data],
        loading: false,
      }));

      return { success: true };
    } else {
      set((state) => ({ ...state, error, loading: false }));
      return { success: false };
    }
  },

  async updateArticle(articleSlug, article) {
    set((state) => ({ ...state, loading: true }));

    const { data, error } = await updateArticle(articleSlug, article);

    if (!error) {
      set((state) => ({
        ...state,
        articles: state.articles.map((article) =>
          article._id === data.data._id ? data.data : article
        ),
        loading: false,
      }));

      return { success: true };
    } else {
      set((state) => ({ ...state, error, loading: false }));
      return { success: false };
    }
  },

  async deleteArticle(articleId) {
    set((state) => ({ ...state, loading: true }));

    const { error } = await deleteArticle(articleId);

    if (!error) {
      set((state) => ({
        ...state,
        articles: state.articles.filter((article) => article._id !== articleId),
        loading: false,
      }));

      return { success: true };
    } else {
      set((state) => ({ ...state, error, loading: false }));
      return { success: false };
    }
  },

  clearArticles: () =>
    set((state) => ({
      ...state,
      articles: [],
    })),
}));
