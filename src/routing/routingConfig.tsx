import { staticLinks } from "config/routingLinks.ts";

import { NotFound } from "pages/NotFound";
import { Authorization } from "pages/auth/Authorization.tsx";
import { Registration } from "pages/auth/Registration.tsx";
import { Dashboard } from "pages/Dashboard";
import { Tasks } from "pages/Tasks";
import { Project } from "pages/Project";

export const unauthorizedRoutes = [
  {
    path: staticLinks.main,
    element: <Authorization/>
  },
  {
    path: staticLinks.authorization,
    element: <Authorization/>
  },
  {
    path: staticLinks.registration,
    element: <Registration/>
  }
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
    path: staticLinks.project,
    element: <Project/>
  },
]

export const publicRoutes = [
  {
    path: staticLinks.notFound,
    element: <NotFound/>,
  },
]