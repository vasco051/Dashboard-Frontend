import {FC} from 'react';
import {Route, Routes} from "react-router-dom";

import {privateRoutes, publicRoutes} from "./routingConfig.tsx";

const AppRouting: FC = () => {
  const routes = [...publicRoutes, ...privateRoutes]

  return (
    <Routes>
      {routes.map(route => (
        <Route path={route.path} element={route.element} key={route.path}/>
      ))}
    </Routes>
  );
};

export default AppRouting;