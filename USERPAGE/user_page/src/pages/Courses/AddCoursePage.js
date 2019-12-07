import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { bindActionCreators, compose } from "redux";
import * as addcourseActions from "../../actions/AddCourse";
import Grid from "@material-ui/core/Grid";
import Home from "../../components/Home/Home";
import { withFormik } from "formik";
import * as Yup from "yup";
import AddCourse from "../../components/Courses/AddCourse/AddCourse";

class AddCoursePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        title: "",
        content: [
          { text: "", mean: "" },
          { text: "", mean: "" }
        ]
      }
    };
  }
  onAddNewCard = () => {
    const item = { text: "", mean: "" };
    const data = [...this.state.data.content];
    data.push(item);
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        content: data
      }
    });
  };
  onDeleteCard = index => {
    const test = [...this.state.data.content];
    console.log("vi tri xoa: ", index);
    test.splice(index, 1);
    console.log("da xoa: ", test)
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        content: test
      }
    });
    console.log(this.state)
  };
  componentDidUpdate = prevProps => {
    if (prevProps.values.CourseName !== this.state.data.title) {
      const { CourseName } = this.props.values;
      this.setState({
        ...this.state,
        data: { ...this.state.data, title: CourseName }
      });
    }
  };
  onHandleSubmit = event => {
    event.preventDefault();
    const { AddCourseValues, addcourseActionCreators, history } = this.props;
    const { addcourseRequest } = addcourseActionCreators;
    const { dataOfCourse } = AddCourseValues;
    const { data } = this.state;
    console.log(data);
    addcourseRequest(data, history);
  };
  onChange = (event, index) => {
    console.log("chi so: ", index);
    var target = event.target;
    var name = target.name;
    var value = target.value;

    console.log(name + " : " + value);
    const data = [...this.state.data.content];
    if (name === "text") {
      data[index].text = value;
    }
    if (name === "mean") {
      data[index].mean = value;
    }

    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        content: data
      }
    });
  };
  render() {
    const { AddCourseValues, handleChange } = this.props;
    const { CourseName } = this.props.values;
    const { data } = this.state;
    const { onChange, onHandleSubmit, onAddNewCard, onDeleteCard } = this;
    return (
      <AddCourse
        onChange={onChange}
        data={data}
        AddCourseValues={AddCourseValues}
        onHandleSubmit={onHandleSubmit}
        CourseName={CourseName}
        handleChange={handleChange}
        onAddNewCard={onAddNewCard}
        onDeleteCard={onDeleteCard}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    AddCourseValues: state.AddCourse
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addcourseActionCreators: bindActionCreators(addcourseActions, dispatch)
  };
};
const test = withRouter(AddCoursePage);
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const FomikGetMe = withFormik({
  mapPropsToValues() {
    return {
      CourseName: ""
    };
  },
  validationSchema: Yup.object().shape({
    CourseName: Yup.string()
  })
})(test);
export default compose(withConnect)(FomikGetMe);
