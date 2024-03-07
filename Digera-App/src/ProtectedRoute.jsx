import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";
import { ToastContainer } from "react-toastify";

const ProtectedRoute = ({ allowedRole }) => {
  const user = JSON.parse(localStorage.getItem("user"));

 const location = useLocation();
 const { isAuthenticated } = useAuth();

 if (!isAuthenticated) return <Navigate to="/login" replace />;

   const isAuthorized = allowedRole.includes(user?.role);

  return(
      
      <Outlet />
       );
};

export default ProtectedRoute;
