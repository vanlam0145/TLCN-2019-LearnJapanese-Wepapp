/* eslint-disable react/no-typos */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators, compose } from "redux";
import SignUp from "../../components/SignUp/SignUp";
import * as signupActions from "../../actions/SignUp";
import checkAuthen from "../../helper/CheckToken/CheckToken";
class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      errorEmail: "",
      username: "",
      errorUsername: "",
      password: "",
      errorPassword: "",
      retypepassword: "",
      errorRetypePassword: "",
      userForWeb: true
    };
  }
  componentDidMount() {
    if (checkAuthen()) {
      this.props.history.push("/");
    }
    const { signupActionCreators } = this.props;
    const { signupDirect } = signupActionCreators;
    signupDirect();
    const token = localStorage.getItem("token");
    console.log("token: ", token);
  }
  onChange = event => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
  };
  validateForm = (email, username, password, retypepassword) => {
    let isError = false;
    const errors = {};
    if (email === "") {
      isError = true;
      errors.errorEmail = "email is required";
    }
    if (username === "") {
      isError = true;
      errors.errorUsername = "username is required";
    }
    if (password === "") {
      isError = true;
      errors.errorPassword = "password is required";
    }
    if (retypepassword === "") {
      isError = true;
      errors.errorRetypePassword = "re-type password is required";
    }
    if ((email !== "") & (email.indexOf("@") === -1)) {
      isError = true;
      errors.errorEmail = "Email is valid, not contain @";
    }
    if (username.length < 4 && username.length !== 0) {
      isError = true;
      errors.errorUsername = "Username needs to be at least 5 characters long";
    }
    if (password.length < 8) {
      isError = true;
      errors.errorPassword = "Password needs to be at least 8 characters long";
    }
    if (password !== retypepassword) {
      isError = true;
      errors.errorPassword = "Password and re-type password need to be same";
      errors.errorRetypePassword =
        "Password and re-type password need to be same";
    }
    if (isError) {
      this.setState({
        ...this.state,
        ...errors
      });
    }
    return isError;
  };
  onHandleSubmit = event => {
    const { history } = this.props;
    event.preventDefault();
    const {
      email,
      username,
      password,
      retypepassword,
      userForWeb
    } = this.state;
    const err = this.validateForm(email, username, password, retypepassword);
    if (!err) {
      var user = {
        email: email,
        password: password,
        username: username,
        userForWeb: userForWeb
      };
      const { signupActionCreators } = this.props;
      const { signupRequest } = signupActionCreators;
      signupRequest(user, history);
      console.log("click button signup");
    }
  };
  render() {
    const {
      errorUsername,
      errorEmail,
      errorPassword,
      errorRetypePassword
    } = this.state;
    return (
      <SignUp
        onChange={this.onChange}
        errorUsername={errorUsername}
        errorEmail={errorEmail}
        errorPassword={errorPassword}
        errorRetypePassword={errorRetypePassword}
        onHandleSubmit={this.onHandleSubmit}
      />
    );
  }
}
SignUpPage.propTypes = {
  signup: PropTypes.shape({
    requesting: PropTypes.bool,
    successful: PropTypes.bool,
    message: PropTypes.object,
    errors: PropTypes.object
  })
};
const mapStateToProps = state => {
  return {
    signup: state.SignUp
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signupActionCreators: bindActionCreators(signupActions, dispatch)
  };
};
const test = withRouter(SignUpPage);
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default compose(withConnect)(test);
