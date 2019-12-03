import React from "react";
import SignUpPage  from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";
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
