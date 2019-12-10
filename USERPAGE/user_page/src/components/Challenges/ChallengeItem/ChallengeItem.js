import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Rating from "@material-ui/lab/Rating";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import StylesTopicItem from "./StylesChallengeItem";

class ChallengeItem extends Component {
  checkposition = () => {
    const { cau, challenge, Challenges, ChallengeDetailReducer } = this.props;
    if (ChallengeDetailReducer._id === challenge._id) {
      return true;
    }
    return false;
  };
  render() {
    const {
      challenge,
      cau,
      key,
      classes,
      getChallengesDetailRequest,
      Challenges
    } = this.props;
    const { checkposition } = this;

    console.log(key);
    return (
      <React.Fragment>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: "1%"
          }}
        >
          <Button
            style={{ border: "1px solid #3e51b5" }}
            className={`${classes.cardHover} ${
              checkposition() ? classes.cardIndex : ""
            }`}
            onClick={() => getChallengesDetailRequest(challenge._id)}
          >
            Câu {cau + 1}
          </Button>
          <Rating value={challenge.level} readOnly max={3} />
        </Box>
      </React.Fragment>
    );
  }
}

export default withStyles(StylesTopicItem)(ChallengeItem);
