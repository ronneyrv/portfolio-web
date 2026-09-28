import { useEffect, useMemo, useState, type ReactNode } from "react";
import { me } from "../services/auth";
import { AuthContext } from "./AuthContext";

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem("token"),
  );

  const [user, setUser] = useState<Awaited<ReturnType<typeof me>> | null>(null);

  useEffect(() => {
    if (!token) {
      return;
    }

    me()
      .then(setUser)
      .catch(() => {
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
      });
  }, [token]);

  function login(newToken: string) {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  }

  function logout() {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  }

  const value = useMemo(
    () => ({
      token,
      user,
      isAuthenticated: token !== null && user !== null,
      login,
      logout,
    }),
    [token, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
