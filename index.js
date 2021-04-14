import {
  generateReqKey,
  addRequest,
  removeRequest
} from './utils'



const axiosRepeatAbandon = (axios, repeatAbandonConfig = {
  time: 300
}) => {
  if(!axios){
    console.warn('axios is request')
    return;
  }

  axios.interceptors.request.use((config) => {
      console.log(config,'request config')
      let curTime = new Date().getTime()
      removeRequest(config, curTime, repeatAbandonConfig.time); 
      addRequest(config, axios);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use((response) => {
      removeRequest(response.config); 
      return response;
    },
    (error) => {
      removeRequest(error.config || {});
      if (axios.isCancel(error)) {
        console.log("已取消的重复请求：" + error.message);
      } else {
        // 添加异常处理
      }
      return Promise.reject(error);
    }
  );

}

export default axiosRepeatAbandon