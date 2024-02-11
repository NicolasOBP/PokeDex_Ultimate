import { create } from "zustand";

type Actions = {
  setName: (name: string) => void;
};

type Consts = {
  name: string;
};

export const useStorage = create<Consts & Actions>((set) => ({
  name: "",
  setName: (name) => set({ name }),
}));
