import axios from "axios";
import GetToken from "../helper/GetToken/getToken";
const test = new axios.create({
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${GetToken()}`
  }
});
test.interceptors.request.use(
  function(config) {
    config.headers.Authorization = `Bearer ${GetToken()}`;
    //config.headers["Content-Type"] = "multipart/form-data";
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
export default test;
