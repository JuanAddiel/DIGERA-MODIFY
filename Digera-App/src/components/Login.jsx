import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { loginRequest, verityTokenRequest } from "../api/login/register";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import LogoImage from "/logo-desktop.png"; 

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const {
    signIn,
    errors: loginError,
    isAuthenticated,
    loading,
    setUser,
    setIsAuthenticated,
  } = useAuth();
  const navigate = useNavigate();
  const onSubmit = handleSubmit(async (values) => {
    try {
      await signIn(values);
    } catch (error) {
      // Manejar el error y establecer el mensaje de error en el estado
    }
  });
 useEffect(() => {
   if (isAuthenticated) {
     navigate("/menu");
   }
 }, [isAuthenticated]);


  return (
    <section className="h-screen flex items-center justify-center image-opacity">
      <div className="max-w-lg md:max-w-sm md:w-11/12 p-16 bg-white shadow-lg rounded-lg md:py-28 animate__animated animate__fadeInDown">
        <div className="text-center mb-5">
          <img
            className="mx-auto mb-5"
            width="200"
            src={LogoImage}
            alt="Logo"
          />
        </div>
        {loginError && (
          <div className="bg-red-500 p-2 text-white">{loginError}</div>
        )}
        <form method="post" onSubmit={onSubmit}>
          <div className="mb-4">
            <input
              type="text"
              className={`block w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0`}
              placeholder="Username"
              {...register("username", { required: true })}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className={`block w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0`}
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </div>
          <div className="mb-4 flex items-center">
            <input
              className="form-checkbox h-5 w-5 text-indigo-600"
              type="checkbox"
              value="remember-me"
              id="flexCheckDefault"
            />
            <label
              className="ml-2 text-sm text-gray-700"
              htmlFor="flexCheckDefault"
            >
              Remember me
            </label>
          </div>
          <button
            className="bg-green-500 text-white px-4 py-3 rounded-lg w-full transition duration-300 ease-in-out hover:bg-green-600"
            type="submit"
            disabled={loading} // Deshabilita el botón durante la carga
          >
            {loading ? "Loading..." : "Sign in"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
