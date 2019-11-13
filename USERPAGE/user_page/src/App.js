import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import styles from "./styles";
import Menu from "./pages/Nav/Nav";
import routes from "./routes/HomeRoutes";
class App extends Component {
  showContentMenus = routes => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };
  render() {
    return (
      <div>
        <Menu />
        {this.showContentMenus(routes)}
      </div>
    );
  }
}

export default withStyles(styles)(App);
