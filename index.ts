import {
  generateReqKey,
  addRequest,
  requestMap
} from './utils/index'


const axiosRepeatAbandon = (axios: AxiosStatic, { time = 800, openSwitch = true }) => {
  if(!axios){
    console.warn('axios is request')
    return;
  }
  
  const reqtmp = axios.Axios.prototype.request;
  axios.request = axios.Axios.prototype.request = function(config:any){
    if(openSwitch && config.cancelRepeat === false){
      return reqtmp.call(this,config)
    }

    if(openSwitch || config.cancelRepeat){
      const requestKey = generateReqKey(config);
      if(requestMap.has(requestKey)){
        const {oldReqTime} = requestMap.get(requestKey);
        const curTime = new Date().getTime()
        if(curTime - oldReqTime < time){
          requestMap.set(requestKey,{
            oldReqTime: curTime,
            isCancel: true
          })
        }else{
          requestMap.set(requestKey,{
            oldReqTime: curTime
          })
        }
      }else{
        addRequest(config, {
          curTime: new Date().getTime(), 
          limitTime: time
        });
      }
    }
    return reqtmp.call(this,config)
  }


  axios.interceptors.request.use((config:any) => {
      if(openSwitch && config.cancelRepeat === false){
        return config;
      }
      // console.log('@@@@@@@@cancelRepeat===>', config.cancelRepeat)
      if(openSwitch || config.cancelRepeat){
        const requestKey = generateReqKey(config);
        const {isCancel} = requestMap.get(requestKey) || {isCancel: false};
        if(isCancel){
          config.cancelToken = new axios.CancelToken((cancel: (name:string)=>void) => {
            cancel('重复请求: '+ config.url);
          });
        }
      }
      return config;
    },
    (error:Error) => {
      return Promise.reject(error);
    }
  );
  

  axios.interceptors.response.use((response:any) => { 
      return response;
    },
    (error:Error) => {
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