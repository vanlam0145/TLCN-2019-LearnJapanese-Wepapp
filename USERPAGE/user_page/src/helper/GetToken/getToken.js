const getCookie = () => {
  if (document.cookie !== null) {
    var name = "token=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < 2; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(6);
      } else {
        return null;
      }
    }
  }
};
export default getCookie;
