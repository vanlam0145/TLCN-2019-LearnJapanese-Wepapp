import React, { Component } from "react";
import StylesCourseDetail from "./StylesCourseDetail";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import EditAvatar from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import SaveAvatar from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Tooltip from "@material-ui/core/Tooltip";
import MobileStepper from "@material-ui/core/MobileStepper";
import InputAdornment from "@material-ui/core/InputAdornment";
import DialogActions from "@material-ui/core/DialogActions";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import BookIcon from "@material-ui/icons/Book";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import HelpIcon from "@material-ui/icons/Help";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";
const theme = () => {};
const tutorialSteps = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80"
  },
  {
    label: "NeONBRAND Digital Marketing, Las Vegas, United States",
    imgPath:
      "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60"
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
  }
];
class CourseDetail extends Component {
  state = {
    value: 0,
    activeStep: 0,
    activeStepLearn: 0
  };
  checkAnswer = index => {
    const { learnCourse } = this.props;
    const { activeStepLearn } = this.state;
    console.log("ket qua la: ", learnCourse[activeStepLearn].answer_id);
    console.log("dap an chon la: ", index);
    console.log("do dai: ", learnCourse[activeStepLearn])
    if (learnCourse[activeStepLearn].answer_id === index) {
      if (activeStepLearn < learnCourse[activeStepLearn].answers.length) {
        this.handleNextLearn();
      } else {
        alert("Da hoan thanh");
      }
    }
  };
  renderAnswers = answers => {
    let xhtml = null;
    xhtml = answers.map((answer, index) => {
      return (
        <Button onClick={() => this.checkAnswer(index)}>{`${answer}`}</Button>
      );
    });
    return xhtml;
  };
  renderQuestions = questions => {
    const { activeStepLearn } = this.state;
    console.log(questions[activeStepLearn]);
    let xhtml = null;
    if (questions.length !== 0) {
      xhtml = (
        <React.Fragment>
          <Box>
            <Typography>{`question ${activeStepLearn + 1}: ${
              questions[activeStepLearn].question
            }?`}</Typography>
            <Box mt={3}>
              {this.renderAnswers(questions[activeStepLearn].answers)}
            </Box>
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
            style={{ padding: 0, justifyContent: "center" }}
          >
            <Typography>{words[activeStep].text}</Typography>
          </Paper>
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
            style={{ padding: 0, justifyContent: "center" }}
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
      activeStepLearn: prevState.activeStepLearn + 1
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
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  };
  render() {
    const { classes, courseDetail, onDeleteCourse, learnCourse } = this.props;
    const { value } = this.state;
    const { TabContainer } = this;
    const { activeStep, activeStepLearn } = this.state;
    const { title, contents } = courseDetail;
    console.log("courseDetail: ", courseDetail.title);
    var maxSteps = 0;
    if (courseDetail.contents) {
      maxSteps = courseDetail.contents.length;
    } else {
      maxSteps = 0;
    }
    console.log("du lieu duoc tai: ", courseDetail);
    return (
      <React.Fragment>
        <Grid container style={{ height: "80vh" }}>
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
                <Box m={8}>
                  <div className={classes.root}>
                    <Paper
                      square
                      elevation={0}
                      className={classes.header}
                      style={{ justifyContent: "center", padding: 0 }}
                    >
                      <Typography style={{ float: "left" }}>
                        Tên khoá học: {title}
                      </Typography>
                    </Paper>
                    <Divider />
                    {this.renderText(contents)}
                    <img
                      className={classes.img}
                      src={tutorialSteps[activeStep].imgPath}
                      alt={tutorialSteps[activeStep].label}
                    />
                    {this.renderMean(contents)}
                    <MobileStepper
                      steps={maxSteps}
                      position="static"
                      activeStep={activeStep}
                      className={classes.mobileStepper}
                      nextButton={
                        <Button
                          size="small"
                          onClick={this.handleNext}
                          disabled={activeStep === maxSteps - 1}
                        >
                          Next
                          {theme.direction === "rtl" ? (
                            <KeyboardArrowLeft />
                          ) : (
                            <KeyboardArrowRight />
                          )}
                        </Button>
                      }
                      backButton={
                        <Button
                          size="small"
                          onClick={this.handleBack}
                          disabled={activeStep === 0}
                        >
                          {theme.direction === "rtl" ? (
                            <KeyboardArrowRight />
                          ) : (
                            <KeyboardArrowLeft />
                          )}
                          Back
                        </Button>
                      }
                    />
                  </div>
                </Box>
              </TabContainer>
            )}
            {value === 1 && (
              <div
                style={{
                  backgroundColor: "white",
                  height: "50vh",
                  width: "30vw"
                }}
              >
                {this.renderQuestions(learnCourse)}
                <MobileStepper
                  steps={maxSteps}
                  position="static"
                  activeStep={activeStepLearn}
                  className={classes.mobileStepper}
                  nextButton={
                    <Button
                      size="small"
                      onClick={this.handleNextLearn}
                      disabled={activeStepLearn === maxSteps - 1}
                    >
                      Next
                      {theme.direction === "rtl" ? (
                        <KeyboardArrowLeft />
                      ) : (
                        <KeyboardArrowRight />
                      )}
                    </Button>
                  }
                  backButton={
                    <Button
                      size="small"
                      onClick={this.handleBackLearn}
                      disabled={activeStepLearn === 0}
                    >
                      {theme.direction === "rtl" ? (
                        <KeyboardArrowRight />
                      ) : (
                        <KeyboardArrowLeft />
                      )}
                      Back
                    </Button>
                  }
                />
              </div>
            )}
          </Grid>
        </Grid>
        <div>
          <Box mt={3} ml={5} mr={3}>
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="h5">Chinh sua khoa hoc</Typography>
              </Grid>
              <Grid
                item
                xs={6}
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Button onClick={onDeleteCourse}>xoa khoa hoc</Button>
              </Grid>
            </Grid>
          </Box>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(StylesCourseDetail, { withTheme: true })(
  CourseDetail
);
