import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link, withRouter } from "react-router-dom";
class CourseItem extends Component {
  render() {
    const { course, classes, Courses, onDelete } = this.props;
    const length = course.contents.length;
    return (
      <React.Fragment>
        <Link style={{ textDecoration: "none" }} to={"/courses/" + course._id}>
          <Card style={{minHeight:"20vh"}}>
            <CardHeader
              avatar={<Avatar src={Courses.courses.avatar}></Avatar>}
              title={Courses.courses.username}
              subheader={"Created day: " + `${Courses.courses.create_at}`}
            />
            <CardMedia
              image="../../assets/loading.gif"
              title="Your custom image"
            />
            <CardContent>
              <Grid container spacing={5}>
                <Box ml={9.5}>
                  <Typography component="h3">
                    Tên khoá học: {course.title}
                  </Typography>
                  <Typography component="h4">{length} thuật ngữ</Typography>
                </Box>
              </Grid>
            </CardContent>
            {/* <CardActions>
            <Tooltip title="Edit your content">
              <IconButton>
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete your course">
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </CardActions> */}
          </Card>
        </Link>
      </React.Fragment>
    );
  }
}

export default CourseItem;
