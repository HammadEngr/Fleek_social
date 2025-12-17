import ErrorBoundry from "../Layout/ErrorBoundry";
import PageLoader from "../Layout/PageLoader";
import Signin from "../components/signin/Signin";
import SigninSkeleton from "../ui/skeletons/SIgninSkeleton";
import SignupSkeleton from "../ui/skeletons/SignupSkeleton";
import { Page_RecoverPassword, Page_SignUp, Page_Welcome } from "./lazyImports";

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
    element: <PageLoader component={Signin} skeleton={SigninSkeleton} />,
    errorElement: <ErrorBoundry />,
  },
  {
    path: "/recover",
    element: <Page_RecoverPassword />,
    errorElement: <ErrorBoundry />,
  },
];
