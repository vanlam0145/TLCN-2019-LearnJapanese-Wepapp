import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { bindActionCreators, compose } from "redux";
import * as topicsActions from "../../actions/Topics";
import Grid from "@material-ui/core/Grid";
import TopicList from "../../components/Topic/TopicList/TopicList";
import CardItem from "../../components/Courses/CourseItem/CourseItem";
import TopicItem from "../../components/Topic/TopicItem/TopicItem";
import Pagination from "material-ui-flat-pagination";
class TopicsListPage extends Component {
  constructor(props) {
    super(props);
    this.state = { offset: 0, page_number: 0 };
  }

  handleClick(offset) {
    let value = 0;
    if (offset > this.state.offset) {
      value = offset / 9;
      this.setState({
        page_number: value
      });
    }
    if (offset < this.state.offset) {
      if (offset === 0) {
        this.setState({ page_number: 0 });
      } else {
        this.setState({
          page_number: offset / 9
        });
      }
    }
    this.setState({ offset });
  }
  componentDidMount() {
    const { topicsActionCreators, Courses } = this.props;
    const { getTopicsRequest } = topicsActionCreators;
    // if (_.isEmpty(Courses.courses)) {
    //   getcoursesRequest();
    // }
    getTopicsRequest();
  }
  onDelete = id => {
    const { coursesActionCreators } = this.props;
    const { deletecourseRequest } = coursesActionCreators;
    deletecourseRequest(id);
  };
  showTopics = Topics => {
    const { onDelete } = this;
    const { offset, page_number } = this.state;
    var result = null;
    if (!_.isEmpty(Topics)) {
      result = Topics.map((topic, index) => {
        if (page_number * 9 <= index && index < (page_number + 1) * 9) {
          return (
            <Grid item xs={4} key={index}>
              <TopicItem topic={topic} key={index} onDelete={onDelete} />
            </Grid>
          );
        }
      });
    }
    return result;
  };
  render() {
    const { Courses, Topics } = this.props;
    const { courses } = Courses;
    return (
      <React.Fragment>
        <TopicList>{this.showTopics(Topics)}</TopicList>
        <Pagination
          style={{ textAlign: "center" }}
          limit={9}
          offset={this.state.offset}
          total={Topics.length}
          onClick={(e, offset) => this.handleClick(offset)}
        />
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    Courses: state.Courses,
    Topics: state.Topics.topics
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
