import { create } from "zustand";
import { persist } from "zustand/middleware";

export type User = {
  id: string;
  fullName: string;
  email: string;
  isActive: boolean;
  role: string;
  userName: string;
  avatar: string;
};

type AuthState = {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      logout: () => set({ user: null }),
    }),
    {
      name: "auth-storage", // storage key
    }
  )
);
