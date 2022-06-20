import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../types/userTypes";
import { API } from "../utils/helpers/Consts";

export const login = async (userData: IUser) => {
  const config = {
    headers: { "Content-Type": "application/json" },
  };

  let data = JSON.stringify(userData);
  try {
    let res = await axios.post(`${API}admin/login`, data, config);
    console.log(res);
    localStorage.setItem("token", JSON.stringify(res.data));
  } catch (e) {
    console.log(e);
  }
};

export const AuthorizationSlice = createSlice({
  name: "auth",
  initialState: {
    userData: {},
  },
  reducers: {},
});

export const {} = AuthorizationSlice.actions;

export default AuthorizationSlice.reducer;
