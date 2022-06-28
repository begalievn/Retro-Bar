import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  AuthorizationSlice  from "./AuthorizationSlice";

const rootreducer = combineReducers({
  AuthorizationSlice: AuthorizationSlice,
  
});

export const store = configureStore({
  reducer: rootreducer,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
