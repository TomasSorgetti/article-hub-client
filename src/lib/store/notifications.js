import { create } from "zustand";
import { GetMyNotifications } from "../../services/notifications";

export const useNotificationsStore = create((set) => ({
  items: [],
  total: 0,
  loading: false,
  error: null,

  fetchNotifications: async () => {
    set((state) => ({ ...state, isLoading: true }));
    const { data, error } = await GetMyNotifications();

    if (!error) {
      set((state) => ({
        ...state,
        items: data.data.items,
        total: data.data.total,
        isLoading: false,
      }));
    } else {
      set((state) => ({ ...state, isLoading: false }));
    }
  },

  addNotification: (notification) => {
    set((state) => ({
      items: [notification, ...state.items],
      total: state.total + 1,
    }));
  },
}));
