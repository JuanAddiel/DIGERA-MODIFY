import { Dropdown } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { setCreateModal } from "../../slices/Auth/authSlice";

export const HeaderTable = ({
  dropdownOpen,
  setDropdownOpen,
  selectedOption,
  searchQuery,
  handleSearch,
  handleOptionSelect,
}) => {
  const dispatch = useDispatch();
  const { createModal } = useSelector((state) => state.auth);

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
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                />
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
          label="Filtro"
          color="green"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <Dropdown.Item onClick={() => handleOptionSelect("nombre")}>
            Nombre
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleOptionSelect("usuario")}>
            Usuario
          </Dropdown.Item>
        </Dropdown>
        <div className="inline-flex items-center">
          <button
            className="p-2 bg-aquamarine-700 rounded-full hover:bg-aquamarine-500 focus:outline-none focus:ring-2 focus:bg-aquamarine-900 focus:ring-opacity-50"
            onClick={() => dispatch(setCreateModal(!createModal))}
          >
            <svg
              className="w-6 h-6 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14m-7 7V5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};