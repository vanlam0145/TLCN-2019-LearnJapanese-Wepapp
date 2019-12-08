import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { bindActionCreators, compose } from "redux";
import * as coursesActions from "../../actions/Courses";
import Grid from "@material-ui/core/Grid";
import Home from "../../components/Home/Home";
import CourseItem from "../../components/Courses/CourseItem/CourseItem";
import CourseDetail from "../../components/Courses/CourseDetail/CourseDetail";

class CourseDetailPage extends Component {
  async componentDidMount() {
    const { coursesActionCreators } = this.props;
    const {
      getcoursedetailsRequest,
      learncourseRequest
    } = coursesActionCreators;
    const { id } = this.props.match.params;
    await getcoursedetailsRequest(id);
    await learncourseRequest(id);
  }
  onDeleteCourse = () => {
    const { coursesActionCreators } = this.props;
    const { deletecourseRequest } = coursesActionCreators;
    const { id } = this.props.match.params;
    const { history } = this.props;
    deletecourseRequest(id, history);
  };
  onLearnCourse = () => {
    const { coursesActionCreators } = this.props;
    const { learncourseRequest } = coursesActionCreators;
    const { id } = this.props.match.params;
    learncourseRequest(id);
  };
  render() {
    const { courseDetail, learnCourse } = this.props;
    const { onDeleteCourse, onLearnCourse } = this;
    return (
      <React.Fragment>
        <CourseDetail
          courseDetail={courseDetail}
          onDeleteCourse={onDeleteCourse}
          onLearnCourse={onLearnCourse}
          learnCourse={learnCourse}
        />
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    courseDetail: state.Courses.courseDetail,
    learnCourse: state.Courses.learnCourse
  };
};
const mapDispatchToProps = dispatch => {
  return {
    coursesActionCreators: bindActionCreators(coursesActions, dispatch)
  };
};
const test = withRouter(CourseDetailPage);
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(test);
