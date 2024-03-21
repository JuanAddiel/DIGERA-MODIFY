import { useState } from "react";

export const Actions = () => {
  const [actionsDropdownVisible, setActionsDropdownVisible] = useState(false);

  return (
    <div className="flex items-center space-x-3 w-full md:w-auto">
      <div className="relative inline-block">
        <button
          id="actionsDropdownButton"
          className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          type="button"
          onClick={() => setActionsDropdownVisible(!actionsDropdownVisible)}
        >
          <svg
className={`-ml-1 mr-1.5 w-5 h-5 transition-transform ${
            actionsDropdownVisible ? 'rotate-180' : ''
          }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            />
          </svg>
          Actions
        </button>
        {actionsDropdownVisible && (
          <div
            id="actionsDropdown"
            className="absolute z-10 mt-2 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Mass Edit
                </a>
              </li>
            </ul>
            <div className="py-1">
              <a
                href="#"
                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Delete all
              </a>
            </div>
          </div>
        )}
      </div>
</div>
  );
};
