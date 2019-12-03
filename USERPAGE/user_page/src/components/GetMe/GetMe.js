import React, { Component } from "react";
import StylesGetMe from "./StylesGetMe";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
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
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Tooltip from "@material-ui/core/Tooltip";
import InputAdornment from "@material-ui/core/InputAdornment";
import DialogActions from "@material-ui/core/DialogActions";
class GetMe extends Component {
  componentDidMount() {
    const { getmeRequest, getme } = this.props;
    console.log(getme);
    if (!getme.username) {
      getmeRequest();
    }
  }
  onChangeTest = e => {
    console.log("lay name filed: ", e);
    // this.props.setFieldTouched(name, true, false)
  };
  checkDisabled = () => {
    var result = null;
    const { newUsername, password, errors } = this.props;
    console.log("newUsername: ", newUsername);
    console.log("password: ", password);
    console.log("errors: ", errors);
    if (newUsername === "" || password === "") {
      result = true;
    }
    if (errors.newUsername || errors.password) {
      result = true;
    }
    return result;
  };
  render() {
    const {
      classes,
      getme,
      onChange,
      image,
      disabled,
      onHandleSubmit,
      openDialog,
      closeDialog,
      open,
      handleClickShowPassword,
      handleMouseDownPassword,
      showPassword,
      password,
      onChangeImage,
      handleChange,
      onHandleSubmitImage,
      errors,
      newUsername,
      touched,
      handleBlur,
      setFieldTouched
    } = this.props;
    const { _id, username, email, create_at, avatar } = getme;
    console.log("getme: ", getme);
    console.log("touched username: ", touched.newUsername);
    console.log("touched password: ", touched.password);
    console.log("loi truyen tu formik: ", errors);
    return (
      <React.Fragment>
        <Typography component="div">
          <Box textAlign="center" fontSize={40} mt={3} letterSpacing={2}>
            About Information
          </Box>
        </Typography>
        <Grid container className={classes.container}>
          <Grid item xs={4} className={classes.avatar}>
            <Avatar src={image} className={classes.SizeAvatar} />
            <Box>
              <Tooltip title="Edit Avatar">
                <IconButton
                  variant="contained"
                  color="primary"
                  className={classes.ButtonChangeAvatar}
                >
                  <label htmlFor="raised-button-file">
                    <EditAvatar />
                  </label>
                </IconButton>
              </Tooltip>
              <Tooltip title="Save Change">
                <IconButton
                  variant="contained"
                  color="primary"
                  className={classes.ButtonChangeAvatar}
                  disabled={disabled}
                  onClick={onHandleSubmitImage}
                >
                  <SaveAvatar />
                </IconButton>
              </Tooltip>
            </Box>
            <input
              accept="image/*"
              className={classes.input}
              id="raised-button-file"
              multiple
              type="file"
              onChange={e => onChangeImage(e)}
            />
          </Grid>
          <Grid item xs={8} className={classes.SideInfor}>
            <Typography className={classes.UserInfor} variant="h5">
              id: {_id}
            </Typography>
            <Box display="flex">
              <Typography variant="h5" className={classes.UserInfor}>
                username: {username}
              </Typography>
              <Tooltip title="Edit Username">
                <IconButton
                  variant="contained"
                  color="primary"
                  className={classes.ButtonChangeUsername}
                  onClick={openDialog}
                >
                  <EditAvatar />
                </IconButton>
              </Tooltip>
              <Dialog open={open} onClose={closeDialog} maxWidth="xs" fullWidth>
                <DialogTitle>Change your username</DialogTitle>
                <DialogContent>
                  <form>
                    <TextField
                      id="newUsername"
                      fullWidth
                      style={{ marginBottom: 20 }}
                      className={classes.margin}
                      id="input-with-icon-textfield"
                      name="newUsername"
                      value={newUsername}
                      label="New Username"
                      onChange={handleChange}
                      error={
                        errors.newUsername && touched.newUsername ? true : false
                      }
                      // error={touched.newUsername ? true : false}
                      helperText={touched.newUsername ? errors.newUsername : ""}
                      onKeyUp={() =>
                        setFieldTouched("newUsername", true, false)
                      }
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        )
                      }}
                    ></TextField>
                    <TextField
                      fullWidth
                      onKeyUp={() => {
                        setFieldTouched("password", true, false);
                      }}
                      className={classes.margin}
                      id="input-with-icon-textfield"
                      name="password"
                      label="Your Password"
                      type={showPassword ? "text" : "password"}
                      onChange={handleChange}
                      value={password}
                      helperText={touched.password ? errors.password : ""}
                      error={errors.password && touched.password ? true : false}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockIcon />
                          </InputAdornment>
                        ),
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
                  </form>
                </DialogContent>
                <DialogActions>
                  <Button autoFocus color="primary" onClick={closeDialog}>
                    Cancel
                  </Button>
                  <Button
                    color="primary"
                    autoFocus
                    onClick={e => onHandleSubmit(e)}
                    type="submit"
                    disabled={this.checkDisabled()}
                  >
                    Ok
                  </Button>
                </DialogActions>
              </Dialog>
            </Box>
            <Typography className={classes.UserInfor} variant="h5">
              email: {email}
            </Typography>
            <Typography className={classes.UserInfor} variant="h5">
              created day: {create_at}
            </Typography>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(StylesGetMe)(GetMe);
