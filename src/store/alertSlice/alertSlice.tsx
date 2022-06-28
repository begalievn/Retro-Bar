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
      // const alert =  {
      //   message: {
      //     message: {
      //       title: ''
      //     },
      //     type: ''
      //   }
      // }
      state.alert = {
        message: action.payload.message,
        type: action.payload.type,
      };
    },
  },
  // },
  // extraReducers: {
  //   [extraAction]: (state, action) => {
  //     state.alerts.push({ message: action.error.message, type: "error" });
  //   },
  // },
});

export const { createAlert } = AlertSlice.actions;
export default AlertSlice.reducer;
