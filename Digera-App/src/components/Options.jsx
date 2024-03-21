import { useState } from "react";
import { DropDown } from "./DropDown";

export const Options = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <>
      <div className="flex items-center space-x-3 w-full md:w-auto">
        <div className="relative inline-block">
          <button
            id="dropdown-button"
            className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
            type="button"
            onClick={() => setDropdownVisible(!dropdownVisible)}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </button>
        </div>
      </div>
      {dropdownVisible && <DropDown />}
    </>
  );
};
