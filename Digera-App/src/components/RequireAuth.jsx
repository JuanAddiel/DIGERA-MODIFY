import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export const RequireAuth = ({ allowedRole }) => {
  const { user } = useAuth();
  const location = useLocation();
  console.log(user)
  return user?.role?.some((role) => allowedRole?.includes(role)) ? (
    <Outlet />
  ) : user?.id ? (
    <Navigate to="/menu" state={{ from: location }} replace />
  ) : (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  );
};
