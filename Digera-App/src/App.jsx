import {Outlet } from "react-router-dom";
const ROLES = {
  ADMIN: 1,
  BASIC: 3,
};


export const App = () => {
  return (
    <>
        <Outlet />

    </>
  );
};
