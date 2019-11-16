import React, { Component } from "react";
import StylesGetMe from "./StylesGetMe";
import { withStyles } from "@material-ui/core/styles";
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
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Tooltip from "@material-ui/core/Tooltip";
import InputAdornment from "@material-ui/core/InputAdornment";
import DialogActions from "@material-ui/core/DialogActions";
class GetMe extends Component {
  componentDidMount() {
    const { getmeRequest } = this.props;
    getmeRequest();
  }
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
      touched
    } = this.props;
    const { _id, username, email, create_at, avatar } = getme;
    return (
      <React.Fragment>
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
                      fullWidth
                      style={{ marginBottom: 20 }}
                      className={classes.margin}
                      id="input-with-icon-textfield"
                      name="newUsername"
                      value={newUsername}
                      label="New Username"
                      onChange={handleChange}
                      error={errors.newUsername===undefined?false:true}
                      helperText={errors.newUsername}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        )
                      }}
                    />
                    <TextField
                      fullWidth
                      className={classes.margin}
                      id="input-with-icon-textfield"
                      name="password"
                      label="Your Password"
                      type={showPassword ? "text" : "password"}
                      onChange={handleChange}
                      value={password}
                      helperText={errors.password}
                      error={errors.password===undefined?false:true}
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
