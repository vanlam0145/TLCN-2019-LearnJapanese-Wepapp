import React, { Component } from "react";
import StylesGetMe from "./StylesGetMe";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
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
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import SetQuestionIcon from "@material-ui/icons/ImportContacts";
class GetMe extends Component {
  componentDidMount() {
    const { getmeRequest, getme } = this.props;
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
    //console.log("newUsername: ", newUsername);
    //console.log("password: ", password);
    //console.log("errors: ", errors);
    if (newUsername === "" || password === "") {
      result = true;
    }
    if (errors.newUsername || errors.password) {
      result = true;
    }
    return result;
  };
  directHome = () => {
    //console.log("ve trang home");
    this.props.history.push("/");
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
      openSetQuestion,
      openSetUsername,
      handleClickShowPassword,
      handleMouseDownPassword,
      showPassword,
      onHandleSubmitQuestion,
      password,
      onChangeImage,
      handleChange,
      onHandleSubmitImage,
      numberAnwser_form,
      sumQuestion_form,
      errors,
      newUsername,
      touched,
      handleBlur,
      setFieldTouched
    } = this.props;
    const {
      _id,
      username,
      email,
      create_at,
      avatar,
      courses,
      sumQuestion,
      numberAnswer,
      level,
      experience,
      histories
    } = getme;
    const thu = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"]
    const date = new Date(create_at);
    // console.log("getme: ", image);
    // console.log("touched username: ", touched.newUsername);
    // console.log("touched password: ", touched.password);
    // console.log("loi truyen tu formik: ", errors);
    return (
      <div>
        <React.Fragment>
          <Grid
            container
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1%"
            }}
          >
            <Card style={{ maxWidth: "600px", minWidth: "600px" }}>
              <CardHeader
                avatar={<Avatar src={image} />}
                action={
                  <React.Fragment>
                    <Tooltip title="Chỉnh sửa ảnh đại diện">
                      <IconButton>
                        <label htmlFor="raised-button-file">
                          <EditAvatar />
                        </label>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Lưu ảnh">
                      <IconButton
                        disabled={disabled}
                        onClick={onHandleSubmitImage}
                      >
                        <SaveAvatar />
                      </IconButton>
                    </Tooltip>
                  </React.Fragment>
                }
                title={username}
                subheader={`${date.toLocaleTimeString()} - ${thu[date.getDay()]} - ${date.toLocaleDateString()}`}
              />
              <CardContent>
                <Table className={classes.table} aria-label="simple table">
                  <TableBody>
                    <TableRow>
                      <TableCell align="left">Email</TableCell>
                      <TableCell align="center">{email}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left">Khoá học cá nhân</TableCell>
                      <TableCell align="center">
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={this.directHome}
                        >
                          {courses ? courses.length : ""} khoá học
                      </a>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left">Cấp độ {level}</TableCell>
                      <TableCell align="center">kinh nghiệm {experience}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left">Lịch sử kiểm tra</TableCell>
                      <TableCell align="center">0</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left">Bộ câu hỏi</TableCell>
                      <TableCell align="center">
                        {sumQuestion} câu hỏi | {numberAnswer} câu trả lời
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Cấp độ {level}</TableCell>
                    <TableCell align="center">kinh nghiệm {experience}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Lịch sử kiểm tra</TableCell>
                    <TableCell align="center">0</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Bộ câu hỏi</TableCell>
                    <TableCell align="center">
                      {sumQuestion} câu hỏi | {numberAnswer} câu trả lời
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardActions
              className={classes.actions}
              disableActionSpacing
              style={{ float: "right" }}
            >
              <Tooltip title="Chỉnh sửa tên(username)">
                <IconButton
                  aria-label="Add to favorites"
                  onClick={() => openDialog("openSetUsername")}
                >
                  <EditAvatar />
                </IconButton>
              </Tooltip>
              <Tooltip title="Cài đặt bộ câu hỏi">
                <IconButton
                  aria-label="Share"
                  onClick={() => openDialog("openSetQuestion")}
                >
                  <SetQuestionIcon />
                </IconButton>
              </Tooltip>
            </CardActions>
          </Card>
          {/* <Grid item xs={4} className={classes.avatar}>
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
          </Grid> */}
          </Grid>

          {/* input de thay doi avatar. mac dinh hide */}
          <input
            accept="image/*"
            className={classes.input}
            id="raised-button-file"
            multiple
            type="file"
            onChange={e => onChangeImage(e)}
          />

          {/* Dialog thay doi username */}
          <Dialog
            open={openSetUsername}
            onClose={closeDialog}
            maxWidth="xs"
            fullWidth
          >
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
                  error={errors.newUsername && touched.newUsername ? true : false}
                  // error={touched.newUsername ? true : false}
                  helperText={touched.newUsername ? errors.newUsername : ""}
                  onKeyUp={() => setFieldTouched("newUsername", true, false)}
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

          {/* Dialog cai dat bo cau hoi */}
          <Dialog
            open={openSetQuestion}
            onClose={closeDialog}
            maxWidth="xs"
            fullWidth
          >
            <DialogTitle>Cài đặt bộ câu hỏi</DialogTitle>
            <DialogContent>
              <form>
                <TextField
                  id="newUsername"
                  type="number"
                  fullWidth
                  style={{ marginBottom: 20 }}
                  className={classes.margin}
                  id="input-with-icon-textfield"
                  name="sumQuestion_form"
                  value={sumQuestion_form}
                  label="Số câu hỏi"
                  onChange={handleChange}
                  error={
                    errors.sumQuestion_form && touched.sumQuestion_form
                      ? true
                      : false
                  }
                  // error={touched.newUsername ? true : false}
                  helperText={
                    touched.sumQuestion_form ? errors.sumQuestion_form : ""
                  }
                  onKeyUp={() => setFieldTouched("sumQuestion_form", true, false)}
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
                    setFieldTouched("numberAnwser_form", true, false);
                  }}
                  className={classes.margin}
                  id="input-with-icon-textfield"
                  name="numberAnwser_form"
                  label="Số câu trả lời"
                  type="number"
                  onChange={handleChange}
                  value={numberAnwser_form}
                  helperText={
                    touched.numberAnwser_form ? errors.numberAnwser_form : ""
                  }
                  error={
                    errors.numberAnwser_form && touched.numberAnwser_form
                      ? true
                      : false
                  }
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
                onClick={e => onHandleSubmitQuestion(e)}
                type="submit"
              >
                Ok
            </Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
      </div>
    );
  }
}

export default withStyles(StylesGetMe)(GetMe);
