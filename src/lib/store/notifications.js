import { create } from "zustand";
import {
  GetMyNotifications,
  DeleteNotification,
  MarkAllNotificationsAsRead,
} from "../../services/notifications";

export const useNotificationStore = create((set) => ({
  items: [],
  total: 0,
  loading: false,
  error: null,

  fetchNotifications: async () => {
    set((state) => ({ ...state, loading: true }));
    const { data, error } = await GetMyNotifications();

    if (!error) {
      set((state) => ({
        ...state,
        items: data.data.items,
        total: data.data.total,
        loading: false,
      }));
    } else {
      set((state) => ({ ...state, loading: false }));
    }
  },

  addNotification: (notification) => {
    set((state) => ({
      items: [notification, ...state.items],
      total: state.total + 1,
    }));
  },

  removeNotification: async (id) => {
    set((state) => ({ ...state, loading: true }));

    const { error } = await DeleteNotification(id);

    if (!error) {
      set((state) => ({
        ...state,
        items: state.items.filter((item) => item._id !== id),
        total: state.total > 0 ? state.total - 1 : 0,
        loading: false,
      }));
    } else {
      set((state) => ({
        ...state,
        loading: false,
        error: error.message || error,
      }));
    }
  },

  markAllAsRead: async () => {
    set((state) => ({ ...state, loading: true }));
    const { error } = await MarkAllNotificationsAsRead();

    if (!error) {
      set((state) => ({
        ...state,
        items: state.items.map((item) => ({ ...item, read: true })),
        total: 0,
        loading: false,
      }));
    } else {
      set((state) => ({
        ...state,
        loading: false,
        error: error.message || error,
      }));
    }
  },
}));
