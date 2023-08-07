import { configureStore,combineReducers } from '@reduxjs/toolkit';

import filterSlice from './slices/filterSlice';
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
const persistConfig = {
    key:"root",
    version: 1,
    storage,
    
}
const reducer = combineReducers({
    filter: filterSlice,
})


const persistedReducer = persistReducer(persistConfig,reducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
// const store = configureStore({
//     reducer: {
//         reducer: persistedReducer,
//         middleware: [createSerializableStateInvariantMiddleware()],
//     },
// })

export default store