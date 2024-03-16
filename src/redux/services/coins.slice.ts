import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Coin } from "@/types/Coin";

const BASE_URL = "https://api.coingecko.com/api/v3/";
export const coinsApi = createApi({
  reducerPath: "coinsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCoins: builder.query<Coin, string>({
      query: () =>
        `coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false/`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCoinsQuery } = coinsApi;
