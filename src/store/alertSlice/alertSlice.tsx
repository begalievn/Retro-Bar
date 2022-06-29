import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AlertBody } from "../../types/adminPage/adminPage";

export const AlertSlice = createSlice({
  name: "alert",
  initialState: {
    alert: {
      message: "",
      type: "",
    },
  },
  reducers: {
    createAlert: (state, action) => {
      state.alert = {
        message: action.payload.message,
        type: action.payload.type,
      };
    },

    deleteAlert: (state) => {
      state.alert = {
        message: "",
        type: "",
      };
    },
  },
});

export const { createAlert, deleteAlert } = AlertSlice.actions;
export default AlertSlice.reducer;
