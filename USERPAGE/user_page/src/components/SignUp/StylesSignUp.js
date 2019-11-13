import loginBackground from "../../assets/loginbackground.jpg";
const stylesSignUp = theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: `url(${loginBackground})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#3f51b5"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
    // backgroundColor: "red",
    // "&:hover":{
    //     backgroundColor: "red"
    // }
  },
  forgot: {
    flexGrow: "unset",
    flexBasis: "auto !important"
  },
  email: {
    "&:hover": {
      borderColor: "red"
    }
  },
  signup: {
    "&:hover": {
      cursor: "pointer"
    },
    flexBasis: "auto",
    flexGrow: "unset"
  },
  container: {
    justifyContent: "space-between"
  },
  remember: {
    color: "#3f51b5"
  }
});

export default stylesSignUp;
