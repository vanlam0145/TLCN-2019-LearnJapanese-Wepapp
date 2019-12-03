import React from "react";
import GetMePage from "../pages/GetMePage";
import checkAuthen from "../helper/CheckToken/CheckToken";
import SignInPage from "../pages/SignInPage";
import HomePage from "../pages/CourseListPage";
import AddCoursePage from "../pages/AddCoursePage";
import CourseDetailPage from "../pages/CourseDetailPage";
import TopicsListPage from "../pages/TopicsListPage";
const routes = [
  {
    path: "/gettopics",
    exact: false,
    main: () => (checkAuthen() ? <TopicsListPage /> : <SignInPage />)
  },
  { path: "/courses/addnew", exact: false, main: () => <AddCoursePage /> },
  {
    path: "/test",
    exact: false,
    main: () => <AddCoursePage />
  },
  {
    path: "/courses/:id",
    exact: false,
    main: () => <CourseDetailPage />
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
