import ErrorBoundry from "../Layout/ErrorBoundry";
import PageLoader from "../Layout/PageLoader";
import SignupSkeleton from "../ui/skeletons/SignupSkeleton";
import {
  Page_RecoverPassword,
  Page_Signin,
  Page_SignUp,
  Page_Welcome,
} from "./lazyImports";

export const publicRoutes = [
  {
    path: "/",
    element: <PageLoader component={Page_Welcome} />,
    errorElement: <ErrorBoundry />,
  },
  {
    path: "/signup",
    element: <PageLoader component={Page_SignUp} skeleton={SignupSkeleton} />,
    errorElement: <ErrorBoundry />,
  },
  {
    path: "/signin",
    element: <PageLoader component={Page_Signin} />,
    errorElement: <ErrorBoundry />,
  },
  {
    path: "/recover",
    element: <Page_RecoverPassword />,
    errorElement: <ErrorBoundry />,
  },
];
