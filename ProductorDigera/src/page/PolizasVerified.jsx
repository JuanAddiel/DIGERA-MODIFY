import axios from "axios";
import logoImage from "../assets/logo-desktop.png";
import { useState } from "react";
import { TableFound } from "../components/TableFound";
import { Button } from "flowbite-react";
export const PolizasVerified = () => {
  const [cedula, setCedula] = useState();
  const [poliza, setPoliza] = useState(null);
  const handleCedula = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:3000/api/poliza/getByCedula?cedula=${cedula}`
      );
      setPoliza(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleReset=()=>{
    setPoliza(null);
    setCedula();
  }
  return (
    <>
      {poliza !== null ? (
        <section className="h-screen flex flex-col items-center justify-center  image-opacity">
          <div className="bg-slate-200 rounded-lg shadow p-2 sm:p-4 md:p-6 xl:p-8 2xl:p-10  w-4/5	 ">
            <TableFound poliza={poliza} />
            <div className="mt-4 flex justify-center">
              <Button color={"green"} onClick={() => handleReset()}>
                Regresar
              </Button>
            </div>
          </div>
        </section>
      ) : (
        <section className="h-screen flex items-center justify-center image-opacity">
          <div className="max-w-lg md:max-w-sm md:w-11/12 p-16 bg-slate-200 shadow-lg rounded-lg md:py-28 animate__animated animate__fadeInDown">
            <div className="text-center mb-5">
              <img
                className="mx-auto mb-5"
                width="200"
                src={logoImage}
                alt="Logo"
              />
            </div>

            <form onSubmit={handleCedula}>
              <div className="mb-4">
                <input
                  type="text"
                  className={`block w-full px-4 py-3 rounded-lg bg-white border-transparent focus:border-gray-500 focus:bg-white focus:ring-0`}
                  placeholder="Cedula"
                  value={cedula}
                  onChange={(e) => setCedula(e.target.value)}
                />
              </div>
              <button
                className="bg-aquamarine-900 text-white px-4 py-3 rounded-lg w-full transition duration-300 ease-in-out hover:bg-green-600"
                type="submit"
              >
                Verificar
              </button>
            </form>
          </div>
        </section>
      )}
    </>
  );
};
