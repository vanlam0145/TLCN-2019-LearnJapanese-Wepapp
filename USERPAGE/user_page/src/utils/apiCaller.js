import * as Config from "../constants/Config";
import axiosInstance from "./axiosInstance";

export default function callApi(endpoint, method, body) {
  const test = new axiosInstance({
    method: method,
    url: `${Config.API_URL_USER}/${endpoint}`,
    data: body
  });
  return test;
}
