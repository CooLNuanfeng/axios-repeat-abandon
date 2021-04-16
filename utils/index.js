import Qs from 'qs'
export const requestMap = new Map();

export const generateReqKey = (config, name) => {
  const { method, url, params, data } = config;
  let key = [method, url, Qs.stringify(params), Qs.stringify(data)].join(":");
  // console.log(name,key)
  return key
}

export const addRequest = (config, axios, {curTime, limitTime}) => {
  const requestKey = generateReqKey(config, '+++');
  config.cancelToken = new axios.CancelToken((cancel) => {
    if(!requestMap.has(requestKey)){
      console.log(11111)
      requestMap.set(requestKey, {
        cancel,
        oldReqTime: curTime,
        isFrist: true
      });
    }else{
      console.log(22222)
      const {oldReqTime} = requestMap.get(requestKey);
      requestMap.set(requestKey, {
        cancel,
        oldReqTime: oldReqTime,
        isFrist: false
      });
    }
  });
}

export const removeRequest = (config, {curTime, limitTime, type}) => {
  const requestKey = generateReqKey(config, '---');
  if (requestMap.has(requestKey)) {
    // console.log('--------------',type)
    // const {cancel, oldReqTime} = requestMap.get(requestKey);
    // if(curTime - oldReqTime < limitTime){
    //   console.log('bbb')
    //   cancel(requestKey);
    // }
    config.cancelToken = null
    requestMap.delete(requestKey);
  }
}