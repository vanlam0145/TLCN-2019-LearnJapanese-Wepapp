import axios from "axios";
class AxiosService {
  constructor() {
    const instance = axios.create();
    instance.interceptors.response.use(
      function(response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      },
      function(error) {
        console.log("trong axiosservice: ", error.response);
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error.response);
      }
    );
    // tao ra bien instance de chua const instance o tren
    this.instance = instance;
  }
  get(url) {
    return this.instance.get(url);
  }
  post(url, body) {
    return this.instance.post(url, body);
  }
}
export default new AxiosService();
