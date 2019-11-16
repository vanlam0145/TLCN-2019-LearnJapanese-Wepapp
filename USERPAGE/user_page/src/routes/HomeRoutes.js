import React from "react";
import GetMePage from "../pages/GetMe/GetMePage";
import checkAuthen from "../helper/CheckToken/CheckToken";
import SignInPage from "../pages/SignIn/SignInPage";
import HomePage from "../pages/CoursesList/CourseListPage";
import AddCoursePage from "../pages/AddCoursePage/AddCoursePage";
import Test from "../components/CardItemDetail/CardItemDetail";
import Test2 from "../components/test";
const routes = [
  { path: "/courses/addnew", exact: false, main: () => <AddCoursePage /> },
  {
    path: "/test",
    exact: false,
    main: () => <AddCoursePage />
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
