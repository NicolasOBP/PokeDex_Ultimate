import { create } from "zustand";

export type ToastConfig = {
  type: "Success" | "Error" | "Warning";
  message: string;
  show: boolean;
  duration?: number;
};

export type UseToastActions = {
  config: ToastConfig;
  showToast: ({ message, type }: Omit<ToastConfig, "show">) => void;
  hideToast: () => void;
};

export const useToast = create<UseToastActions>((set) => ({
  config: { type: "Success", message: "", show: false, duration: 0 },

  showToast: ({ message, type, duration }) =>
    set({ config: { message, type, show: true, duration } }),

  hideToast: () =>
    set({ config: { message: "", type: "Success", show: false, duration: 0 } }),
}));
