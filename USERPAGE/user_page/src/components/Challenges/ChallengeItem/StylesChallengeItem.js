const styles = theme => ({
  container: {
    marginTop: "5%",
    
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
    width: 200,
    height: 200
  },
  input: {
    display:"none"
  },
  UserInfor:{
    marginBottom: "2%"
  },
  SideInfor: {

  },
  ButtonChangeUsername: {
    marginTop: "-1.5%",
    marginLeft: 10
  },
  cardHover: {
    "&:hover":{
      backgroundColor: "#3e51b5",
      color: "white"
    }
  },
  cardIndex:{
    backgroundColor: "#3e51b5",
    color: "white"
  }
});

export default styles;
