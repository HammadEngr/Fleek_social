import ErrorBoundry from "../Layout/ErrorBoundry";
import {
  Page_AddExperience,
  Page_CreatePost,
  Page_Feed,
  Page_ResetPassword,
  Page_SelfView,
  Page_UserDetailsEdit,
} from "./lazyImports";

export const protectedRoutes = [
  {
    path: "feed",
    element: <Page_Feed />,
    errorElement: <ErrorBoundry />,
  },
  {
    path: "user/self/:id",
    element: <Page_SelfView />,
    errorElement: <ErrorBoundry />,
  },
  {
    path: "user/self/:id/edit",
    element: <Page_UserDetailsEdit />,
    errorElement: <ErrorBoundry />,
  },
  {
    path: "recover/resetpassword/:token",
    element: <Page_ResetPassword />,
    errorElement: <ErrorBoundry />,
  },
  {
    path: "experience/add",
    element: <Page_AddExperience />,
    errorElement: <ErrorBoundry />,
  },
  {
    path: "post/create",
    element: <Page_CreatePost />,
    errorElement: <ErrorBoundry />,
  },
];
