import { withFormik } from 'formik';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators, compose } from 'redux';
import * as Yup from 'yup';

import * as addcourseActions from '../../actions/AddCourse';
import AddCourse from '../../components/Courses/AddCourse/AddCourse';
import ggTranslae from '../../helper/TranslateAPI/googleTranslate';
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
    test.splice(index, 1);
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        content: test
      }
    });
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
    addcourseRequest(data, history);
  };
  onChange = (event, index) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;

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
  onPress = (event, index) => {
    if (event.key == "Enter") {
      const data = [...this.state.data.content]
      ggTranslae.translate(event.target.value, 'ja', 'vi', function (err, translation) {
        getTran(translation);
      });
      const getTran = (translation) => {
        data[index].mean = translation.translatedText.toString();
        this.setState({
          ...this.state,
          data: {
            ...this.state.data,
            content: data
          }
        });
      }
    }
  }
  render() {
    const { AddCourseValues, handleChange } = this.props;
    const { CourseName } = this.props.values;
    const { data } = this.state;
    const { onChange, onHandleSubmit, onAddNewCard, onDeleteCard, onPress } = this;
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
        onPress={onPress}
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
