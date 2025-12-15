import {
  Page_Feed,
  Page_ResetPassword,
  Page_SelfView,
  Page_UserDetailsEdit,
  Page_AddExperience,
  Page_CreatePost,
} from "./lazyImports";

export const protectedRoutes = [
  {
    path: "feed",
    element: <Page_Feed />,
    errorElement: <p>Error</p>,
  },
  {
    path: "user/self/:id",
    element: <Page_SelfView />,
    errorElement: <p>Error</p>,
  },
  {
    path: "user/self/:id/edit",
    element: <Page_UserDetailsEdit />,
    errorElement: <p>Error</p>,
  },
  {
    path: "recover/resetpassword/:token",
    element: <Page_ResetPassword />,
    errorElement: <p>Error</p>,
  },
  {
    path: "experience/add",
    element: <Page_AddExperience />,
    errorElement: <p>Error</p>,
  },
  {
    path: "post/create",
    element: <Page_CreatePost />,
    errorElement: <p>Error</p>,
  },
];
