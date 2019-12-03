import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators, compose } from "redux";
import SignIn from "../components/Authentication/SignIn/SignIn";
import checkAuthen from "../helper/CheckToken/CheckToken";
import * as signinActions from "../actions/SignIn";
import { withFormik } from "formik";
import * as Yup from "yup";
class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false
    };
  }
  // onChange = event => {
  //   console.log(event);
  //   var target = event.target;
  //   var name = target.name;
  //   var value = target.type === "checkbox" ? target.checked : target.value;
  //   this.setState({
  //     [name]: value
  //   });
  // };
  onHandleSubmit = event => {
    const { history, values, setFieldValue } = this.props;
    event.preventDefault();
    const { username, password, remember } = values;
    var user = {
      username: username,
      password: password,
      remember: remember
    };
    const { signinActionCreators } = this.props;
    const { signinRequest } = signinActionCreators;
    signinRequest(user, history);
    setFieldValue("username", "");
    setFieldValue("password", "");
    setFieldValue("remember", false);
  };
  componentDidMount() {
    if (checkAuthen()) {
      this.props.history.push("/");
    }
  }
  handleClickShowPassword = () => {
    this.setState({
      showPassword: !this.state.showPassword
    });
  };
  handleMouseDownPassword = event => {
    event.preventDefault();
  };
  render() {
    const { handleChange, values } = this.props;
    const { showPassword } = this.state;
    const {
      onHandleSubmit,
      handleClickShowPassword,
      handleMouseDownPassword
    } = this;
    return (
      <SignIn
        onHandleSubmit={onHandleSubmit}
        handleClickShowPassword={handleClickShowPassword}
        handleMouseDownPassword={handleMouseDownPassword}
        showPassword={showPassword}
        handleChange={handleChange}
        values={values}
      />
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    signinActionCreators: bindActionCreators(signinActions, dispatch)
  };
};
const merge = withRouter(SignInPage);
const withConnect = connect(null, mapDispatchToProps);
const FormikSignin = withFormik({
  mapPropsToValues() {
    return {
      username: "",
      password: "",
      remember: false
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required!"),
    password: Yup.string().required("Password is required!")
  })
})(merge);
export default compose(withConnect)(FormikSignin);
