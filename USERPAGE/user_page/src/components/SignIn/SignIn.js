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
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import stylesSignIn from "./StylesSignIn";
class SignIn extends Component {
  render() {
    const { classes, signin, onChange, onHandleSubmit } = this.props;
    const { requesting, successful, messages, errors } = signin;
    const testError = false;
    const test = "khong hop le";
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
              Sign In
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
                id="username"
                label={testError ? `${test}` : "Username"}
                name="username"
                autoComplete="username"
                error={testError}
                //autoFocus
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
                autoComplete="current-password"
                onChange={e => onChange(e)}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    className={classes.remember}
                    onChange={e => onChange(e)}
                  />
                }
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container className={classes.container}>
                <Grid item xs className={classes.forgot}>
                  <Link to="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item xs className={classes.signup}>
                  <Link to="/signup" variant="body2" className={classes.hover}>
                    Don't have account? Sign up
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}
export default withStyles(stylesSignIn)(SignIn);
