import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import testImage from "../../../assets/loginbackground.jpg";
import Rating from "@material-ui/lab/Rating";
import Button from "@material-ui/core/Button";
import { CardMedia } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import _ from "lodash";
import { Link } from "react-router-dom";
import SpeakIcon from "@material-ui/icons/VolumeUp";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Tooltip from "@material-ui/core/Tooltip";
import ArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Box from "@material-ui/core/Box";
import RightIcon from "@material-ui/icons/CheckCircle";
import WrongIcon from "@material-ui/icons/Cancel";
import StylesChallengeDetail from "./StylesChallengeDetail";

class ChallengeDetail extends Component {
  state = { showResult: 0, position: 0, openExplanation: false };
  onOpenExplanation = () => {
    this.setState({ openExplanation: true });
  };
  onCloseExplanation = () => {
    this.setState({ openExplanation: false });
  };
  playMp3 = index => {
    const { ChallengeDetailReducer } = this.props;
    const { choice_1_voice, choice_2_voice } = ChallengeDetailReducer;
    if (index === 1) {
      var audio = new Audio(choice_1_voice);
      audio.play();
    }
    if (index === 2) {
      var audio = new Audio(choice_2_voice);
      audio.play();
    }
  };
  findIndex = () => {
    let result = null;
    const { ChallengeDetailReducer, Challenges } = this.props;
    const { _id } = ChallengeDetailReducer;
    result = _.findIndex(Challenges, { _id });
    return result;
  };
  renderShowResult = () => {
    let xhtml = null;
    if (this.state.showResult === 1) {
      xhtml = (
        <React.Fragment>
          <Box
            style={{
              display: "flex",
              alignItems: "center"
            }}
          >
            <Tooltip title="xem giải thích chi tiết">
              <IconButton onClick={() => this.onOpenExplanation()}>
                <RightIcon style={{ color: "green" }} />
                <ArrowDownIcon style={{ color: "green" }} />
              </IconButton>
            </Tooltip>
          </Box>
        </React.Fragment>
      );
    }
    if (this.state.showResult === 2) {
      xhtml = (
        <React.Fragment>
          <Box
            style={{
              display: "flex",
              alignItems: "center"
            }}
          >
            <WrongIcon style={{ color: "red" }} />
          </Box>
        </React.Fragment>
      );
    }
    return xhtml;
  };
  componentDidUpdate(prevProps) {
    if (
      this.props.ChallengeDetailReducer !== prevProps.ChallengeDetailReducer
    ) {
      this.setState({ showResult: 0, position: 0 });
    }
  }
  checkAnswer = choice => {
    const { ChallengeDetailReducer } = this.props;
    const { answer } = ChallengeDetailReducer;
    if (choice === 1) {
      this.setState({ position: 1 });
    }
    if (choice === 2) {
      this.setState({ position: 2 });
    }
    if (choice === answer) {
      this.setState({ showResult: 1 });
    } else {
      this.setState({ showResult: 2 });
    }
  };
  render() {
    const { ChallengeDetailReducer, classes, Challenges } = this.props;
    const {
      level,
      choice_1,
      choice_1_voice,
      choice_2,
      choice_2_voice,
      image,
      question,
      explanation
    } = ChallengeDetailReducer;
    if (question !== undefined) {
      console.log(Challenges);
    }
    console.log(this.findIndex());
    return (
      <React.Fragment>
        <Paper
          style={{ minHeight: "20vh", padding: "5px", textAlign: "center" }}
          className={classes.cardHover}
        >
          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" component="h3">
              {`Câu ${this.findIndex() + 1}`}
            </Typography>
            <Typography variant="h6" component="h3">
              <Rating value={level} readOnly max={3} />
            </Typography>
          </Box>
          <Divider style={{ backgroundColor: "#3e51b5", marginBottom: "1%" }} />
          <CardMedia component="img" src={image} />
          <Typography style={{ margin: "2% 0" }}>
            {question ? question.replace(/&quot;/g, '"') : ""}
          </Typography>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1%"
            }}
          >
            <Button
              onClick={() => this.checkAnswer(1)}
              style={{ width: "80%", border: "1px solid #3e51b5" }}
              className={`${
                this.state.showResult === 1 && this.state.position === 1
                  ? "animated flash"
                  : ""
              } ${
                this.state.showResult === 2 && this.state.position === 1
                  ? "animated shake"
                  : ""
              }`}
            >
              {choice_1}
            </Button>
            {this.state.position === 1 ? this.renderShowResult() : ""}
            <Tooltip title="Nói đoạn hội thoại">
              <IconButton onClick={() => this.playMp3(1)}>
                <SpeakIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1%"
            }}
          >
            <Button
              onClick={() => this.checkAnswer(2)}
              style={{ width: "80%", border: "1px solid #3e51b5" }}
              className={`${
                this.state.showResult === 1 && this.state.position === 2
                  ? "animated flash"
                  : ""
              } ${
                this.state.showResult === 2 && this.state.position === 2
                  ? "animated shake"
                  : ""
              }`}
            >
              {choice_2}
            </Button>
            {this.state.position === 2 ? this.renderShowResult() : ""}
            <Tooltip title="Nói đoạn hội thoại">
              <IconButton onClick={() => this.playMp3(2)}>
                <SpeakIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Paper>
        <Dialog
          open={this.state.openExplanation}
          onClose={this.onCloseExplanation}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Nội dung giải thích</DialogTitle>
          <CardMedia component="img" src={image} />
          <DialogContent>
            <DialogContentText>
              {explanation ? explanation.replace(/&quot;/g, '"') : ""}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>this.onCloseExplanation()} color="primary">
              Đóng
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default withStyles(StylesChallengeDetail)(ChallengeDetail);
