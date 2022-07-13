import AlertSlice from './alertSlice/alertSlice';

import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import AuthorizationSlice from './authorization/AuthorizationSlice';
import photosReducer from './features/photos/photosSlice';
import videosReducer from './features/videos/videosSlice';
import establishmentsReducer from './features/establishments/establishmentsSlice';
import photographerReducer from './features/photographers/photographersSlice';
import categoriesSlice from './features/category/categorySlice';

import { photoAPI } from './features/photos/photoQuery';
import { videoAPI } from './features/videos/videoQuery';
import { establishmentsAPI } from './features/establishments/establishmentsQuery';
import { photographersAPI } from './features/photographers/photographersQuery';
import { photographersSlice } from './features/photographers/photographersSlice';
import { advertisementsAPI } from './features/advertisement/advertisementsQuery';
import { contactsAPI } from './features/contacts/contactsQuery';
import { categoryAPI } from './features/category/categoryQuery';
import { searchAPI } from './features/search/searchQuery';

const rootreducer = combineReducers({
  AuthorizationSlice: AuthorizationSlice,
  AlertSlice: AlertSlice,
  photos: photosReducer,
  videos: videosReducer,
  establishments: establishmentsReducer,
  photographers: photographerReducer,
  categories: categoriesSlice,
  [photoAPI.reducerPath]: photoAPI.reducer,
  [videoAPI.reducerPath]: videoAPI.reducer,
  [establishmentsAPI.reducerPath]: establishmentsAPI.reducer,
  [photographersAPI.reducerPath]: photographersAPI.reducer,
  [advertisementsAPI.reducerPath]: advertisementsAPI.reducer,
  [contactsAPI.reducerPath]: contactsAPI.reducer,
  [categoryAPI.reducerPath]: categoryAPI.reducer,
  [searchAPI.reducerPath]: searchAPI.reducer,
});

export const store = configureStore({
  reducer: rootreducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      photoAPI.middleware,
      videoAPI.middleware,
      establishmentsAPI.middleware,
      photographersAPI.middleware,
      advertisementsAPI.middleware,
      contactsAPI.middleware,
      searchAPI.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
