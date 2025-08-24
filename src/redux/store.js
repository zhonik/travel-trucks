import { combineReducers, configureStore } from '@reduxjs/toolkit';
import campersReducer from './campers/slice.js';
import filterReducer from './filters/slice.js';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

const rootReduser = combineReducers({
  campers: campersReducer,
  filters: filterReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['campers'],
};

const persistedReduser = persistReducer(persistConfig, rootReduser);

export const store = configureStore({
  reducer: persistedReduser,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
