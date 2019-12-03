import React, { Component } from "react";
import _ from 'lodash'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { bindActionCreators, compose } from "redux";
import * as topicsActions from "../actions/Topics";
import Grid from "@material-ui/core/Grid";
import Home from "../components/Home/Home";
import CardItem from "../components/Courses/CourseItem/CourseItem";
class TopicsListPage extends Component {
  componentDidMount() {
    const { topicsActionCreators, Courses } = this.props;
    const { getTopicsRequest } = topicsActionCreators;
    // if (_.isEmpty(Courses.courses)) {
    //   getcoursesRequest();
    // }
    console.log("helloooooooo")
    getTopicsRequest()
  }
  onDelete = id => {
    const { coursesActionCreators } = this.props;
    const { deletecourseRequest } = coursesActionCreators;
    deletecourseRequest(id);
  };
  showCourses = courses => {
    const { Courses } = this.props;
    const { onDelete } = this;
    var result = null;
    if (courses !== undefined) {
      result = courses.map((course, index) => {
        return (
          <Grid item xs={4} key={index}>
            <CardItem
              course={course}
              key={index}
              Courses={Courses}
              onDelete={onDelete}
            />
          </Grid>
        );
      });
    }
    return result;
  };
  render() {
    const { Courses } = this.props;
    const { courses } = Courses;
    return (
      <React.Fragment>
        <Home>{this.showCourses(courses.courses)}</Home>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    Courses: state.Courses
  };
};
const mapDispatchToProps = dispatch => {
  return {
    topicsActionCreators: bindActionCreators(topicsActions, dispatch)
  };
};
const merge = withRouter(TopicsListPage);
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(merge);
