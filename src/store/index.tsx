import AlertSlice from "./alertSlice/alertSlice";

import { combineReducers, configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import AuthorizationSlice from "./authorization/AuthorizationSlice";
import photosReducer from "./features/photos/photosSlice";
import videosReducer from "./features/videos/videosSlice";
import establishmentsReducer from "./features/establishments/establishmentsSlice";

import { photoAPI } from "./features/photos/photoQuery";
import { videoAPI } from "./features/videos/videoQuery";
import { establishmentsAPI } from "./features/establishments/establishmentsQuery";

const rootreducer = combineReducers({
  AuthorizationSlice: AuthorizationSlice,
  AlertSlice: AlertSlice,
  photos: photosReducer,
  videos: videosReducer,
  establishments: establishmentsReducer,
  [photoAPI.reducerPath]: photoAPI.reducer,
  [videoAPI.reducerPath]: videoAPI.reducer,
  [establishmentsAPI.reducerPath]: establishmentsAPI.reducer
});

export const store = configureStore({
  reducer: rootreducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(photoAPI.middleware, videoAPI.middleware, establishmentsAPI.middleware)
    
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
