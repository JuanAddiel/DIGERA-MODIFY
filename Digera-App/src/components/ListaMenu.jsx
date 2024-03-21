import { useState } from "react";
import { Link } from "react-router-dom";

export const ListaMenu = ({ name, subMenuArry }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <li aria-labelledby="dropdownNavbarLink">
      <button
        id="doubleDropdownButton"
        onClick={toggleDropdown}
        type="button"
        className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 17a2 2 0 0 1 2 2h-4a2 2 0 0 1 2-2Z"
          />
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13.815 9H16.5a2 2 0 1 0-1.03-3.707A1.87 1.87 0 0 0 15.5 5 1.992 1.992 0 0 0 12 3.69 1.992 1.992 0 0 0 8.5 5c.002.098.012.196.03.293A2 2 0 1 0 7.5 9h3.388m2.927-.985v3.604M10.228 9v2.574M15 16h.01M9 16h.01m11.962-4.426a1.805 1.805 0 0 1-1.74 1.326 1.893 1.893 0 0 1-1.811-1.326 1.9 1.9 0 0 1-3.621 0 1.8 1.8 0 0 1-1.749 1.326 1.98 1.98 0 0 1-1.87-1.326A1.763 1.763 0 0 1 8.46 12.9a2.035 2.035 0 0 1-1.905-1.326A1.9 1.9 0 0 1 4.74 12.9 1.805 1.805 0 0 1 3 11.574V12a9 9 0 0 0 18 0l-.028-.426Z"
          />
        </svg>
        <span className="ml-2">{name}</span>
        <svg
          className={`w-2.5 h-2.5 ${isDropdownOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {isDropdownOpen && (
        <div
          id="doubleDropdown"
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="doubleDropdownButton"
          >
            {subMenuArry.map((name, key) => (
              <li key={key}>
                <Link
                  to={`/${name}`}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                    {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};
