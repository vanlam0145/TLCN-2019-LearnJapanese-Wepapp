import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { withRouter } from "react-router-dom";
import Menu from "../../components/Menu/Menu";
import * as menuActions from "../../actions/Menu";
import Test from "../../components/test";
class HomePage extends Component {
  signout = () => {
    // this.props.history.push('/login')
    const { menuActionCreators, history } = this.props;
    const { signoutAction } = menuActionCreators;
    signoutAction(history);
  };
  render() {
    const { history } = this.props;
    return <Menu history={history} signout={this.signout} />
  }
}
const mapStateToProps = state => {
  return {
    signup: state.SignUp
  };
};
const mapDispatchToProps = dispatch => {
  return {
    menuActionCreators: bindActionCreators(menuActions, dispatch)
  };
};
const test = withRouter(HomePage);
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default compose(withConnect)(test);
