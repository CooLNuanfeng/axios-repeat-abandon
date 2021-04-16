import {
  generateReqKey,
  addRequest,
  removeRequest,
  requestMap
} from './utils'



const axiosRepeatAbandon = (axios, repeatAbandonConfig = {
  time: 50
}) => {
  if(!axios){
    console.warn('axios is request')
    return;
  }


  let reqtmp = axios.Axios.prototype.request;
  axios.Axios.prototype.request = function(config){
    // removeRequest(config, {curTime:new Date().getTime(),limitTime: repeatAbandonConfig.time, type: ''}); 
    addRequest(config, axios, {
      curTime: new Date().getTime(), 
      limitTime: repeatAbandonConfig.time
    });
    return reqtmp.call(this,config)
  }


  axios.interceptors.request.use((config) => {
      const requestKey = generateReqKey(config, 'request');
      if (requestMap.has(requestKey)) {
        const {cancel, oldReqTime, isFirst} = requestMap.get(requestKey);
        let curTime = new Date().getTime()
        console.log('=====request======',curTime - oldReqTime, isFirst)
        if( !isFirst && (curTime - oldReqTime < repeatAbandonConfig.time)){
          console.log('cancel')
          cancel(requestKey)
          requestMap.delete(requestKey);
        }
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  

  axios.interceptors.response.use((response) => {
      // let curTime = new Date().getTime()
      // removeRequest(response.config, {curTime,limitTime: repeatAbandonConfig.time, type: 'reponse'}); 
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