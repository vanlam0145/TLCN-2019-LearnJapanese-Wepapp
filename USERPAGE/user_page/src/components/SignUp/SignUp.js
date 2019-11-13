import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import stylesSignUp from "./StylesSignUp";
class SignUp extends Component {
  render() {
    const {
      classes,
      onChange,
      onHandleSubmit,
      errorUsername,
      errorEmail,
      errorPassword,
      errorRetypePassword
    } = this.props;
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <form
              className={classes.form}
              noValidate
              onSubmit={event => onHandleSubmit(event)}
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={e => onChange(e)}
                error={errorEmail === "" ? false : true}
                helperText={errorEmail}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                error={errorUsername === "" ? false : true}
                autoComplete="username"
                helperText={errorUsername}
                onChange={e => onChange(e)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                error={errorPassword === "" ? false : true}
                helperText={errorPassword}
                autoComplete="current-password"
                onChange={e => onChange(e)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="retypepassword"
                label="Re-type Password"
                type="password"
                id="retypepassword"
                error={errorRetypePassword === "" ? false : true}
                helperText={errorRetypePassword}
                autoComplete="current-password"
                onChange={e => onChange(e)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}
SignUp.propTypes={
  classes: PropTypes.object,
}
export default withStyles(stylesSignUp)(SignUp);
