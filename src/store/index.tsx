import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthorizationSlice from "./AuthorizationSlice";
import AlertSlice from "./alertSlice/alertSlice";

const rootreducer = combineReducers({
  AuthorizationSlice: AuthorizationSlice,
  AlertSlice: AlertSlice,
});

export const store = configureStore({
  reducer: rootreducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
