import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import AddIcon from "@material-ui/icons/LibraryAdd";
import StylesMenu from "./StylesMenu";
import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import ArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Grow from "@material-ui/core/Grow";
import MenuList from "@material-ui/core/MenuList";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import TopicsIcon from "@material-ui/icons/MenuBook";
import Speech from "speak-tts";

class index extends React.Component {
  state = {
    anchorEl_Alphabet: null,
    anchorEl_Profile: null,
    mobileMoreAnchorEl: null,
    open: false,
    openProfile: false
  };
  handleDrawerOpen = event => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleProfileMenuOpen = event => {
    console.log("click here")
    const { currentTarget } = event;
    this.setState(state => ({
      anchorEl_Profile: currentTarget,
      openProfile: !state.openProfile
    }));
  };
  handleProfileMenuClose = () => {
    this.setState(state => ({ openProfile: false, anchorEl_Profile: null }));
  };
  handleMenuClose = () => {
    this.setState({ anchorEl_Profile: null });
    this.handleMobileMenuClose();
  };
  handleOpenProfile = () => {
    const { history } = this.props;
    this.setState({ openProfile: false });
    this.handleMobileMenuClose();
    history.push("/getme");
  };
  handleSignOut = () => {
    const { signout } = this.props;
    this.setState({ openProfile: false });
    this.handleMobileMenuClose();
    signout();
  };
  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };
  backHome = () => {
    const { history } = this.props;
    history.push("/");
  };
  handleOpenAddCourses = () => {
    const { history } = this.props;
    history.push("/courses/addnew");
  };
  handleToggle = event => {
    const { currentTarget } = event;
    this.setState(state => ({
      anchorEl_Alphabet: currentTarget,
      open: !state.open
    }));
  };
  handleClose = () => {
    this.setState({ open: false, anchorEl_Alphabet: null });
  };
  handleOpenTopics = () => {
    const { history } = this.props;
    history.push("/gettopics");
  };
  onSpeak = () => {
    const speech = new Speech();
    speech.setLanguage("ja-JP");
    speech.setRate(0.7);
    speech.setPitch(1.4);
    speech.speak({
      text: "こんにちは、ホアンです。ベトナム出身です。はじめまして。"
    });
  };
  render() {
    const { mobileMoreAnchorEl, open, openProfile } = this.state;
    const { classes } = this.props;
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const {
      handleOpenAddCourses,
      handleOpenTopics,
      handleProfileMenuOpen,
      handleToggle
    } = this;
    const isTest=Boolean(this.state.anchorEl_Profile)

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        className={classes.Menu}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={handleOpenAddCourses}>
          <IconButton color="inherit">
            <AddIcon />
          </IconButton>
          <p>Tạo khoá học</p>
        </MenuItem>
        <MenuItem onClick={handleToggle}>
          <IconButton color="inherit">
            <ArrowDownIcon />
          </IconButton>
          <p>Aplabet</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <TopicsIcon />
          </IconButton>
          <p>Chủ đề học</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Thông tin cá nhân</p>
        </MenuItem>
      </Menu>
    );
    const renderProfile = (
      <Popper
        open={isTest}
        anchorEl={this.state.anchorEl_Profile}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            id="menu-list-grow"
            style={{
              transformOrigin: {
                vertical: "center"
              }
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={this.handleProfileMenuClose}>
                <MenuList>
                  <MenuItem onClick={this.handleOpenProfile}>Thông tin cá nhân</MenuItem>
                  <MenuItem onClick={this.handleSignOut}>Đăng xuất</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      // <Menu
      //   anchorEl={this.state.anchorEl_Profile}
      //   anchorOrigin={{ vertical: "top", horizontal: "right" }}
      //   open={isTest}
      //   onClose={this.handleMenuClose}
      // >
      //   <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
      //   <MenuItem onClick={this.handleMenuClose}>Sign out</MenuItem>
      // </Menu>
    );
    const renderAlphabet = (
      <Popper
        open={open}
        anchorEl={this.state.anchorEl_Alphabet}
        transition
        disablePortal
        placement="bottom"
      >
        {({ TransitionProps, placement }) => (
          <Grow {...TransitionProps} id="menu-list-grow">
            <Paper>
              <ClickAwayListener onClickAway={this.handleClose}>
                <MenuList>
                  <MenuItem onClick={this.handleClose}>Hiragana</MenuItem>
                  <MenuItem onClick={this.handleClose}>Katakana</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    );

    return (
      <div>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography
                className={classes.title}
                component="h4"
                color="inherit"
                noWrap
              >
                <Button onClick={this.backHome} style={{ color: "white" }}>
                  Learn japanese
                </Button>
              </Typography>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                />
              </div>
              <div className={classes.grow} />

              {/* Phia ben phai cua thanh menu */}
              <div className={classes.sectionDesktop}>
                <Button
                  className={classes.menuButton}
                  onClick={handleOpenAddCourses}
                >
                  <AddIcon />
                  &ensp; Tạo khoá học
                </Button>
                <Button onClick={handleToggle} className={classes.menuButton}>
                  Alphabet {<ArrowDownIcon />}
                </Button>
                <Button
                  onClick={handleOpenTopics}
                  className={classes.menuButton}
                >
                  <TopicsIcon />
                  &ensp; Chủ đề học
                </Button>
                <IconButton
                  onClick={handleProfileMenuOpen}
                  className={classes.menuButton}
                >
                  <Tooltip title="Trang cá nhân">
                    <AccountCircle />
                  </Tooltip>
                </IconButton>
              </div>

              {/* tts */}
              {/* <div
                className={classes.systemCourses}
                style={{ marginLeft: "5%" }}
              >
                <Button onClick={this.onSpeak} className={classes.menuButton}>
                  {<TopicsIcon />}&ensp; tts
                </Button>
              </div> */}
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-haspopup="true"
                  onClick={this.handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          {renderMobileMenu}
          {renderProfile}
          {renderAlphabet}
        </div>
      </div>
    );
  }
}

export default withStyles(StylesMenu, { withTheme: true })(index);
