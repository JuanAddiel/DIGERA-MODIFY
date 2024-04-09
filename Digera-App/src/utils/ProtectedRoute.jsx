import { Navigate, Outlet } from "react-router-dom";
import Layaout from "../layouts/Layaout";

export const ProtectedRoute = ({ children }) => {
  let userInfoString = localStorage.getItem("userInfo");
  let userInfo = JSON.parse(userInfoString);
  if (!userInfo) {
    return <Navigate to={"/unauthorized"} />;
  }
  return <Layaout />;
};


