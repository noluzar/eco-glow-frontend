import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ 
    baseUrl: 'https://backend-mauve-pi-81.vercel.app',
    prepareHeaders: (headers) => {
        const token = localStorage.getItem("jwt");
    
        if (token) {
          headers.set("Authorization", Bearer ${token});
        }
    
        return headers;
      },
      credentials: "include",
});

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User'],
    endpoints: (builder) => ({}),
});
