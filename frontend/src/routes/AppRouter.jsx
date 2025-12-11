import { createBrowserRouter } from "react-router-dom";
import { protectedRoutes } from "./protectedRoutes.jsx";
import { publicRoutes } from "./publicRoutes.jsx";

import Layout from "../Layout/Layout.jsx";

export const appRouter = createBrowserRouter([
  ...publicRoutes,
  { path: "/", element: <Layout />, children: protectedRoutes },
]);
