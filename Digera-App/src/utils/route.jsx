import {
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "../page/auth/Login";
import { App } from "../App";
import { Dashboard } from "../page/dashboard/Dashboard";
import { ListUser } from "../page/auth/ListUser";
import { Poliza } from "../page/SisGepol/Poliza";
import { NotFound } from "../page/pageErrors/NotFound";
import { Rubros } from "../page/SisGepol/Rubros";
import { ProtectedRoute } from "./ProtectedRoute";
import { NotAuthorized } from "../page/pageErrors/NotAuthorized";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index={true} path="/" element={<Login />} />
        <Route path="/unauthorized" element={<NotAuthorized />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/list-user" element={<ListUser />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/poliza" element={<Poliza />} />
        <Route path="/rubro" element={<Rubros />} />
      </Route>
    </Routes>
  );
};
