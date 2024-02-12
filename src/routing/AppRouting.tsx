import {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import {observer} from "mobx-react";

import {useStore} from "hooks/useStore.ts";

import {privateRoutes, publicRoutes, unauthorizedRoutes} from "./routingConfig.tsx";

const AppRouting: FC = observer(() => {
  const {isAuth} = useStore().accountStore

  const routes = [...publicRoutes]

  if (isAuth) routes.push(...privateRoutes)
  else routes.push(...unauthorizedRoutes)

  return (
    <Routes>
      {routes.map(route => (
        <Route path={route.path} element={route.element} key={route.path}/>
      ))}
    </Routes>
  );
});

export default AppRouting;