import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const fakeStoreApi = createApi({
  reducerPath: 'fakeStoreApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => 'products',
    }),
    getSingleProduct: builder.query({
      query: id => `products/${id}`,
    }),
    getFirstSixProducts: builder.query({
      query: () => `products?limit=6`,
    }),
  }),
})

export const {
  useGetProductsQuery,
  useGetFirstSixProductsQuery,
  useGetSingleProductQuery,
} = fakeStoreApi
