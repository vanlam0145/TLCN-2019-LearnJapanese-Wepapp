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
    return (
      <React.Fragment>
        <Box ml={20} mr={20} mt={2}>
          <Typography
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "2%",
              textTransform: "uppercase",
            }}
            variant="h5"
          >
            Danh sách chủ đề học
          </Typography>
          <Grid
            container
            spacing={4}
            style={{
              display: "flex",
              justifyContent: "center",
              height: "80vh"
            }}
          >
            {this.props.children}
          </Grid>
        </Box>
      </React.Fragment>
    );
  }
}

export default CourseItem;
