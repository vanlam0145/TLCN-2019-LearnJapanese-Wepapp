import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { withRouter } from "react-router-dom";
import GetMe from "../components/GetMe/GetMe";
import * as getmeActions from "../actions/GetMe";
import * as ModalUsernamActions from "../actions/ModalUsername";
import { withFormik } from "formik";
import * as Yup from "yup";

class GetMePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      file: [],
      disabled: true,
      openSetUsername: false,
      openSetQuestion: false,
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
  openDialog = data => {
    if (data === "openSetUsername") this.setState({ openSetUsername: true });
    if (data === "openSetQuestion") this.setState({ openSetQuestion: true });
  };
  closeDialog = () => {
    this.setState({ openSetUsername: false, openSetQuestion: false });
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
    //console.log("doi ten username")
    event.preventDefault();
    this.closeDialog();
    const { newUsername, password } = this.props.values;
    const { getmeActionCreators, setFieldValue, setFieldTouched } = this.props;
    const { changeusernameRequest } = getmeActionCreators;
    const data = { password: password, newName: newUsername };
    changeusernameRequest(data);
    setFieldValue("newUsername", "");
    setFieldValue("password", "");
    setFieldTouched("newUsername", false);
    setFieldTouched("password", false);
  };
  onHandleSubmitQuestion = event => {
    //console.log("vao day ne")
    event.preventDefault();
    this.closeDialog();
    const { sumQuestion_form, numberAnwser_form } = this.props.values;
    const { getmeActionCreators, setFieldValue, setFieldTouched } = this.props;
    const { setQuestionRequest } = getmeActionCreators;
    const data = { sumQuestion: sumQuestion_form, numberAnswer: numberAnwser_form };
    //console.log("test api: ", data);
    setQuestionRequest(data);
    setFieldValue("sumQuestion", null);
    setFieldValue("numberAnswer", null);
    setFieldTouched("newUsername", false);
    setFieldTouched("password", false);
  };
  componentDidMount() {
    const { getme } = this.props;
    const { avatar } = getme;
    //console.log("Nguyễn Việt Hoàng didmount: ", avatar);
    if (avatar !== undefined) {
      if (this.state.image === null) {
        this.setState({
          image: avatar
        });
      }
    }
  }

  componentDidUpdate() {
    const { getme } = this.props;
    const { avatar } = getme;
    // console.log(avatar)
    //console.log("Nguyễn Việt Hoàng didupdate: ", avatar);
    if (this.state.image === null) {
      this.setState({
        image: avatar
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
      touched,
      handleBlur,
      setFieldTouched
    } = this.props;
    const { getmeRequest } = getmeActionCreators;
    const {
      image,
      disabled,
      openSetQuestion,
      openSetUsername,
      showPassword
    } = this.state;
    const {
      onChange,
      onHandleSubmit,
      openDialog,
      closeDialog,
      handleClickShowPassword,
      handleMouseDownPassword,
      onChangeImage,
      onHandleSubmitQuestion,
      onHandleSubmitImage
    } = this;
    //console.log("thuoc tinh formik: ", this.props.errors);
    const { newUsername, password, sumQuestion_form, numberAnwser_form } = this.props.values;
    return (
      <GetMe
        history={history}
        getmeRequest={getmeRequest}
        getme={getme}
        sumQuestion_form={sumQuestion_form}
        numberAnwser_form={numberAnwser_form}
        onChange={onChange}
        image={image}
        onHandleSubmitQuestion={onHandleSubmitQuestion}
        disabled={disabled}
        onHandleSubmit={onHandleSubmit}
        openDialog={openDialog}
        closeDialog={closeDialog}
        openSetUsername={openSetUsername}
        openSetQuestion={openSetQuestion}
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
        handleBlur={handleBlur}
        setFieldTouched={setFieldTouched}
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
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const FomikGetMe = withFormik({
  mapPropsToValues() {
    return {
      newUsername: "",
      password: "",
      sumQuestion_form: null,
      numberAnwser_form: null
    };
  },
  validationSchema: Yup.object().shape({
    newUsername: Yup.string()
      .required("Enter your new Username")
      .min(5, "Username needs to be at least 5 characters long"),
    password: Yup.string()
      .required("Enter your password")
      .min(5, "Password needs to be at least 5 characters long"),
    sumQuestion_form: Yup.number()
      .required("Điền số câu hỏi mà bạn muốn cài đặt")
      .moreThan(2, "Bạn cần nhập số câu hỏi trên 2"),
    numberAnwser_form: Yup.number()
      .required("Điền số đáp án cho mỗi câu trả lời")
      .moreThan(2, "Bạn cần điền số đáp án trên 2")
  })
})(test);
export default compose(withConnect)(FomikGetMe);
