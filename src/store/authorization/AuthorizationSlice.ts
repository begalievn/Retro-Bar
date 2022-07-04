import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";
import { IUser } from "../../types/userTypes";
import { API } from "../../utils/helpers/Consts";

export const AuthorizationSlice = createSlice({
  name: "auth",
  initialState: {
    userData: false,
    validData: "",
    token: localStorage.accessToken || "",
  },
  reducers: {
    addTextError(state) {
      state.validData = "Неправильный логин или пароль";
    },
    deleteTextError(state) {
      state.validData = "";
    },
    checkAdmin(state, action) {
      state.userData = action.payload;
    },
    addToken(state, action) {
      state.token = action.payload;
    },
    deleteToken(state) {
      state.token = "";
    },
  },
});

export const {
  addTextError,
  deleteTextError,
  checkAdmin,
  addToken,
  deleteToken,
} = AuthorizationSlice.actions;

export default AuthorizationSlice.reducer;
