import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import persistReducerCase from '@/store/persist.js'
import storeReducerCase from '@/store/store.js'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

const persistedReducer = persistReducer(
    {
        key: 'persist',
        storage
    },
    persistReducerCase
)
export const store = configureStore({
    reducer: {
        persist: persistedReducer,
        store: storeReducerCase
    },
    middleware: [thunk],
    devTools: process.env.NODE_ENV !== 'production'
})

export const persistor = persistStore(store)
