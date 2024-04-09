import { useDispatch, useSelector } from "react-redux";
import { setCreateModal, setRegister } from "../../slices/Auth/authSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSignUpMutation } from "../../slices/Auth/usersApiSlice";
import { useNavigate } from "react-router-dom";
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const userRegex = /^[a-zA-Z\s]*$/;

export const CreateUser = () => {
  const [signUp, { isLoading }] = useSignUpMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { createModal } = useSelector((state) => state.auth);
  const [notEqual, setNotEqual] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    lastname: "",
    username: "",
    confirmpassword: "",
    rolId: 0,
  });

  const [formDataValid, setFormDataValid] = useState({
    name: false,
    password: false,
    lastname: false,
    confirmpassword: false,
  });

  const validateInput = (name, value, regex) => {
    const isValid = regex.test(value);
    setFormDataValid((prevState) => ({
      ...prevState,
      [name]: isValid,
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "name" || name === "lastname") {
      validateInput(name, value, userRegex);
    }
    if (name === "password") {
      validateInput(name, value, passwordRegex);
      setNotEqual(false);
    }
    if (name === "confirmpassword") {
      validateInput(name, value, passwordRegex);
      if (value === formData.password) {
        setNotEqual(false);
      } else {
        setNotEqual(true);
      }
    }
  };
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/role/getAll"
        );
        setRoles(response.data.roles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching roles:", error);
        setLoading(false);
      }
    };

    fetchRoles();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(formDataValid).every((value) => value) && !notEqual) {
      const result = await signUp(formData).unwrap();
      if (result.status === 200) {
        setFormData({
          name: "",
          password: "",
          lastname: "",
          username: "",
          confirmpassword: "",
          rolId: 0,
        });
        dispatch(setRegister(true));
        dispatch(setCreateModal(false));
      }else{
        alert("Por favor, completa todos los campos correctamente.");

      }
    } 
  };

  return (
    <>
      <div
        id="defaultModal"
        className={`${
          createModal ? "fixed" : "hidden"
        } overflow-y-auto overflow-x-hidden inset-0 z-50 flex justify-center items-center`}
        aria-hidden={!createModal}
      >
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
          <div className="relative p-4 bg-slate-200 rounded-lg shadow dark:bg-slate-600 sm:p-5">
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Crear nuevo usuario
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
                onClick={() => dispatch(setCreateModal(!createModal))}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form method="POST" onSubmit={handleSubmit}>
              <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className={`block mb-2 text-sm font-medium ${
                      !formDataValid.name && formData.name !== ""
                        ? "text-red-600 dark:text-red-500"
                        : "text-gray-900 dark:text-white"
                    }  `}
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Nombre"
                    required=""
                    onChange={handleInputChange}
                  />
                  {!formDataValid.name && formData.name !== "" && (
                    <p
                      id="filled_error_help"
                      className="mt-2 text-xs text-red-600 dark:text-red-500"
                    >
                      <span className="font-medium">Deberia tener</span> una
                      letra mayuscula, y un numero
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="lastname"
                    className={`block mb-2 text-sm font-medium ${
                      !formDataValid.lastname && formData.lastname !== ""
                        ? "text-red-600 dark:text-red-500"
                        : "text-gray-900 dark:text-white"
                    }  `}
                  >
                    Apellido
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Apellido"
                    required=""
                    onChange={handleInputChange}
                  />
                  {!formDataValid.lastname && formData.lastname !== "" && (
                    <p
                      id="filled_error_help"
                      className="mt-2 text-xs text-red-600 dark:text-red-500"
                    >
                      <span className="font-medium">Deberia tener</span> una
                      letra mayuscula, y un numero
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Usuario
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Usuario"
                    onChange={handleInputChange}
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="rolId"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Role
                  </label>
                  <select
                    id="rolId"
                    name="rolId"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    onChange={handleInputChange}
                  >
                    <option>Selecciona el rol</option>
                    {loading ? (
                      <option disabled>Loading roles...</option>
                    ) : (
                      roles?.map((role) => (
                        <option key={role.Id} value={role.Id}>
                          {role.Name}
                        </option>
                      ))
                    )}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className={`block mb-2 text-sm font-medium ${
                      !formDataValid.password && formData.password !== ""
                        ? "text-red-600 dark:text-red-500"
                        : "text-gray-900 dark:text-white"
                    }  `}
                  >
                    Contraseña
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                    placeholder="Contraseña"
                    required=""
                    onChange={handleInputChange}
                  />
                  {!formDataValid.password && formData.password !== "" && (
                    <p
                      id="filled_error_help"
                      className="mt-2 text-xs text-red-600 dark:text-red-500"
                    >
                      <span className="font-medium">Deberia tener</span> una
                      letra mayuscula, y un numero
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="confirmpassword"
                    className={`block mb-2 text-sm font-medium ${
                      !formDataValid.confirmpassword &&
                      formData.confirmpassword !== ""
                        ? "text-red-600 dark:text-red-500"
                        : "text-gray-900 dark:text-white"
                    }  `}
                  >
                    Confirmar Contraseña
                  </label>
                  <input
                    type="password"
                    name="confirmpassword"
                    id="confirmpassword"
                    className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                    placeholder="Contraseña"
                    required=""
                    onChange={handleInputChange}
                  />
                  {!formDataValid.confirmpassword &&
                    formData.confirmpassword !== "" && (
                      <p
                        id="filled_error_help"
                        className="mt-2 text-xs text-red-600 dark:text-red-500"
                      >
                        <span className="font-medium">Deberia tener</span> una
                        letra mayuscula, y un numero
                      </p>
                    )}
                  {notEqual &&
                    formData.password !== "" &&
                    formDataValid.confirmpassword && (
                      <p
                        id="filled_error_help"
                        className="mt-2 text-xs text-red-600 dark:text-red-500"
                      >
                        <span className="font-medium"></span> Contraseña no
                        coinciden
                      </p>
                    )}
                </div>
              </div>
              <button
                type="submit"
                className="text-white inline-flex items-center bg-aquamarine-800 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                <svg
                  className="mr-1 -ml-1 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"></path>
                </svg>
                Añadir
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
