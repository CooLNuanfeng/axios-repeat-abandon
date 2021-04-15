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
      removeRequest(config, {curTime: new Date().getTime(),limitTime: repeatAbandonConfig.time});
      addRequest(config, axios, {
        curTime: new Date().getTime(), 
        limitTime:repeatAbandonConfig.time
      });
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use((response) => {
      let curTime = new Date().getTime()
      removeRequest(response.config, {curTime,limitTime: repeatAbandonConfig.time}); 
      return response;
    },
    (error) => {
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