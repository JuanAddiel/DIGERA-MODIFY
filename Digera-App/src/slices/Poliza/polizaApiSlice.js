import { apiSlice } from "../apiSlice";

const POLIZA_URL = "/api/poliza";
const CESIONARIO_URL = "/api/cesionario";
const RUBRO_URL = "/api/rubro";
const SURCURSAL_URL = "/api/sucursal";

export const polizaApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAll: builder.query({
      query: ({
        page,
        limit,
        cesionario,
        cedula,
        cliente,
        poliza,
        sucursal,
      }) => {
        let url = `${POLIZA_URL}/getAll?page=${page}&limit=${limit}`;
        if (cedula) url += `&cedula=${cedula}`;
        if (cliente) url += `&cliente=${cliente}`;
        if (poliza) url += `&poliza=${poliza}`;
        if (sucursal) url += `&sucursal=${sucursal}`;
        if (cesionario) url += `&cesionario=${cesionario}`;
        return {
          url,
          method: "GET",
        };
      },
    }),
    getAllCesionario: builder.mutation({
      query: () => ({
        url: `${CESIONARIO_URL}/getAll`,
        method: "GET",
      }),
    }),
    getAllRubros: builder.mutation({
      query: () => ({
        url: `${RUBRO_URL}/getAll`,
        method: "GET",
      }),
    }),
    getAllSurcursales: builder.mutation({
      query: () => ({
        url: `${SURCURSAL_URL}/getAll`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllQuery, useGetAllCesionarioMutation,useGetAllRubrosMutation,useGetAllSurcursalesMutation } = polizaApiSlice;
