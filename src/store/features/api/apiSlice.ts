import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const storeApi = createApi({
  reducerPath: "storeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://course-api.com/",
  }),
  refetchOnMountOrArgChange: 3600,
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "react-store-products",
    }),
    getProductInfo: builder.query({
      query: (productId) => `react-store-single-product?id=${productId}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductInfoQuery } = storeApi;
