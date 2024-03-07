import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";




const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  token: null,
  logout:null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload.data;
      localStorage.setItem("userInfo", JSON.stringify(action.payload.data));
    },
    setToken: (state,action)=>{
      state.token = action.payload.data.token;
      const token = state.token;
      Cookies.set("token", token);
    },
    setLogout: (state, action) => {
      state.userInfo = null;
      state.token = null;
      Cookies.remove("token");
      localStorage.removeItem("userInfo");
    },
  },
});

export const { setCredentials, setLogout, setToken } = authSlice.actions;

export default authSlice.reducer;
