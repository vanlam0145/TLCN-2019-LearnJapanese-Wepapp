import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { bindActionCreators, compose } from "redux";
import SignIn from "../../components/SignIn/SignIn";
import checkAuthen from "../../helper/CheckToken/CheckToken";
//import * as loginActions from "../../actions/Authentication";
import * as signinActions from "../../actions/SignIn";
class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      errorUsername: "",
      password: "",
      errorPassword: "",
      cbRemember: "",
      errorCbRemember: ""
    };
  }
  onChange = event => {
    console.log(event)
    var target = event.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  };
  onHandleSubmit = event => {
    const { history } = this.props;
    event.preventDefault();
    const { username, password, cbRemember } = this.state;
    var user = {
      username: username,
      password: password
    };
    //console.log("user: ", user);
    const { signinActionCreators } = this.props;
    const { signinRequest } = signinActionCreators;
    signinRequest(user, history);
  };
  componentDidMount() {
    if (checkAuthen()) {
      this.props.history.push("/");
    }
  }
  render() {
    const { signin } = this.props;
    const { cbRemember } = this.state;
    return (
      <SignIn
        signin={signin}
        onChange={this.onChange}
        cbRemember={cbRemember}
        onHandleSubmit={this.onHandleSubmit}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    signin: state.SignIn
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signinActionCreators: bindActionCreators(signinActions, dispatch)
  };
};
const test = withRouter(SignInPage);
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default compose(withConnect)(test);
