import { create } from "zustand";
import {
  getAllWorkbenches,
  createWorkbench,
  deleteWorkbench,
} from "../../services/workbench";

export const useWorkbenchStore = create((set) => ({
  workbenches: [],
  loading: false,
  error: null,

  loadWorkbenches: async () => {
    set((state) => ({ ...state, isLoading: true }));

    const { data, error } = await getAllWorkbenches();

    if (!error) {
      set((state) => ({
        ...state,
        workbenches: data.data,
        isLoading: false,
      }));
    } else {
      set((state) => ({ ...state, isLoading: false }));
    }
  },

  createWorkbench: async ({ name, description, colaborators }) => {
    set((state) => ({ ...state, isLoading: true }));

    const { data, error } = await createWorkbench({
      name,
      description,
      colaborators,
    });

    if (!error) {
      set((state) => ({
        ...state,
        workbenches: [...state.workbenches, data.data],
        isLoading: false,
      }));
    } else {
      set((state) => ({ ...state, isLoading: false }));
    }
  },

  deleteWorkbench: async (workbenchId) => {
    set((state) => ({ ...state, isLoading: true }));

    const { error } = await deleteWorkbench(workbenchId);

    if (!error) {
      set((state) => ({
        ...state,
        workbenches: state.workbenches.filter(
          (workbench) => workbench.id !== workbenchId
        ),
        isLoading: false,
      }));
    } else {
      set((state) => ({ ...state, isLoading: false }));
    }
  },
}));
