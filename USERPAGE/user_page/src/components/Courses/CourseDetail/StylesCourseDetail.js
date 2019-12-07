const styles = theme => ({
  container: {
    marginTop: "5%"
  },
  ButtonChangeAvatar: {
    marginTop: "5px"
  },
  avatar: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    justify: "center",
    alignItems: "center"
  },
  SizeAvatar: {
    width: "50px",
    height: "50px"
  },
  input: {
    display: "none"
  },
  UserInfor: {
    marginBottom: "2%"
  },
  SideInfor: {},
  ButtonChangeUsername: {
    marginTop: "-1.5%",
    marginLeft: 10
  },
  root: {
    maxWidth: 400,
    flexGrow: 1
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default
  },
  img: {
    height: 255,
    display: "block",
    maxWidth: 400,
    overflow: "hidden",
    width: "100%"
  },
  wordHover: {
    "&:hover": {
      transForm: "ro"
    }
  },
  textHover: {
    "&:hover": {
      transform: "rotateX(180deg)"
    },
    position: "absolute",
    transition: "1s",
    backfaceVisibility: "hidden",
    perspective: "500px"
  },
  courseShow: {
    width: "50vh",
    backgroundColor: "#3e51b5",
    height: "40vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute"
  },
  progress: {
    width: "100%"
  },
  answerHover: {
    "&:hover": {
      boxShadow: "0px 0px 0px 5px #3e51b5"
    },
  },
  answer: {
    boxShadow: "0px 0px 0px 4px #3e51b5"
  }
});

export default styles;
