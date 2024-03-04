import { Route, Routes, Navigate } from "react-router-dom";
import { Login } from "./components/Login";
import Layaout from "./layouts/Layaout";
import { Register } from "./page/auth/Register";
import ProtectedRoute from "./ProtectedRoute";
import { RequireAuth } from "./components/RequireAuth";

const ROLES = {
  ADMIN: 2,
  BASIC: 3,
};


export const App = () => {
  return (
    <Routes>
      {/* Página de autenticación */}
      <Route element={<ProtectedRoute allowedRole={ROLES.BASIC}/>}>
      <Route path="/menu" element={<Layaout />} />

      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* Página para usuarios no autorizados */}
      <Route path="/unauthorized" element={<>Nothing</>} />
    </Routes>
  );
};
