import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { bindActionCreators, compose } from "redux";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import * as coursesActions from "../../actions/Courses";
import Grid from "@material-ui/core/Grid";
import Home from "../../components/Home/Home";
import CourseItem from "../../components/Courses/CourseItem/CourseItem";

class CourseListPage extends Component {
  componentDidMount() {
    const { coursesActionCreators, Courses } = this.props;
    const { getcoursesRequest } = coursesActionCreators;
    if (_.isEmpty(Courses.courses)) {
      getcoursesRequest();
    }
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
      if (courses.length !== 0) {
        result = courses.map((course, index) => {
          return (
            <Grid item xs={6} key={index}>
              <CourseItem
                course={course}
                key={index}
                Courses={Courses}
                onDelete={onDelete}
              />
            </Grid>
          );
        });
      } else {
        result = (
          <Box style={{ display: "flex", justifyContent:"center", alignItems:"center" }}>
            <Typography>
              Bạn chưa có khoá học nào. Tạo mới hoặc học tại phần chủ đề học!
            </Typography>
          </Box>
        );
      }
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
    coursesActionCreators: bindActionCreators(coursesActions, dispatch)
  };
};
const merge = withRouter(CourseListPage);
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(merge);
