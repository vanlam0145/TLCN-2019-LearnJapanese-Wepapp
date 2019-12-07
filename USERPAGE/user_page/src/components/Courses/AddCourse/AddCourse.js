import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { Component } from 'react';

import StylesAddCourses from './StylesAddCourse';

class AddCourse extends Component {
  renderCard = data => {
    const { onDeleteCard } = this.props
    let xhtml = null;
    xhtml = data.map((item, index) => {
      return (
        <Card key={index} style={{ marginBottom: "4%" }}>
          <CardHeader
            title={index + 1}
            action={
              <Tooltip title="Xoa the nay">
                <IconButton onClick={() => onDeleteCard(index)} >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            }
          />
          <Divider />
          <CardContent>
            <Grid container spacing={5} style={{ padding: 0 }}>
              <Grid item xs={6}>
                <Box m={3}>
                  <TextField
                    value={item.text}
                    name="text"
                    required
                    style={{ margin: "1%" }}
                    fullWidth
                    id="standard-textarea"
                    label="New Word"
                    placeholder="Enter your new word at here"
                    multiline
                    margin="normal"
                    onChange={e => this.props.onChange(e, index)}
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box m={3}>
                  <TextField
                    name="mean"
                    value={item.mean}
                    required
                    style={{ margin: "1%" }}
                    fullWidth
                    id="standard-textarea"
                    label="Mean Of Word"
                    placeholder="Enter mean of word you just entered"
                    multiline
                    margin="normal"
                    onChange={e => this.props.onChange(e, index)}
                  />
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      );
    });
    return xhtml;
  };
  render() {
    const {
      classes,
      AddCourseValues,
      data,
      onChange,
      onHandleSubmit,
      handleChange,
      CourseName,
      onAddNewCard
    } = this.props;
    const { dataOfCourse } = AddCourseValues;
    const { content } = data;
    return (
      <React.Fragment>
        <form onSubmit={onHandleSubmit}>
          <Box ml={8}>
            <TextField
              required
              id="standard-multiline-flexible"
              name="CourseName"
              label="Ten khoa hoc"
              value={CourseName}
              onChange={handleChange}
              rowsMax="4"
              className={classes.textField}
              margin="normal"
            />
          </Box>
          <Box m={8}>
            {this.renderCard(content)}
            <Button fullWidth variant="contained" onClick={onAddNewCard}>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  Tao the moi
                </Grid>
              </Grid>
            </Button>

            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              style={{ float: "right", marginTop: "2%" }}
              type="submit"
            >
              Create
            </Button>
          </Box>
        </form>
      </React.Fragment>
    );
  }
}

export default withStyles(StylesAddCourses)(AddCourse);
