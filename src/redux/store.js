// import storage from 'redux-persist/lib/storage';
// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import authReducer from './auth/auth-reducers';

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

// const persistStoreConfig = {
//   key: 'bearer',
//   storage,
//   whitelist: ['token'],
// };

// const store = configureStore({
//   reducer: {
//     auth: persistReducer(persistStoreConfig, authReducer),
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });

// const persistor = persistStore(store);

// export default { persistor, store };
