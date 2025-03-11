import { configureStore } from '@reduxjs/toolkit';
import formsReducer from './formsSlice';

export const store = configureStore({
  reducer: {
    forms: formsReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = typeof store.dispatch;
