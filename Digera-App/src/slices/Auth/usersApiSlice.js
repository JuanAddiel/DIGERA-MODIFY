import { apiSlice } from "../apiSlice";

const USERS_URL = "/api/user";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    signUp: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/register`,
        method: "POST",
        body: data,
      }),
    }),
    verifyToken: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/verifyToken`,
        method: "POST",
        body: data,
      }),
    }),
    logoutSession: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "GET",
      }),
    }),
    getAllUsers: builder.query({
      query: ({
        page,
        limit,
      }) => {
        let url = `${USERS_URL}/getAll?page=${page}&limit=${limit}`;
        return {
          url,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useLoginMutation, useVerifyTokenMutation, useLogoutSessionMutation, useSignUpMutation, useGetAllUsersQuery } =
  usersApiSlice;
