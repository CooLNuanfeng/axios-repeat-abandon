import Qs from 'qs'

export const requestMap = new Map();

export const generateReqKey = (config) => {
  const { method, url, params, data } = config;
  return [method, url, Qs.stringify(params), Qs.stringify(data)].join(
    "&"
  );
}

export const addRequest = (config, axios) => {
  const requestKey = generateReqKey(config);
  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken((cancel) => {
      if (!requestMap.has(requestKey)) {
        requestMap.set(requestKey, {
          cancel,
          oldReqTime: new Date().getTime()
        });
      }
    });
}

export const removeRequest = (config, curTime, limitTime) => {
  const requestKey = generateReqKey(config);
  if (requestMap.has(requestKey)) {
    const {cancel, oldReqTime} = requestMap.get(requestKey);
    if(curTime && (curTime - oldReqTime < limitTime)){
      cancel(requestKey);
    }else{
      cancel(requestKey);
    }
    requestMap.delete(requestKey);
  }
}