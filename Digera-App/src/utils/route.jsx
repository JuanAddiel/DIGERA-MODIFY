import {
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layaout from "../layouts/Layaout";
import Login from "../page/auth/Login";
import { Register } from "../page/auth/Register";
import { App } from "../App";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>

      <Route path="/menu" element={<Layaout />} />

      <Route index={true} path="/" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/unauthorized" element={<>Nothing</>} />
    </Route>
  )
);
