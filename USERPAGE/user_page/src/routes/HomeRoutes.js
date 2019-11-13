import React from "react";
import GetMePage from "../pages/GetMe/GetMePage";
import checkAuthen from "../helper/CheckToken/CheckToken";
import SignInPage from "../pages/SignIn/SignInPage";
import HomePage from "../pages/CoursesList/CourseListPage";
import Test from "../components/CardItemDetail/CardItemDetail";
import Test2 from "../components/test";
const routes = [
  {
    path: "/test",
    exact: false,
    main: () => <Test2 />
  },
  {
    path: "/courses/:id",
    exact: false,
    main: () => <Test />
  },
  {
    path: "/getme",
    exact: false,
    main: () => (checkAuthen() ? <GetMePage /> : <SignInPage />)
  },
  {
    path: "/",
    exact: false,
    main: () => <HomePage />
  }
];

export default routes;
