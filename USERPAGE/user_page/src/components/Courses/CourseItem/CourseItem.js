import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import StylesCourseItem from './StylesCourseItem';

class CourseItem extends Component {
  render() {

    const { course, classes, Courses, onDelete } = this.props;
    const date = new Date(course.create_at);
    const length = course.contents.length;
    return (
      <React.Fragment>
        <Link
          style={{ textDecoration: "none" }}
          to={"/courses/" + course._id}
        >
          <Card className={classes.cardHover}>
            <CardHeader
              avatar={<Avatar src={Courses.courses.avatar}></Avatar>}
              title={"Người tạo: " + Courses.courses.username}
              subheader={"Ngày tạo: " + `${date.toLocaleTimeString()} - ${date.toLocaleDateString()}`}
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
          </Card>
        </Link>
      </React.Fragment>
    );
  }
}

export default withStyles(StylesCourseItem)(CourseItem);
