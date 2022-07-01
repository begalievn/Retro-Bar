import AlertSlice from "./alertSlice/alertSlice";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthorizationSlice from "./authorization/AuthorizationSlice";
import photosReducer from "./features/photos/photosSlice";
import videosReducer from "./features/videos/videosSlice";
import establishmentsReducer from "./features/establishments/establishmentsSlice";

const rootreducer = combineReducers({
  AuthorizationSlice: AuthorizationSlice,
  AlertSlice: AlertSlice,
  photos: photosReducer,
  videos: videosReducer,
  establishments: establishmentsReducer,
});

export const store = configureStore({
  reducer: rootreducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
