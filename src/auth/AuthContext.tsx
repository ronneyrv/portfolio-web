import { createContext } from "react";
import type { UserResponse } from "../services/auth";

export interface AuthContextValue {
  token: string | null;
  user: UserResponse | null;
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined,
);
