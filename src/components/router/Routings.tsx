import { Suspense } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";

import { routes } from "./routes";

const Routings = () => {
  return (
    <Suspense>
      <HashRouter>
        <Routes>
          {routes.map((routeProps) => (
            <Route {...routeProps} key={routeProps.path as string} />
          ))}
        </Routes>
      </HashRouter>
    </Suspense>
  );
};

export default Routings;
