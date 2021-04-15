import Qs from 'qs'
export const requestMap = new Map();

export const generateReqKey = (config, name) => {
  const { method, url, params, data } = config;
  let key = [method, url, Qs.stringify(params), Qs.stringify(data)].join(":");
  console.log(name,key)
  return key
}

export const addRequest = (config, axios, {curTime, limitTime}) => {
  const requestKey = generateReqKey(config, 'add');
  if (requestMap.has(requestKey)) {
    const {cancel, oldReqTime} = requestMap.get(requestKey);
    if(curTime && (curTime - oldReqTime < limitTime)){
      cancel(requestKey);
    }
  }else{
    console.log('============')
    config.cancelToken =
      config.cancelToken ||
      new axios.CancelToken((cancel) => {
        requestMap.set(requestKey, {
          cancel,
          oldReqTime: new Date().getTime()
        });
      });
  }
  
}

export const removeRequest = (config, {curTime, limitTime}) => {
  const requestKey = generateReqKey(config, 'remove');
  if (requestMap.has(requestKey)) {
    console.log('++++++++++')
    const {cancel, oldReqTime} = requestMap.get(requestKey);
    if(curTime && (curTime - oldReqTime < limitTime)){
      cancel(requestKey);
    }
    requestMap.delete(requestKey);
  }
}