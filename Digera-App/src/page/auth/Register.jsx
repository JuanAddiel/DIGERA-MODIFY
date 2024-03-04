import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom"


export const Register = () => {
  const navigation = useNavigate();

  const { register, handleSubmit,  } = useForm();
  const {signUp,isAuthenticated, errors} = useAuth();
  
    // useEffect(()=>{
    //     if(isAuthenticated)navigation("/")
    // },[isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => { 
    signUp(values);
  });
  return (
    <section className="h-screen flex items-center justify-center image-opacity">
      <div className="max-w-lg md:max-w-sm md:w-11/12 p-16 bg-white shadow-lg rounded-lg md:py-12 animate__animated animate__fadeInDown">
        <div className="text-center mb-5">
          <img
            className="mx-auto mb-5"
            width="200"
            src="/logo-desktop.png"
            alt="Logo"
          />
        </div>
        {
            errors != null ?
          <div className="bg-red-500 p-2 text-white" >
            {errors}
          </div> : ""}
        <form method="post" onSubmit={onSubmit}>
          <div className="mb-4">
            <input
              type="text"
              className={`block w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0`}
              placeholder="Name"
              {...register("name", { required: true })}
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              className={`block w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-`}
              placeholder="Lastname"
              {...register("lastname", { required: true })}
            />
          </div>
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

          <div className="mb-4">
            <input
              type="hidden"
              value={3}
              className={`block w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0`}
              placeholder="Role"
              {...register("rolId")}
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
          >
            Sign in
          </button>
        </form>
      </div>
    </section>
  );
};
