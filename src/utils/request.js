import axios from 'axios';

// 创建Axios实例，配置基础地址
const request = axios.create({
  baseURL: 'http://localhost:8080/api', // 后端接口基础地址
  timeout: 5000, // 超时时间
  headers: {
    'Content-Type': 'application/json' // 传JSON格式数据
  }
});

export default request;