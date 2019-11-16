import React, { Component } from "react";
import StylesAddCourses from "./StylesAddCourse";
import { withStyles } from "@material-ui/core/styles";
import MaterialTable from "material-table";
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
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TableRow from "@material-ui/core/TableRow";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import Badge from "@material-ui/core/Badge";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Tooltip from "@material-ui/core/Tooltip";
import CardHeader from "@material-ui/core/CardHeader";
import InputAdornment from "@material-ui/core/InputAdornment";
import DialogActions from "@material-ui/core/DialogActions";
class AddCourse extends Component {
  renderCard = data => {
    let xhtml = null;
    xhtml = data.map((item, index) => {
      console.log(index);
      return (
        <Card style={{ marginBottom: "4%" }}>
          <CardHeader title={index + 1} />
          <Divider />
          <CardContent>
            <Grid container spacing={5} style={{ padding: 0 }}>
              <Grid item xs={6}>
                <Box m={3}>
                  <TextField
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
    //console.log(dataOfCourse);
    const { content } = data;
    console.log(content);
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
              //   value={value}
              //   onChange={handleChange}
              className={classes.textField}
              margin="normal"
            />
          </Box>
          <Box m={8}>
            {/* <MaterialTable
              title="Create your new words at here"
              columns={columns}
              data={dataOfCourse.content}
              editable={{
                onRowAdd: newData =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        const data = [...dataOfCourse.content];
                        console.log(data);
                        // const data=dataOfCourses
                        data.push(newData);
                        onChange(data);
                      }
                      resolve();
                    }, 1000);
                  }),
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        const data = [...dataOfCourse.content];
                        const index = data.indexOf(oldData);
                        data[index] = newData;
                        console.log("data change: ", data);
                        onChange(data);
                      }
                      resolve();
                    }, 1000);
                  }),
                onRowDelete: oldData =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        let data = [...dataOfCourse.content];
                        const index = data.indexOf(oldData);
                        data.splice(index, 1);
                        console.log("data change: ", data);
                        onChange(data);
                      }
                      resolve();
                    }, 1000);
                  })
              }}
            /> */}
            {/* <Paper className={classes.root} style={{ marginBottom: "4%" }}>
              <Grid container spacing={5} style={{ padding: 0 }}>
                <Grid item xs={6}>
                  <Box m={3}>
                    <TextField
                      style={{ margin: "1%" }}
                      fullWidth
                      id="standard-textarea"
                      label="Multiline Placeholder"
                      placeholder="Placeholder"
                      multiline
                      className={classes.textField}
                      margin="normal"
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box m={3}>
                    <TextField
                      style={{ margin: "1%" }}
                      fullWidth
                      id="standard-textarea"
                      label="Multiline Placeholder"
                      placeholder="Placeholder"
                      multiline
                      className={classes.textField}
                      margin="normal"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Paper>
            <Paper className={classes.root} style={{ marginBottom: "4%" }}>
              <Grid container spacing={5}>
                <Grid item xs={6}>
                  <Box m={3}>
                    <TextField
                      style={{ margin: "1%" }}
                      fullWidth
                      id="standard-textarea"
                      label="Multiline Placeholder"
                      placeholder="Placeholder"
                      multiline
                      className={classes.textField}
                      margin="normal"
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box m={3}>
                    <TextField
                      style={{ margin: "1%" }}
                      fullWidth
                      id="standard-textarea"
                      label="Multiline Placeholder"
                      placeholder="Placeholder"
                      multiline
                      className={classes.textField}
                      margin="normal"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Paper> */}
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
              // onClick={onHandleSubmit}
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
