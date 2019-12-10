import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { bindActionCreators, compose } from "redux";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import * as challengesActions from "../../actions/Challenges";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import HomeChallenges from "../../components/Home/HomeChallenges";
import ChallengeItem from "../../components/Challenges/ChallengeItem/ChallengeItem";
import ChallengeDetail from "../../components/Challenges/ChallengeDetail/ChallengeDetail";

class ChallengesListPage extends Component {
  componentDidMount() {
    const { challengesActionCreators, Courses, Challenges } = this.props;
    console.log("nhin ki vao: ", Challenges);
    const {
      getChallengesRequest,
      getChallengesDetailRequest
    } = challengesActionCreators;
    // if (_.isEmpty(Courses.courses)) {
    getChallengesRequest();
    // if (_.isEmpty(Challenges)) {
    getChallengesDetailRequest("5dea0eeb1433d60e205f6a4b");
    // }
    //}
  }
  onDelete = id => {
    const { coursesActionCreators } = this.props;
    const { deletecourseRequest } = coursesActionCreators;
    deletecourseRequest(id);
  };
  showListChallenges = challenges => {
    const { challengesActionCreators, Challenges, ChallengeDetailReducer } = this.props;
    const { getChallengesDetailRequest } = challengesActionCreators;
    var result = null;
    if (!_.isEmpty(challenges)) {
      if (challenges.length !== 0) {
        result = challenges.map((challenge, index) => {
          return (
            <ChallengeItem
              challenge={challenge}
              Challenges={Challenges}
              key={index}
              cau={index}
              getChallengesDetailRequest={getChallengesDetailRequest}
              ChallengeDetailReducer={ChallengeDetailReducer}
            />
          );
        });
      }
    }
    return result;
  };
  render() {
    const { Challenges, ChallengeDetailReducer } = this.props;
    return (
      <React.Fragment>
        <HomeChallenges>
          <Grid container style={{ height: "90vh" }}>
            <Grid item xs={7}>
              <ChallengeDetail
                ChallengeDetailReducer={ChallengeDetailReducer}
                Challenges={Challenges}
              />
            </Grid>
            <Grid
              item
              xs={5}
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "flex-end"
              }}
            >
              {this.showListChallenges(Challenges)}
            </Grid>
          </Grid>
        </HomeChallenges>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    Challenges: state.Challenges.challenges,
    ChallengeDetailReducer: state.Challenges.challengeDetail
  };
};
const mapDispatchToProps = dispatch => {
  return {
    challengesActionCreators: bindActionCreators(challengesActions, dispatch)
  };
};
const merge = withRouter(ChallengesListPage);
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(merge);
