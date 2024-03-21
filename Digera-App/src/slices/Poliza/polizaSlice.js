import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:null
};

const polizaSlice = createSlice({
  name: "poliza",
  initialState,
  reducers: {
    setData: (state, action) => {
        console.log(action.payload);
    },
  },
});

export const { setCredentials, setLogout, setToken } = polizaSlice.actions;

export default polizaSlice.reducer;
