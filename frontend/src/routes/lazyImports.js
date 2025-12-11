import { lazy } from "react";
export const Signin = lazy(() => import("../components/signin/Signin"));

export const Page_Welcome = lazy(() => import("../pages/Page_Welcome"));
export const Page_SignUp = lazy(() => import("../pages/auth/Page_SignUp"));
export const Page_ResetPassword = lazy(() =>
  import("../pages/auth/Page_ResetPassword")
);
export const Page_RecoverPassword = lazy(() =>
  import("../pages/auth/Page_RecoverPassword")
);
export const Page_SelfView = lazy(() =>
  import("../pages/protected/Page_SelfView")
);
export const Page_UserDetailsEdit = lazy(() =>
  import("../pages/protected/Page_UserDetailsEdit")
);
export const Page_AddExperience = lazy(() =>
  import("../pages/protected/Page_AddExperience")
);
export const Page_Feed = lazy(() => import("../pages/Page_Feed"));
