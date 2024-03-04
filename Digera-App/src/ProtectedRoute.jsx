import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";

const ProtectedRoute = ({ allowedRole }) => {
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  const isAuthorized = user?.role === allowedRole

  return isAuthorized ? (
    <Outlet />
  ) : (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
