import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 5000
})
instance.interceptors.response.use(
  (response) => {
    // 可以在这里处理响应数据
    return response.data;
  },
  (error) => {
    // 可以在这里处理请求失败的情况
    return Promise.reject(error);
  }
);
export default instance;
