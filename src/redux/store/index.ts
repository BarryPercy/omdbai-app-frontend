import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { encryptTransform } from 'redux-persist-transform-encrypt'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import moviesReducer from '../reducers/moviesReducer'

const persistConfig = {
    storage: storage,
    key: 'root',
  }

const combinedReducer = combineReducers({
    movies: moviesReducer,
})

const persistedReducer = persistReducer(persistConfig, combinedReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        serializableCheck: false,
      })
    },
  })
  const persistedStore = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
  
  export { store, persistedStore }
  