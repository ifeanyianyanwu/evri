import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const storeApi = createApi({
  reducerPath: "storeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/",
  }),
  refetchOnMountOrArgChange: 3600,
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
    }),
    getProductInfo: builder.query({
      query: (productId) => `products/${productId}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductInfoQuery } = storeApi;
