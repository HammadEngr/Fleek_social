import { lazy } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import PageLoader from "./Layout/PageLoader";
import SignupSkeleton from "./ui/skeletons/SignupSkeleton";
import SigninSkeleton from "./ui/skeletons/SIgninSkeleton";

const Signin = lazy(() => import("./components/signin/Signin"));

const Page_Welcome = lazy(() => import("./pages/Page_Welcome"));
const Page_SignUp = lazy(() => import("./pages/Page_SignUp"));
const Page_ResetPassword = lazy(() => import("./pages/Page_ResetPassword"));
const Page_RecoverPassword = lazy(() => import("./pages/Page_RecoverPassword"));
const Page_SelfView = lazy(() => import("./pages/Page_SelfView"));
const Page_UserDetailsEdit = lazy(() => import("./pages/Page_UserDetailsEdit"));
const Page_Feed = lazy(() => import("./pages/Page_Feed"));

const router = createBrowserRouter([
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
  {
    path: "/recover/resetpassword/:token",
    element: <Page_ResetPassword />,
    errorElement: <p>Error</p>,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/feed",
        element: <Page_Feed />,
        errorElement: <p>Error</p>,
      },
      {
        path: "/user/self/:id",
        element: <Page_SelfView />,
        errorElement: <p>Error</p>,
      },
      {
        path: "/user/self/:id/edit",
        element: <Page_UserDetailsEdit />,
        errorElement: <p>Error</p>,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route path="/" element={<PageLoader component={Home} />} />
    //       <Route
    //         path="/signup"
    //         element={
    //           <PageLoader component={Signup} skeleton={SignupSkeleton} />
    //         }
    //       />
    //       <Route
    //         path="/signin"
    //         element={
    //           <PageLoader component={Signin} skeleton={SigninSkeleton} />
    //         }
    //       />
    //       {/* <Route path="/skeleton" element={<SigninSkeleton />} /> */}
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
