import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loader from "../common/loader";

const Home = lazy(() => import("@/pages/Home"));
const CoinDetails = lazy(() => import("@/pages/CoinDetails"));

export const router = createBrowserRouter([
  {
    path: "*",
    element: (
      <Suspense fallback={<Loader />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/coin/:id",
    element: (
      <Suspense fallback={<Loader />}>
        <CoinDetails />
      </Suspense>
    ),
  },
]);
