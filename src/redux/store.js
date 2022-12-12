import { configureStore } from "@reduxjs/toolkit";
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
// import storage from 'redux-persist/lib/storage';
import { filterReducer } from './filter/filterSlice';
import { contactsReducer } from "./contacts/contactsSlice";
import { authReducer } from "./auth/authSlice";

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

export const store = configureStore({
    reducer: {
        auth: authReducer,
        contacts: contactsReducer,
        filter: filterReducer,
    },
  //   middleware,
  // devTools: process.env.NODE_ENV === 'development',
})

