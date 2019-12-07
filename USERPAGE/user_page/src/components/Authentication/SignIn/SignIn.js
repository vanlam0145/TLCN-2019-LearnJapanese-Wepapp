import React, { Component } from "react";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core";
import stylesSignIn from "./StylesSignIn";
class SignIn extends Component {
  render() {
    const {
      classes,
      onHandleSubmit,
      handleClickShowPassword,
      handleMouseDownPassword,
      showPassword,
      handleChange,
      values
    } = this.props;
    const {username, password, remember}=values
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
              onSubmit={event => onHandleSubmit(event)}
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={username}
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                // error={testError}
                //autoFocus
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={password}
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  )
                }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="remember"
                    value={remember}
                    checked={remember}
                    className={classes.remember}
                    onChange={handleChange}
                    color='primary'
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
