import { useGetAllQuery } from "./polizaApiSlice"; 
const fetchPolizas = (page, limit) => {
  return useGetAllQuery({ page, limit });
};

export default fetchPolizas;
