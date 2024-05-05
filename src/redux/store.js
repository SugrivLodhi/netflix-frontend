
import { configureStore } from '@reduxjs/toolkit'
import userData from './userslice'
import moviesData from './moviesSlice'
export const store = configureStore({
    reducer: {
        userData,
        moviesData
    }
})