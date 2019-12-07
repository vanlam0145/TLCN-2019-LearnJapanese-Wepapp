import React from "react";
import SignUpPage  from "../pages/Authentication/SignUpPage";
import SignInPage from "../pages/Authentication/SignInPage";
const routes = [
  {
    path: "/login",
    exact: false,
    main: () => <SignInPage />
  },
  {
    path: "/signup",
    exact: false,
    main: ({ history }) => <SignUpPage history={history} />
  }
];

export default routes;
