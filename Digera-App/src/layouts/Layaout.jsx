import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutSessionMutation } from "../slices/Auth/usersApiSlice";
import { setLogout } from "../slices/Auth/authSlice";
import logo from "/assets/logo-desktop.png";
import { FaBook, FaBookOpenReader  } from "react-icons/fa6";

import { DarkThemeToggle, Flowbite, Sidebar } from "flowbite-react";
import {
  HiChartPie,
  HiClipboardList,
  HiOutlineMinusSm,
  HiOutlinePlusSm,
  HiReceiptTax,
  HiShoppingBag,
  HiUser,
} from "react-icons/hi";
import { twMerge } from "tailwind-merge";


const Layaout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const subMenuSisgepol = ["Inicio", "Poliza"];
  const { userInfo, createModal } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const [logoutSession, { loading }] = useLogoutSessionMutation();
  const navigate = useNavigate();


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  useEffect(() => {
    if (userInfo == null) {
      navigate("/");
    }
  }, [navigate,userInfo]);

  const handleClick = async () => {
    await logoutSession();
    dispatch(setLogout({}));
    navigate('/');
  };
  return (
    <>
      <Flowbite>
        <nav
          className={`fixed top-0 z-50 w-full bg-aquamarine-900   dark:bg-aquamarine-900 dark:border-gray-700 ${
            createModal && "opacity-60"
          }`}
        >
          <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start rtl:justify-end">
                <button
                  data-drawer-target="logo-sidebar"
                  data-drawer-toggle="logo-sidebar"
                  aria-controls="logo-sidebar"
                  type="button"
                  className="inline-flex items-center p-2 text-sm text-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-aquamarine-900 dark:focus:ring-gray-600"
                  onClick={toggleSidebar}
                >
                  <span className="sr-only">Open sidebar</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                  </svg>
                </button>
                <div className="ml-3">
                  {/* <img src={logo} className="h-9" alt="FlowBite Logo" /> */}
                </div>
              </div>

              <div className="relative flex items-center">
                <DarkThemeToggle className="text-white hover:bg-aquamarine-900 dark:hover:bg-aquamarine-900 dark:text-white border-solid" />
                <span className="p-2"></span>
                <button
                  type="button"
                  className="flex text-sm bg-white-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  aria-expanded={isOpen ? "true" : "false"}
                  onClick={toggleMenu}
                >
                  <svg
                    className="w-7 h-7 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    viewBox="0 0 26 26"
                  >
                    <path d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" />
                  </svg>
                </button>
                <div
                  className={`absolute top-full right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 ${
                    isOpen ? "block" : "hidden"
                  }`}
                  id="dropdown-user"
                >
                  <div className="px-4 py-3">
                    <p className="text-sm text-gray-900 dark:text-white font-bold">
                      {userInfo?.name}
                    </p>
                  </div>
                  <ul>
                    <li>
                      <button
                        onClick={() => handleClick()}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Sign out
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <aside
          id="logo-sidebar"
          className={`fixed  bg-gray-50  top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } dark:bg-gray-800 dark:border-gray-700`}
          aria-label="Sidebar"
        >
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className={createModal && "opacity-60"}
          >
            <Sidebar.Items>
              <Sidebar.ItemGroup>

                <Sidebar.Item as={Link} to="/dashboard" icon={HiChartPie}>
                  Dashboard
                </Sidebar.Item>
                <Sidebar.Collapse
                  icon={HiClipboardList}
                  label="SisPolizas"
                  renderChevronIcon={(theme, open) => {
                    const IconComponent = open
                      ? HiOutlineMinusSm
                      : HiOutlinePlusSm;

                    return (
                      <IconComponent
                        aria-hidden
                        className={twMerge(
                          theme.label.icon.open[open ? "on" : "off"]
                        )}
                      />
                    );
                  }}
                >
                  <Sidebar.Item href="#">Servicio al productos</Sidebar.Item>
                  <Sidebar.Item href="#">Actualizar Poliza</Sidebar.Item>
                  <Sidebar.Item href="#">Polizas</Sidebar.Item>
                  <Sidebar.Item href="#">Graficos</Sidebar.Item>
                  <Sidebar.Collapse
                    label="Reportes"
                    renderChevronIcon={(theme, open) => {
                      const IconComponent = open
                        ? HiOutlineMinusSm
                        : HiOutlinePlusSm;

                      return (
                        <IconComponent
                          aria-hidden
                          className={twMerge(
                            theme.label.icon.open[open ? "on" : "off"]
                          )}
                        />
                      );
                    }}
                  >
                    <Sidebar.Item href="#">Aporte Estatal</Sidebar.Item>
                    <Sidebar.Item href="#">Prima Factura</Sidebar.Item>
                    <Sidebar.Item href="#">Polizas emitidas</Sidebar.Item>
                    <Sidebar.Item href="#">Reporte General CSV</Sidebar.Item>
                    <Sidebar.Item href="#">Reporte Cesionario CSV</Sidebar.Item>
                  </Sidebar.Collapse>
                </Sidebar.Collapse>
                <Sidebar.Collapse
                  icon={HiReceiptTax}
                  label="SisgelPol"
                  renderChevronIcon={(theme, open) => {
                    const IconComponent = open
                      ? HiOutlineMinusSm
                      : HiOutlinePlusSm;

                    return (
                      <IconComponent
                        aria-hidden
                        className={twMerge(
                          theme.label.icon.open[open ? "on" : "off"]
                        )}
                      />
                    );
                  }}
                >
                  <Sidebar.Item as={Link} to="/poliza">
                    Poliza
                  </Sidebar.Item>
                  <Sidebar.Item as={Link} to="/rubro">
                    Rubros
                  </Sidebar.Item>
                </Sidebar.Collapse>
                <Sidebar.Collapse
                  icon={FaBookOpenReader}
                  label="ServiProduc"
                  renderChevronIcon={(theme, open) => {
                    const IconComponent = open
                      ? HiOutlineMinusSm
                      : HiOutlinePlusSm;

                    return (
                      <IconComponent
                        aria-hidden
                        className={twMerge(
                          theme.label.icon.open[open ? "on" : "off"]
                        )}
                      />
                    );
                  }}
                >
                  <Sidebar.Item as={Link} to="/poliza">
                    Poliza
                  </Sidebar.Item>
                </Sidebar.Collapse>

                <Sidebar.Collapse
                  icon={FaBook}
                  label="SisDoc"
                  renderChevronIcon={(theme, open) => {
                    const IconComponent = open
                      ? HiOutlineMinusSm
                      : HiOutlinePlusSm;

                    return (
                      <IconComponent
                        aria-hidden
                        className={twMerge(
                          theme.label.icon.open[open ? "on" : "off"]
                        )}
                      />
                    );
                  }}
                >
                  <Sidebar.Item as={Link} to="/poliza">
                    Poliza
                  </Sidebar.Item>
                </Sidebar.Collapse>
                <Sidebar.Item as={Link} to="/list-user" icon={HiUser}>
                  Usuarios
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </aside>
        <div
          className={`p-4 bg-slate-100 dark:bg-gray-900 min-h-screen ${
            isSidebarOpen ? "sm:ml-64" : ""
          }`}
        >
          <div className="p-4 border-gray-400 dark:bg-gray-900 rounded-lg mt-14">
            <Outlet />
          </div>
        </div>
      </Flowbite>
    </>
  );
};

export default Layaout;
