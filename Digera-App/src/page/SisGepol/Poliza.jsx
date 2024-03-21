import { Checkbox, Pagination, Select, Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { Options } from "../../components/Options";
import { Actions } from "../../components/Actions";
import { useGetAllQuery } from "../../slices/Poliza/polizaApiSlice";
import fetchPolizas from "../../slices/Poliza/fetchPoliza";

export const Poliza = () => {
  const [isActive, setActive] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const {
    data: polizas,
    isLoading,
    isError,
    error,
  } = fetchPolizas(page, limit);

  const handlePage = (newPage) => {
    setPage(newPage);
  };
  
  const handleLimit = (limit) => {
    setLimit(limit);
    setPage(1);
  };

  useEffect(() => {
    if (!isLoading && !isError) {
      console.log(polizas);
    }
  }, [polizas, isLoading, isError]);
  return (
    <section className="border-green-700 dark:bg-gray-900 p-3 sm:p-5">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="w-full md:w-1/2">
              <form className="flex items-center">
                <label for="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewbox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Search"
                    required=""
                  />
                </div>
              </form>
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <button
                type="button"
                className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                <svg
                  className="h-3.5 w-3.5 mr-2"
                  fill="currentColor"
                  viewbox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  />
                </svg>
                Add product
              </button>
              <Actions />
            </div>
          </div>
          <div className="overflow-x-auto">
            <Table hoverable>
              <Table.Head>
                <Table.HeadCell className="p-4">
                  <Checkbox />
                </Table.HeadCell>
                <Table.HeadCell>Productor</Table.HeadCell>
                <Table.HeadCell>Poliza</Table.HeadCell>
                <Table.HeadCell>Rubros</Table.HeadCell>
                <Table.HeadCell>Area</Table.HeadCell>
                <Table.HeadCell>CedulaRnc</Table.HeadCell>
                <Table.HeadCell>Prestamos</Table.HeadCell>
                <Table.HeadCell>Fecha Emision</Table.HeadCell>
                <Table.HeadCell>Total Prima</Table.HeadCell>
                <Table.HeadCell>Pago Producto</Table.HeadCell>
                <Table.HeadCell>Pago Gobierno</Table.HeadCell>
                <Table.HeadCell>Valor Asegurado</Table.HeadCell>
                <Table.HeadCell>
                  <span className="sr-only">Edit</span>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {polizas &&
                  polizas.rubros.map((rubro, index) => (
                    <Table.Row
                      key={index}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <Table.Cell className="p-4">
                        <Checkbox />
                      </Table.Cell>
                      <Table.Cell>{rubro.Productor}</Table.Cell>
                      <Table.Cell>{rubro.Poliza}</Table.Cell>
                      <Table.Cell>{rubro.Rubros}</Table.Cell>
                      <Table.Cell>{rubro.Area}</Table.Cell>
                      <Table.Cell>{rubro.CedulaRnc}</Table.Cell>
                      <Table.Cell>{rubro.Prestamos}</Table.Cell>
                      <Table.Cell>{rubro.Fecha_Emision}</Table.Cell>
                      <Table.Cell>{rubro.Total_Prima}</Table.Cell>
                      <Table.Cell>{rubro.PagoProducto}</Table.Cell>
                      <Table.Cell>{rubro.PagoGobierno}</Table.Cell>
                      <Table.Cell>{rubro.ValorAsegurado}</Table.Cell>
                      <Table.Cell>
                        <a
                          href="#"
                          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                          Edit
                        </a>
                      </Table.Cell>
                    </Table.Row>
                  ))}
              </Table.Body>
            </Table>
          </div>
          <nav
            class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
            aria-label="Table navigation"
          >
            <span className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
              Registros por página
              <select
                id="countries"
                className="ml-2 w-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => handleLimit(parseInt(e.target.value))}
                value={limit}
              >
                <option value="5" selected>
                  5
                </option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
              </select>
              <span className="ml-2 font-semibold text-gray-900 dark:text-white">
                {`${polizas?.page}-${polizas?.totalPages} `}
              </span>
              of
              <span className="ml-1 font-semibold text-gray-900 dark:text-white">
                {`${polizas?.total}`}
              </span>
            </span>

            <ul className="inline-flex items-stretch -space-x-px">
              <li>
                <button
                  className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-r-sm border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  onClick={() => handlePage(page - 1)}
                  disabled={page === 1}
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewbox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </li>
              {Array.from(
                { length: Math.min(polizas?.totalPages, 3) },
                (_, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                      onClick={() => handlePage(index + 1)}
                    >
                      {index + 1}
                    </a>
                  </li>
                )
              )}
              <li>
                <button className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
                  ...
                </button>
              </li>
              <li>
                <button className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                onClick={()=>setPage(polizas?.totalPages)}>
                  {polizas?.totalPages}
                </button>
              </li>
              <li>
                <button
                  className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-l-sm border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  onClick={() => handlePage(page + 1)}
                  disabled={page === polizas?.totalPages}
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewbox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};
