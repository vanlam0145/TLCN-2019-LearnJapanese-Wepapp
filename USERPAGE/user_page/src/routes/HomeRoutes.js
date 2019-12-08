import React from "react";
import GetMePage from "../pages/GetMePage";
import checkAuthen from "../helper/GetToken/getToken";
import SignInPage from "../pages/Authentication/SignInPage";
import HomePage from "../pages/Courses/CourseListPage";
import AddCoursePage from "../pages/Courses/AddCoursePage";
import CourseDetailPage from "../pages/Courses/CourseDetailPage";
import TopicsListPage from "../pages/Topics/TopicsListPage";
import TopicDetailPage from "../pages/Topics/TopicDetailPage"
const routes = [
  {
    path: "/topics/:id",
    exact: false,
    main: () => (checkAuthen() ? <TopicDetailPage /> : <SignInPage />)
  },
  {
    path: "/gettopics",
    exact: false,
    main: () => (checkAuthen() ? <TopicsListPage /> : <SignInPage />)
  },
  { path: "/courses/addnew", exact: false, main: () => <AddCoursePage /> },
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
