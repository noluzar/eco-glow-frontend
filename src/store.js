import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlices.js';
import { apiSlice } from "./slices/apiSlice.js";
import cartReducer from './slices/cartSlice.js'; 

const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});

export default store;
