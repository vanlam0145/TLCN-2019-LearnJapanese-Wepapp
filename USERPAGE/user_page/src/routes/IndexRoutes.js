import React from "react";
import SignUpPage from "../pages/SignUp/SignUpPage";
import SignInPage from "../pages/SignIn/SignInPage";
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
