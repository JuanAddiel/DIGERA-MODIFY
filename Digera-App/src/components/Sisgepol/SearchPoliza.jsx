import { Button, Dropdown } from "flowbite-react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export const SearchPoliza = ({
  dropdownOpen,
  setDropdownOpen,
  selectedOption,
  searchQuery,
  handleSearch,
  handleOptionSelect,
  cesionarios,
  handleOptionCesionario,
  componentRef,
}) => {
  const handlePrimt = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
  });
  return (
    <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4 ">
      <div className="w-full md:w-1/2">
        <form
          className="flex items-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder={`Buscar por ${selectedOption}`}
              value={searchQuery}
              onChange={handleSearch}
              required=""
            />
          </div>
        </form>
      </div>

      <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0 ">
        <Dropdown
          className="border border-solid border-opacity-75 border-gray-300"
          label="Clientes"
          color="green"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <Dropdown.Item onClick={() => handleOptionSelect("cliente")}>
            Nombre
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleOptionSelect("cedula")}>
            Cedula
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleOptionSelect("poliza")}>
            Poliza
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleOptionSelect("sucursal")}>
            Sucursal
          </Dropdown.Item>
        </Dropdown>
        <Dropdown
          className="border border-solid border-opacity-75 border-gray-300 overflow-y-auto max-h-60"
          label="Cesionarios"
          color="green"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {Array.isArray(cesionarios) &&
            cesionarios.map((c) => (
              <Dropdown.Item
                key={c.Id}
                onClick={() => handleOptionCesionario(c.Cesionario)}
              >
                {c.Cesionario}
              </Dropdown.Item>
            ))}
        </Dropdown>
        <Button type="submit" color="green" onClick={handlePrimt}>
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M8 3a2 2 0 0 0-2 2v3h12V5a2 2 0 0 0-2-2H8Zm-3 7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1v-4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4h1a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H5Zm4 11a1 1 0 0 1-1-1v-4h8v4a1 1 0 0 1-1 1H9Z" />
          </svg>
        </Button>
      </div>
    </div>
  );
};