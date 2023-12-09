import { create } from "zustand";

export type PageId = "home" | "skills" | "projects" | "references" | "contact";

interface PageSelectStore {
  selectedPage: PageId | null;
  selectPage: (type: PageId) => void;
}

export const usePageSelect = create<PageSelectStore>((set) => ({
  selectedPage: null,
  selectPage: (type) => set({ selectedPage: type }),
}));
