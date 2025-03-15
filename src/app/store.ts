import { configureStore } from '@reduxjs/toolkit';
import formsReducer from './formsSlice';

export const store = configureStore({
  reducer: {
    forms: formsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = typeof store.dispatch;
