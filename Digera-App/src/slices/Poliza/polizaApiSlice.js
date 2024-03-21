import { apiSlice } from "../apiSlice";

const POLIZA_URL = "/api/rubros";

export const polizaApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAll: builder.query({
      query: ({ page, limit }) => ({
        url: `${POLIZA_URL}/getAll?page=${page}&limit=${limit}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllQuery
} = polizaApiSlice;
