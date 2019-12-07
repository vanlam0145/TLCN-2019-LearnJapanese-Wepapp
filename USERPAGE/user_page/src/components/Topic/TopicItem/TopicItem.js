import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import StylesTopicItem from "./StylesTopicItem";

class CourseItem extends Component {
  render() {
    const { topic, classes, Courses, onDelete } = this.props;
    console.log(topic);
    return (
      <React.Fragment>
        <Link style={{ textDecoration: "none" }} to={"/topics/" + topic._id}>
          <Paper
            style={{ minHeight: "20vh", padding: "5px", textAlign: "center" }}
            className={classes.cardHover}
          >
            <Typography variant="h6" component="h3">
              {`Bài học số ${topic.lesson_number}`}
            </Typography>
            <Divider style={{backgroundColor: "#3e51b5"}}/>
            <Typography component="p" style={{marginTop: "13%"}}>{topic.title}</Typography>
          </Paper>
        </Link>
      </React.Fragment>
    );
  }
}

export default withStyles(StylesTopicItem)(CourseItem);
