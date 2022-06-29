import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AuthorizationSlice from './AuthorizationSlice';
import photosReducer from './features/photos/photosSlice';

const rootreducer = combineReducers({
  AuthorizationSlice: AuthorizationSlice,
  photos: photosReducer,
});

export const store = configureStore({
  reducer: rootreducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
