import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { withRouter } from "react-router-dom";
import Menu from "../components/Menu/Menu";
import * as menuActions from "../actions/Menu";
class HomePage extends Component {
  signout = () => {
    const { menuActionCreators, history } = this.props;
    const { signoutAction } = menuActionCreators;
    signoutAction(history);
  };
  gettopics
  render() {
    const { history } = this.props;
    return <Menu history={history} signout={this.signout} />
  }
}
const mapDispatchToProps = dispatch => {
  return {
    menuActionCreators: bindActionCreators(menuActions, dispatch),
  };
};
const merge = withRouter(HomePage);
const withConnect = connect(
  null,
  mapDispatchToProps
);
export default compose(withConnect)(merge);
