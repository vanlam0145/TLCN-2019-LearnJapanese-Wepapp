/* eslint-disable react/no-typos */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators, compose } from "redux";
import SignUp from "../components/Authentication/SignUp/SignUp";
import * as signupActions from "../actions/SignUp";
import { withFormik } from "formik";
import * as Yup from "yup";
class SignUpPage extends Component {
  onHandleSubmit = event => {
    event.preventDefault();
    const { email, username, password, userForWeb } = this.props.values;
    const { signupActionCreators, history } = this.props;
    const user = {
      email: email,
      username: username,
      password: password,
      userForWeb: userForWeb
    };
    const {signupRequest}=signupActionCreators
    signupRequest(user, history)
  };
  handleClickShowPassword = () => {
    const {setFieldValue}=this.props
    const {showPassword}=this.props.values
    setFieldValue("showPassword", !showPassword)
  };
  handleMouseDownPassword = event => {
    event.preventDefault();
  };
  render() {
    const {
      values,
      handleChange,
      touched,
      setFieldTouched,
      errors
    } = this.props;
    const {onHandleSubmit, handleClickShowPassword, handleMouseDownPassword}=this
    return (
      <SignUp
        onHandleSubmit={onHandleSubmit}
        values={values}
        touched={touched}
        setFieldTouched={setFieldTouched}
        errors={errors}
        handleChange={handleChange}
        handleMouseDownPassword={handleMouseDownPassword}
        handleClickShowPassword={handleClickShowPassword}
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
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const FokmikSignup = withFormik({
  mapPropsToValues() {
    return {
      email: "",
      username: "",
      password: "",
      retypepassword: "",
      showPassword: false, 
      userForWeb: true
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Invalid email!")
      .required("Email is required!"),
    username: Yup.string()
      .min(5, "Username needs to be at least 5 characters long!")
      .required("Username is required!"),
    password: Yup.string()
      .min(8, "Password needs to be at least 8 characters long!")
      .required("Password is required!"),
    retypepassword: Yup.string()
      .required("Confirmed password is required")
      .oneOf([Yup.ref("password")], "Password must match")
  })
})(test);
export default compose(withConnect)(FokmikSignup);
