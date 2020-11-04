import storage from 'redux-persist/lib/storage';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import authReducer from './auth/auth-reducers';
import { financeReducer } from './finance';
import { bankDataReducer } from './bankData';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const persistStoreConfig = {
  key: 'bearer',
  storage,
  blacklist: ['isAuthenticated', 'error', 'isLoading'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(persistStoreConfig, authReducer),
    finance: financeReducer,
    bankData: bankDataReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { persistor, store };
