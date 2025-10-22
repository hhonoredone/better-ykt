import { create } from "zustand";

export type ServiceIds = "doska" | "afisha" | "rabota" | "eda" | "domiki" | "novostroyki";

interface State {
  activeId: ServiceIds;
  setActiveId: (activeId: ServiceIds) => void;
}

export const useServiceStore = create<State>()((set) => ({
  activeId: "doska",
  setActiveId: (activeId) => set({ activeId }),
}));
