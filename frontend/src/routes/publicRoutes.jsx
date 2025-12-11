import PageLoader from "../Layout/PageLoader";
import Signin from "../components/signin/Signin";
import SigninSkeleton from "../ui/skeletons/SIgninSkeleton";
import SignupSkeleton from "../ui/skeletons/SignupSkeleton";
import { Page_RecoverPassword, Page_SignUp, Page_Welcome } from "./lazyImports";

export const publicRoutes = [
  {
    path: "/",
    element: <PageLoader component={Page_Welcome} />,
    errorElement: <p>Error</p>,
  },
  {
    path: "/signup",
    element: <PageLoader component={Page_SignUp} skeleton={SignupSkeleton} />,
    errorElement: <p>Error</p>,
  },
  {
    path: "/signin",
    element: <PageLoader component={Signin} skeleton={SigninSkeleton} />,
    errorElement: <p>Error</p>,
  },
  {
    path: "/recover",
    element: <Page_RecoverPassword />,
    errorElement: <p>Error</p>,
  },
];
