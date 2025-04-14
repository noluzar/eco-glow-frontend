// slices/orderApiSlice.js
import { apiSlice } from "./apiSlice";

export const orderSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    placeOrder: builder.mutation({
      query: (orderData) => ({
        url: "/api/orders",
        method: "POST",
        body: orderData,
      }),
    }),
    getAllOrders: builder.query({
      query: () => ({
        url: "/api/orders",
        method: "GET",
      }),
    }),
  }),
});

export const { usePlaceOrderMutation, useGetAllOrdersQuery } = orderSlice;
