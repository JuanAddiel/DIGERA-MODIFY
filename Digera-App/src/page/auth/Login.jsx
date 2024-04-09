import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoImage from "/assets/logo-desktop.png";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation, useVerifyTokenMutation } from "../../slices/Auth/usersApiSlice";
import { setCredentials, setToken } from "../../slices/Auth/authSlice";
import { HiX } from "react-icons/hi";
import { Toast } from "flowbite-react";
import Cookies from "js-cookie";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, {isLoading}] = useLoginMutation();
  const [verifyToken, { loading }] = useVerifyTokenMutation();
  const {userInfo} = useSelector((state)=>state.auth);


  useEffect(()=>{
    if(userInfo){
      navigate('/dashboard');
    }
  },[navigate, userInfo]);


  const submitHandler=async(e)=>{
    e.preventDefault();
    try{
      const res = await login({username, password}).unwrap();
      dispatch(setToken({ ...res }));

      const token = Cookies.get("token");
      const resToken = await verifyToken({token});

      dispatch(setCredentials({...resToken}));
      
    }catch(error){
      setError(error?.data?.message);
    }
  }
  return (
    <>
      <section className="h-screen flex items-center justify-center image-opacity">
        <div className="max-w-lg md:max-w-sm md:w-11/12 p-16 bg-slate-200 shadow-lg rounded-lg md:py-28 animate__animated animate__fadeInDown">
          <div className="text-center mb-5">
            <img
              className="mx-auto mb-5"
              width="200"
              src={LogoImage}
              alt="Logo"
            />
          </div>

          <form method="post" onSubmit={submitHandler}>
            <div className="mb-4">
              <input
                type="text"
                className={`block w-full px-4 py-3 rounded-lg bg-white border-transparent focus:border-gray-500 focus:bg-white focus:ring-0`}
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className={`block w-full px-4 py-3 rounded-lg bg-white border-transparent focus:border-gray-500 focus:bg-white focus:ring-0`}
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
           
            <button
              className="bg-aquamarine-900 text-white px-4 py-3 rounded-lg w-full transition duration-300 ease-in-out hover:bg-green-600"
              type="submit"
            >
              Iniciar Seccion
            </button>
          </form>
        </div>
      </section>
      {error != null && (
        <div className="fixed top-0 right-0 z-50 p-4 animate__animated animate__fadeInRight ">
          <Toast>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
              <HiX className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">{error}</div>
            <Toast.Toggle />
          </Toast>
        </div>
      )}
    </>
  );
};

export default Login;
