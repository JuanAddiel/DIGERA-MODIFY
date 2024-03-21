import {Outlet } from "react-router-dom";
import Layaout from "./layouts/Layaout";
import { useSelector } from "react-redux";
const ROLES = {
  ADMIN: 1,
  BASIC: 3,
};


export const App = () => {
    const { userInfo } = useSelector((state) => state.auth);

  return (
    <>
        {userInfo === null ?<Outlet/>: <Layaout/>}
       

    </>
  );
};
