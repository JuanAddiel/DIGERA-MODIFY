import { useGetAllQuery } from "./polizaApiSlice";

const fetchPolizas = ({ page, limit, cesionario, cedula, cliente, poliza, sucursal }) => {
  return useGetAllQuery({
    page,
    limit,
    cesionario,
    cedula,
    cliente,
    poliza,
    sucursal,
  });
};

export default fetchPolizas;
