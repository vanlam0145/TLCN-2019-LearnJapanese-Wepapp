import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { bindActionCreators, compose } from "redux";
import * as topicsActions from "../../actions/Topics";
import TopicDetail from "../../components/Topic/TopicDetail/TopicDetail";

class CourseDetailPage extends Component {
  componentDidMount() {
    const { topicsActionCreators } = this.props;
    const { gettopicdetailsRequest, learntopicRequest } = topicsActionCreators;
    const { id } = this.props.match.params;
    gettopicdetailsRequest(id);
    learntopicRequest(id);
  }
  render() {
    const { topicDetail, learnTopic, topicsActionCreators } = this.props;
    const {id}=this.props.match.params
    const { setHistoriesRequest } = topicsActionCreators;
    return (
      <React.Fragment>
        <TopicDetail
          topicDetail={topicDetail}
          learnTopic={learnTopic}
          setHistoriesRequest={setHistoriesRequest}
          idTopic={id}
        />
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    topicDetail: state.Topics.topicDetail,
    learnTopic: state.Topics.learnTopic
  };
};
const mapDispatchToProps = dispatch => {
  return {
    topicsActionCreators: bindActionCreators(topicsActions, dispatch)
  };
};
const test = withRouter(CourseDetailPage);
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(test);
