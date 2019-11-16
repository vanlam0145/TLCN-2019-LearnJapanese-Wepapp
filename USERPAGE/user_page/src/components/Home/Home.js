import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core";
import CardItem from "../CardItem/CardItem";
import stylesHome from "./StyleHome";
class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Box ml={8} mr={8} mt={2}>
          <Grid container spacing={4}>
            {this.props.children}
          </Grid>
        </Box>
      </React.Fragment>
    );
  }
}
export default withStyles(stylesHome)(Home);
