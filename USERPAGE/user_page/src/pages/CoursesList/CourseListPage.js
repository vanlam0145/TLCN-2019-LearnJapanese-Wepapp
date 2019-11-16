import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { bindActionCreators, compose } from "redux";
import * as coursesActions from "../../actions/Courses";
import Grid from "@material-ui/core/Grid";
import Home from "../../components/Home/Home";
import CardItem from "../../components/CardItem/CardItem";

class CourseListPage extends Component {
  componentDidMount() {
    const { coursesActionCreators } = this.props;
    const { getcoursesRequest } = coursesActionCreators;
    getcoursesRequest();
  }
  //   componentDidUpdate(prevProps){
  //     if(JSON.stringify(prevProps.Courses)!==JSON.stringify(this.props.products))
  //     {
  //       this.props.actionFetchProductsRequest()
  //     }
  //   }
  showCourses = courses => {
    const {Courses}=this.props
    console.log(Courses)
    var result = null;
    if (courses !== undefined) {
      result = courses.map((course, index) => {
        return (
          <Grid item xs={4}>
            <CardItem course={course} key={index} Courses={Courses}/>
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
    coursesActionCreators: bindActionCreators(coursesActions, dispatch)
  };
};
const test = withRouter(CourseListPage);
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default compose(withConnect)(test);
