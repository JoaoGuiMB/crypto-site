import React from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = React.lazy(() => import("@/pages/Home"));
const CoinDetails = React.lazy(() => import("@/pages/CoinDetails"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/coin/:id",
    element: <CoinDetails />,
  },
]);
