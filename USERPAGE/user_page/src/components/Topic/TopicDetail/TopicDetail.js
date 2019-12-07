import React, { Component } from "react";
import _ from "lodash";
import StylesTopicDetail from "./StylesTopicDetail";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import MobileStepper from "@material-ui/core/MobileStepper";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import BookIcon from "@material-ui/icons/Book";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Pagination from "material-ui-flat-pagination";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import SpeakIcon from "@material-ui/icons/VolumeUp";
import RightIcon from "@material-ui/icons/CheckCircle";
import WrongIcon from "@material-ui/icons/Cancel";
import Speech from "speak-tts";
const theme = () => {};
class TopicDetail extends Component {
  state = {
    value: 0,
    activeStep: 0,
    activeStepLearn: 0,
    offset: 0,
    page_number: 0,
    showResult: 0,
    indexHover: false,
    indexAnswer: null,
    isComplete: false
  };
  onSpeak = word => {
    console.log(word);
    const speech = new Speech();
    speech.setLanguage("ja-JP");
    speech.setRate(0.7);
    speech.setPitch(1.4);
    speech.speak({
      text: `${word}`
    });
  };
  handleClick(offset) {
    let value = 0;
    console.log("click: ", offset);
    if (offset > this.state.offset) {
      value = offset / 10;
      this.setState({
        page_number: value
      });
    }
    if (offset < this.state.offset) {
      if (offset === 0) {
        this.setState({ page_number: 0 });
      } else {
        this.setState({
          page_number: offset / 10
        });
      }
    }
    this.setState({ offset });
  }
  onSpeak = word => {
    console.log(word);
    const speech = new Speech();
    speech.setLanguage("ja-JP");
    speech.setRate(0.7);
    speech.setPitch(1.4);
    speech.speak({
      text: `${word}`
    });
  };
  checkAnswer = index => {
    const { learnTopic } = this.props;
    const { activeStepLearn } = this.state;
    // console.log("ket qua la: ", learnCourse[activeStepLearn].answer_id);
    // console.log("dap an chon la: ", index);
    // console.log("do dai: ", learnCourse[activeStepLearn]);
    if (learnTopic[activeStepLearn].answer_id === index) {
      if (activeStepLearn < learnTopic.length - 1) {
        this.setState({
          showResult: 1,
          indexHover: true,
          indexAnswer: index,
        });
      } else {
        this.setState({ isComplete: true });
      }
    } else {
      this.setState({
        showResult: 2
      });
    }
  };
  renderAnswers = answers => {
    const { indexHover, indexAnswer } = this.state;
    const { classes } = this.props;
    let xhtml = null;
    xhtml = answers.map((answer, index) => {
      return (
        <Box style={{ textAlign: "center" }}>
          <Button
            onClick={() => this.checkAnswer(index)}
            style={{ margin: "2%" }}
            className={`${classes.answerHover} ${
              index === indexAnswer ? classes.answer : ""
            }`}
            //className={index===indexAnswer?classes.answer:""}
            disabled={indexHover === true ? true : false}
          >
            <Paper
              style={{
                height: "25vh",
                width: "25vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >{`${answer}`}</Paper>
          </Button>
        </Box>
      );
    });
    return xhtml;
  };
  onResetLearn = () => {
    this.setState({
      isComplete: false,
      showResult: 0,
      activeStepLearn: 0
    });
  };
  renderExam = () => {
    const { learnTopic } = this.props;
    const { activeStepLearn, isComplete } = this.state;
    let xhtml = null;
    if (isComplete === false) {
      xhtml = (
        <React.Fragment>
          {this.renderQuestions(learnTopic)}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {this.renderAnswers(learnTopic[activeStepLearn].answers)}
          </div>
          <div style={{ marginTop: "3%" }}>{this.renderShowResult()}</div>
        </React.Fragment>
      );
    } else {
      xhtml = (
        <React.Fragment>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center"
            }}
          >
            Bạn đã hoàn thành khoá học!
            <Button onClick={() => this.onResetLearn()}>Thử lại</Button>
          </div>
          ;
        </React.Fragment>
      );
    }
    return xhtml;
  };
  renderQuestions = questions => {
    const { activeStepLearn } = this.state;
    console.log(questions[activeStepLearn]);
    let xhtml = null;
    if (questions.length !== 0) {
      xhtml = (
        <React.Fragment>
          <Box style={{ textAlign: "center", marginTop: "3%" }}>
            <Typography>{`Câu hỏi ${activeStepLearn + 1}: ${
              questions[activeStepLearn].question
            }?`}</Typography>
          </Box>
        </React.Fragment>
      );
    }
    return xhtml;
  };
  renderText = words => {
    const { classes } = this.props;
    const { activeStep } = this.state;
    let xhtml = null;
    if (words) {
      xhtml = (
        <React.Fragment>
          <Paper
            square
            elevation={0}
            className={classes.header}
            style={{
              padding: 0,
              justifyContent: "center",
              backgroundColor: "inherit",
              color: "white"
            }}
          >
            <Typography>{words[activeStep].text}</Typography>
          </Paper>
        </React.Fragment>
      );
    }
    return xhtml;
  };
  renderShowResult = () => {
    let xhtml = null;
    if (this.state.showResult === 1) {
      xhtml = (
        <React.Fragment>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <RightIcon style={{ color: "green" }} />
            <Button onClick={() => this.handleNextLearn()}>Tiếp tục</Button>
          </Box>
        </React.Fragment>
      );
    }
    if (this.state.showResult === 2) {
      xhtml = (
        <React.Fragment>
          <Box style={{ textAlign: "center" }}>
            <WrongIcon style={{ color: "red" }} />
          </Box>
        </React.Fragment>
      );
    }
    return xhtml;
  };
  renderMean = words => {
    const { classes } = this.props;
    const { activeStep } = this.state;
    let xhtml = null;
    if (words) {
      xhtml = (
        <React.Fragment>
          <Paper
            square
            elevation={0}
            className={classes.header}
            style={{
              padding: 0,
              justifyContent: "center",
              backgroundColor: "inherit",
              color: "white"
            }}
          >
            <Typography>{words[activeStep].mean}</Typography>
          </Paper>
        </React.Fragment>
      );
    }
    return xhtml;
  };
  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1
    }));
  };
  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1
    }));
  };
  handleNextLearn = () => {
    this.setState(prevState => ({
      activeStepLearn: prevState.activeStepLearn + 1,
      showResult: 0,
      indexHover: false,
      indexAnswer: null
    }));
  };
  handleBackLearn = () => {
    this.setState(prevState => ({
      activeStepLearn: prevState.activeStepLearn - 1
    }));
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  TabContainer = props => {
    return (
      <Typography component="div" style={{ height: "100%", width: "100%" }}>
        {props.children}
      </Typography>
    );
  };
  renderRows = vocabularies => {
    const { page_number } = this.state;
    let xhtml = null;
    if (vocabularies !== undefined) {
      console.log("du lieu duoc tai: ", vocabularies);
      console.log("helloghgfhfgh");
      xhtml = vocabularies.map((word, index) => {
        if (page_number * 10 <= index && index < (page_number + 1) * 10) {
          return (
            <React.Fragment>
              <TableRow>
                <TableCell align="center">{word.text}</TableCell>
                <TableCell align="center">{word.mean}</TableCell>
                <TableCell align="center">{word.meaning}</TableCell>
                <TableCell align="center">{word.kanji_text}</TableCell>
                <TableCell align="center">
                  <IconButton onClick={() => this.onSpeak(word.text)}>
                    <SpeakIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            </React.Fragment>
          );
        }
      });
    }
    return xhtml;
  };
  renderPanigation = () => {
    const { vocabularies } = this.props.topicDetail;
    let xhtml = null;
    if (vocabularies !== undefined) {
      xhtml = (
        <Pagination
          style={{ textAlign: "center" }}
          limit={10}
          offset={this.state.offset}
          total={vocabularies.length}
          onClick={(e, offset) => this.handleClick(offset)}
        />
      );
    }
    return xhtml;
  };
  render() {
    const { classes, topicDetail, learnTopic } = this.props;
    const { value } = this.state;
    const { vocabularies } = topicDetail;
    const { TabContainer, onSpeak } = this;
    const { activeStep, activeStepLearn, isComplete } = this.state;
    console.log("hoc: ", learnTopic);
    var maxSteps = 0;
    if (topicDetail.contents) {
      maxSteps = topicDetail.contents.length;
    } else {
      maxSteps = 0;
    }
    return (
      <React.Fragment>
        <Grid container style={{ height: "95vh" }}>
          <Grid item xs={2}>
            <AppBar
              position="static"
              color="default"
              style={{ height: "100%", boxShadow: "none" }}
            >
              <Tabs
                value={value}
                onChange={this.handleChange}
                variant="fullWidth"
                scrollButtons="on"
                indicatorColor="primary"
                textColor="primary"
                orientation="vertical"
              >
                <Tab label="Course" icon={<BookIcon />} />
                <Tab label="Learn" icon={<FavoriteIcon />} />
              </Tabs>
            </AppBar>
          </Grid>
          <Grid
            item
            xs={10}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#f5f5f5"
            }}
          >
            {value === 0 && (
              <TabContainer>
                <Paper style={{ margin: "1%" }}>
                  <Table className={classes.table}>
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">Từ</TableCell>
                        <TableCell align="center">Nghĩa</TableCell>
                        <TableCell align="center">Nghĩa chi tiết</TableCell>
                        <TableCell align="center">
                          Chữ Kanji tương ứng
                        </TableCell>
                        <TableCell align="center">Phát âm</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>{this.renderRows(vocabularies)}</TableBody>
                  </Table>
                </Paper>
                {this.renderPanigation()}
              </TabContainer>
            )}

            {/* tab hoc */}
            {value === 1 && (
              <div
                style={{
                  backgroundColor: "white",
                  height: "90%",
                  width: "90%"
                }}
              >
                {this.renderExam()}
              </div>
            )}
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(StylesTopicDetail, { withTheme: true })(TopicDetail);
