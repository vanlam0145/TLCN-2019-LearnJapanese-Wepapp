const jwt = require('jsonwebtoken')
const config = require('../../constants/Config');
const getCookie = () => {
  if (document.cookie !== null) {
    const name = "token=";
    const ca = document.cookie.split("; ");
    for (let i = 0; i < ca.length; i++) {
      const c = ca[i];
      if (c.indexOf(name) === 0) {
        const decode = jwt.decode(c.substring(6), config.TOKEN_SECRET)
        if (decode.type === "access")
          return c.substring(6);
        else return null
      }
      else
        continue;
    }
    return null
  }
};
export default getCookie;
