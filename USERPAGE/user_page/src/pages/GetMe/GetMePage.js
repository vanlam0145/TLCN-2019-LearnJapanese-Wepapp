import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { withRouter } from "react-router-dom";
import GetMe from "../../components/GetMe/GetMe";
import * as getmeActions from "../../actions/GetMe";
import * as ModalUsernamActions from "../../actions/ModalUsername";
import { withFormik } from "formik";
import * as Yup from "yup";

class GetMePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      file: [],
      disabled: true,
      open: false,
      showPassword: false
    };
  }
  onChangeImage = event => {
    if (event.target.files[0]) {
      const selectFile = URL.createObjectURL(event.target.files[0]);
      this.setState({
        image: selectFile,
        file: event.target.files[0],
        disabled: false
      });
    }
  };
  onChange = event => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
  };
  openDialog = () => {
    this.setState({ open: true });
  };
  closeDialog = () => {
    this.setState({ open: false });
  };
  onHandleSubmitImage = event => {
    event.preventDefault();
    const { getmeActionCreators } = this.props;
    const { changeavatarRequest } = getmeActionCreators;
    const { file } = this.state;
    const formData = new FormData();
    formData.append("avatar", file);
    changeavatarRequest(formData);
    this.setState({ disabled: true });
  };
  onHandleSubmit = event => {
    event.preventDefault();
    const { newUsername, password } = this.props.values;
    const { getmeActionCreators } = this.props;
    const { changeusernameRequest } = getmeActionCreators;
    const data = { password: password, newName: newUsername };
    changeusernameRequest( data);
  };
  componentDidMount() {
    const { getme } = this.props;
    const { avatar } = getme;
    console.log("Nguyễn Việt Hoàng didmount: ", avatar)
    if (avatar !== undefined) {
      const showAvatar = `http://35.198.209.252/api/avatars/${avatar}`;
      if (this.state.image === null) {
        this.setState({
          image: showAvatar
        });
      }
    }
  }

  componentDidUpdate() {
    const { getme } = this.props;
    const { avatar } = getme;
    // console.log(avatar)
    console.log("Nguyễn Việt Hoàng didupdate: ", avatar)
    const showAvatar = `http://35.198.209.252/api/avatars/${avatar}`;
    if (this.state.image === null) {
      this.setState({
        image: showAvatar
      });
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
    const {
      history,
      getme,
      getmeActionCreators,
      handleChange,
      errors,
      touched
    } = this.props;
    const { getmeRequest } = getmeActionCreators;
    const { image, disabled, open, showPassword } = this.state;
    const {
      onChange,
      onHandleSubmit,
      openDialog,
      closeDialog,
      handleClickShowPassword,
      handleMouseDownPassword,
      onChangeImage,
      onHandleSubmitImage
    } = this;
    const { newUsername, password } = this.props.values;
    return (
      <GetMe
        history={history}
        getmeRequest={getmeRequest}
        getme={getme}
        onChange={onChange}
        image={image}
        disabled={disabled}
        onHandleSubmit={onHandleSubmit}
        openDialog={openDialog}
        closeDialog={closeDialog}
        open={open}
        handleMouseDownPassword={handleMouseDownPassword}
        handleClickShowPassword={handleClickShowPassword}
        showPassword={showPassword}
        password={password}
        onChangeImage={onChangeImage}
        onHandleSubmitImage={onHandleSubmitImage}
        newUsername={newUsername}
        handleChange={handleChange}
        errors={errors}
        touched={touched}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    getme: state.GetMe.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getmeActionCreators: bindActionCreators(getmeActions, dispatch),
    ModalUsernameActionCreators: bindActionCreators(
      ModalUsernamActions,
      dispatch
    )
  };
};
const test = withRouter(GetMePage);
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
const FomikGetMe = withFormik({
  mapPropsToValues() {
    return {
      newUsername: "",
      password: ""
    };
  },
  validationSchema: Yup.object().shape({
    newUsername: Yup.string()
      .required("Enter your new Username")
      .min(5, "Username needs to be at least 5 characters long"),
    password: Yup.string()
      .required("Enter your password")
      .min(5, "Password needs to be at least 5 characters long")
  })
})(test);
export default compose(withConnect)(FomikGetMe);
