import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <section className="bg-white dark:bg-gray-900 flex justify-center items-center h-screen">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-aquamarine-700 dark:text-aquamarine-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Página no encontrada
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Lo siento, la página que estás buscando no fue encontrada. Puedes
            encontrar mucho más para explorar en la página de inicio.
          </p>
          <button className="inline-flex text-white bg-aquamarine-700 hover:bg-aquamarine-800 focus:ring-4 focus:outline-none focus:ring-aquamarine-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-aquamarine-900 my-4">
            <Link to={"/dashboard"}>Volver a la página de inicio</Link>
          </button>
        </div>
      </div>
    </section>
  );
};
