import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Coin, CoinHistory, CoinInfo } from "@/types/Coin";

const BASE_URL = "https://api.coingecko.com/api/v3/";
export const coinsApi = createApi({
  reducerPath: "coinsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCoins: builder.query<Coin[], string>({
      query: () =>
        `coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false/`,
    }),
    getCoinInfo: builder.query<CoinInfo, string>({
      query: (id) =>
        `coins/${id}?localization=false&tickers=false&market_data=true`,
    }),
    getCoinHistory: builder.query<CoinHistory, string>({
      query: (id) =>
        `coins/${id}/market_chart?vs_currency=usd&days=30&interval=daily`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCoinsQuery, useGetCoinInfoQuery, useGetCoinHistoryQuery } =
  coinsApi;
