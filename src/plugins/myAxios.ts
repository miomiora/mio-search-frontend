import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:90/api/",
  timeout: 10000,
  headers: { Authorization: localStorage.getItem("token") },
});
instance.interceptors.response.use(
  function (response) {
    const data = response.data;
    if (data.code === 0) {
      return data;
    }
    console.log("response error: ", data);
    return data;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default instance;
