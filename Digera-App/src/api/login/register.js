import axios from "../axios";

const API = '/user';
export const registerRequest = user => axios.post(API + "/register",user );
export const loginRequest = async(user) => axios.post(API + "/login", user);
export const verityTokenRequest = () => axios.get(API + "/verifyToken");