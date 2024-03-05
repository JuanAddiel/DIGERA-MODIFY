import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";

const ProtectedRoute = ({ allowedRole }) => {
  const user = JSON.parse(localStorage.getItem("user"));

 const location = useLocation();
 const { isAuthenticated } = useAuth();

 if (!isAuthenticated) return <Navigate to="/login" replace />;

   const isAuthorized = allowedRole.includes(user?.role);

  return isAuthorized ? (
    <Outlet />
  ) : (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
