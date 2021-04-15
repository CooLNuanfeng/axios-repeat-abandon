import Qs from 'qs'
export const requestMap = new Map();

export const generateReqKey = (config, name) => {
  const { method, url, params, data } = config;
  let key = [method, url, Qs.stringify(params), Qs.stringify(data)].join(":");
  console.log(name,key)
  return key
}

export const addRequest = (config, axios, {curTime, limitTime}) => {
  const requestKey = generateReqKey(config, '+++');
  console.log('+++++++++++++')
  config.cancelToken = new axios.CancelToken((cancel) => {
    if(!requestMap.has(requestKey)){
      requestMap.set(requestKey, {
        cancel,
        oldReqTime: new Date().getTime()
      });
    }
  });
  
}

export const removeRequest = (config, {curTime, limitTime, type}) => {
  const requestKey = generateReqKey(config, '---');
  if (requestMap.has(requestKey)) {
    console.log('--------------',type)
    const {cancel, oldReqTime} = requestMap.get(requestKey);
    if(curTime && (curTime - oldReqTime < limitTime)){
      console.log('bbb',cancel)
      cancel(requestKey);
    }
    requestMap.delete(requestKey);
  }
}