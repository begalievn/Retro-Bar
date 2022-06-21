import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { AuthorizationSlice } from "./AuthorizationSlice";

const rootreducer = combineReducers({
  // AuthorizationSlice: AuthorizationSlice
});

export const store = configureStore({
  reducer: rootreducer,
});
