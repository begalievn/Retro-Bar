import { combineReducers, configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import AuthorizationSlice from "./authorization/AuthorizationSlice";
import photosReducer from "./features/photos/photosSlice";
import videosReducer from "./features/videos/videosSlice";
import establishmentsReducer from "./features/establishments/establishmentsSlice";
import { photoAPI } from "./features/photos/photoQuery";

const rootreducer = combineReducers({
  AuthorizationSlice: AuthorizationSlice,
  photos: photosReducer,
  videos: videosReducer,
  establishments: establishmentsReducer,
  [photoAPI.reducerPath]: photoAPI.reducer,
});

export const store = configureStore({
  reducer: rootreducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(photoAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
