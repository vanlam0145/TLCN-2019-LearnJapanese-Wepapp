import React from "react";
import ReactDOM from "react-dom";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter
} from "react-router-dom";
//import createHistory from "history/createBrowserHistory";
import "./index.css";
import indexRoutes from "./routes/IndexRoutes";
import GlobalLoading from "./components/GlobalLoading";
import configureStore from "./redux/configureStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import checkAuthen from "./helper/CheckToken/CheckToken";
import { I18nextProvider } from 'react-i18next';
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import i18n from './helper/Languages/i18n'
const store = configureStore();
ReactDOM.render(
  <I18nextProvider i18n={i18n}>
  <Provider store={store}>
    <BrowserRouter>
      <ToastContainer />
      <GlobalLoading />
      <Switch>
        {indexRoutes.map((prop, key) => (
          <Route
            path={prop.path}
            exact={prop.exact}
            component={prop.main}
            key={key}
          />
        ))}
        <Route
          path="/"
          //render={() => (test === false ? <Redirect to="/login" /> : <App />)}
          render={() => (checkAuthen() ? <App /> : <Redirect to="/login" />)}
        />
      </Switch>
    </BrowserRouter>
  </Provider></I18nextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
