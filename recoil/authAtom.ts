import { atom } from "recoil";

export interface User {
  id: string;
  name: string;
  email: string;
  role?: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

export const authState = atom<AuthState>({
  key: "authState",
  default: {
    isAuthenticated: false,
    user: null,
  },
});
