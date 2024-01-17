import {staticLinks} from "config/routingLinks.ts";

import {Settings} from "pages/Settings";
import {NotFound} from "pages/NotFound";
import {Dashboard} from "pages/Dashboard";
import {Tasks} from "pages/Tasks";

export const publicRoutes = [

]

export const privateRoutes = [
  {
    path: staticLinks.main,
    element: <Dashboard/>
  },
  {
    path: staticLinks.tasks,
    element: <Tasks/>
  },
  {
    path: staticLinks.settings,
    element: <Settings/>
  },
  {
    path: staticLinks.notFound,
    element: <NotFound/>,
  },
]