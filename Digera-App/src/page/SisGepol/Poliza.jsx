import { useEffect, useRef, useState } from "react";
import { useGetAllCesionarioMutation } from "../../slices/Poliza/polizaApiSlice";
import fetchPolizas from "../../slices/Poliza/fetchPoliza";
import { TablePoliza } from "../../components/Sisgepol/TablePoliza";
import { PaginationCustom } from "../../components/PaginationCustom";
import { SearchPoliza } from "../../components/Sisgepol/SearchPoliza";

export const Poliza = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [selectedOption, setSelectedOption] = useState("cliente");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [cesionarios, setCesionarios] = useState(null);
  const [selectCesionario, setSelecteCesionario] = useState(null);
  const componentRef = useRef();

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };
  const handleOptionCesionario = (option) => {
    setSelecteCesionario(option);
    setDropdownOpen(false);
    setPage(1);
  };
  const [getAllCesionario] = useGetAllCesionarioMutation();

  const handleCesionario = async () => {
    const cesionario = await getAllCesionario();
    setCesionarios(cesionario.data.cesionarios);
  };
  const {
    data: polizas,
    isLoading,
    isError,
    error,
  } = fetchPolizas({
    page,
    limit,
    cesionario: selectCesionario,
    [selectedOption]: searchQuery,
  });

  const handlePage = (newPage) => {
    setPage(newPage);
  };

  const handleLimit = (limit) => {
    setLimit(limit);
    setPage(1);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    if (cesionarios == null) {
      handleCesionario();
    }
  }, [cesionarios]);
  useEffect(() => {
    if (!isLoading && !isError) {
    }
  }, [polizas, isLoading, isError]);
  return (
    <section className="border-green-700 dark:bg-gray-900 p-3 sm:p-5 flex justify-center items-center h-full">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-2 sm:p-4 md:p-6 xl:p-8 2xl:p-10  w-full sm:max-w-full  md:max-w-full  lg:max-w-full  xl:max-w-full 2xl:max-w-full">
        <SearchPoliza
          dropdownOpen={dropdownOpen}
          cesionarios={cesionarios}
          handleOptionSelect={handleOptionSelect}
          handleSearch={handleSearch}
          searchQuery={searchQuery}
          selectedOption={selectedOption}
          setDropdownOpen={setDropdownOpen}
          handleOptionCesionario={handleOptionCesionario}
          componentRef={componentRef}
        />

        <div ref={componentRef}>
          <TablePoliza polizas={polizas} />
        </div>
        <PaginationCustom
          object={polizas}
          handleLimit={handleLimit}
          handlePage={handlePage}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </div>
    </section>
  );
};
