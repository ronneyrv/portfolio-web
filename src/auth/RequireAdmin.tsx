import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./useAuth";

export function RequireAdmin() {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (user?.role !== "ADMIN") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
