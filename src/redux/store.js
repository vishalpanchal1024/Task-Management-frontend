import { configureStore } from "@reduxjs/toolkit";
import { api } from "@/redux/api/api";





export const store =configureStore({
    devTools:true,
    reducer:{
        [api.reducerPath]:api.reducer,
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})