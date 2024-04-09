import { Dropdown } from "flowbite-react";

export const FindRubro = ({
  dropdownOpen,
  rubros,
  handleOptionRubro,
  setDropdownOpen,
  name,
}) => {
  return (
    <>
      <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0 ">
        <Dropdown
          className="border border-solid border-opacity-75 border-gray-300 overflow-y-auto max-h-60"
          label={name}
          color="green"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {Array.isArray(rubros) &&
            rubros.map((c) => (
              <Dropdown.Item
                key={c.id}
                onClick={() => handleOptionRubro(c.name)}
              >
                {c.name}
              </Dropdown.Item>
            ))}
        </Dropdown>
      </div>
    </>
  );
};
