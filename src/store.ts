import {configureStore} from '@reduxjs/toolkit';
import {
  persistStore, 
  persistReducer, 
  Persistor, 
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import appReducer from './features/index';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['todos'],
};

const persistedReducer = persistReducer(persistConfig, appReducer);

// Create the store with middleware
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor: Persistor = persistStore(store);
