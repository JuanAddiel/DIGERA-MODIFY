import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../slices/Auth/authSlice';
import polizaReducer from '../slices/Poliza/polizaSlice';
import { apiSlice } from "../slices/apiSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    poliza:polizaReducer,
    [apiSlice.reducerPath]:apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
export default store;