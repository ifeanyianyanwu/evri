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
    getProduct: builder.query({
      query: (id) => `products/${id}`,
    }),
    getBestSellers: builder.query({
      query: () => "products?limit=7",
    }),
    getCategories: builder.query({
      query: () => "products/categories",
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetBestSellersQuery,
  useGetCategoriesQuery,
} = storeApi;
