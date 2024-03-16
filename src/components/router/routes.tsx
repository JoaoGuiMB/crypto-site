import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loader from "../common/loader";

const Home = lazy(() => import("@/pages/Home"));
const CoinDetails = lazy(() => import("@/pages/CoinDetails"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
