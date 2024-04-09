import { useEffect, useState } from "react";
import fetchPolizas from "../../slices/Poliza/fetchPoliza";
import { TablePoliza } from "../../components/Sisgepol/TablePoliza";
import { PaginationCustom } from "../../components/PaginationCustom";
import { SearchPoliza } from "../../components/Sisgepol/SearchPoliza";
import {
  useGetAllRubrosMutation,
  useGetAllSurcursalesMutation,
} from "../../slices/Poliza/polizaApiSlice";
import { FindRubro } from "../../components/Sisgepol/FindRubro";

export const Rubros = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [selectedOption, setSelectedOption] = useState("cliente");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [rubro, setRubro] = useState(null);
  const [surcursal, setSurcursal] = useState(null);
  const [selectSucursal, setSelectSurcursal] = useState(null);

  const handleOptionSucursal = (option) => {
    setSelectSurcursal(option);
    setDropdownOpen(false);
    setPage(1);
  };
  const [getAllRubros] = useGetAllRubrosMutation();
  const [getAllSurcusales] = useGetAllSurcursalesMutation();

  const handleRubro = async () => {
    const rubro = await getAllRubros();
    console.log(rubro);
    setRubro(rubro.data.rubros);
  };
  const handleSucursale = async () => {
    const sucursal = await getAllSurcusales();
    setSurcursal(sucursal.data.sucursales);
  };
  const {
    data: polizas,
    isLoading,
    isError,
    error,
  } = fetchPolizas({
    page,
    limit,
    sucursal: selectSucursal
  });

  const handlePage = (newPage) => {
    setPage(newPage);
  };

  const handleLimit = (limit) => {
    setLimit(limit);
    setPage(1);
  };

  useEffect(() => {
    if (rubro == null && surcursal == null) {
      handleRubro();
      handleSucursale();
    }
  }, [rubro,surcursal]);
  useEffect(() => {
    if (!isLoading && !isError) {
      console.log(polizas);
    }
  }, [polizas, isLoading, isError]);
  return (
    <section className="border-green-700 dark:bg-gray-900 p-3 sm:p-5 flex justify-center items-center h-full">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-2 sm:p-4 md:p-6 xl:p-8 2xl:p-10  w-full sm:max-w-full  md:max-w-full  lg:max-w-full  xl:max-w-full 2xl:max-w-full">
        <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4 p-4 justify-end">
          <FindRubro
            dropdownOpen={dropdownOpen}
            setDropdownOpen={setDropdownOpen}
            handleOptionRubro={handleOptionSucursal}
            rubros={rubro}
            name={"Rubros"}
          />
          <FindRubro
            dropdownOpen={dropdownOpen}
            setDropdownOpen={setDropdownOpen}
            handleOptionRubro={handleOptionSucursal}
            rubros={surcursal}
            name={"Surcursales"}
          />
        </div>
        <TablePoliza polizas={polizas} />
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
