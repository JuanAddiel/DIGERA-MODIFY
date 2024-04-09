export const PaginationCustom = ({
  object,
  handlePage,
  handleLimit,
  limit,
  page,
  setPage,
}) => {
  return (
    <nav
      className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
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
          <option value="5">
            5
          </option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
        </select>
        <span className="ml-2 font-semibold text-gray-900 dark:text-white">
          {`${object?.page}-${object?.totalPages} `}
        </span>
        of
        <span className="ml-1 font-semibold text-gray-900 dark:text-white">
          {`${object?.total}`}
        </span>
      </span>

      <ul className="inline-flex items-stretch -space-x-px">
        <li>
          <button
            className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-r-sm border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => handlePage(page - 1)}
            disabled={page === 1}
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>
        {Array.from({ length: Math.min(object?.totalPages, 3) }, (_, index) => (
          <li key={index}>
            <button
              className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-500 dark:bg-gray-700 dark:text-white"
              onClick={() => handlePage(index + 1)}
            >
              {index + 1}
            </button>
          </li>
        ))}
        <li>
          <button className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-500 dark:bg-gray-700 dark:text-white">
            ...
          </button>
        </li>
        {object?.totalPages !== 1 && (
          <li>
            <button
              className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-500 dark:bg-gray-700 dark:text-white"
              onClick={() => setPage(object?.totalPages)}
            >
              {object?.totalPages}
            </button>
          </li>
        )}
        <li>
          <button
            className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-l-sm border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => handlePage(page + 1)}
            disabled={page === object?.totalPages}
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};