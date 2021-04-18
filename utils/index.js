import Qs from 'qs'
export const requestMap = new Map();

export const generateReqKey = (config) => {
  const { method, url, params, data } = config;
  let key = [method, url, Qs.stringify(params), Qs.stringify(data)].join(":");
  return key
}

export const addRequest = (config, {curTime}) => {
  const requestKey = generateReqKey(config);
  if(!requestMap.has(requestKey)){
    requestMap.set(requestKey, {
      oldReqTime: curTime,
    });
  }
}

export const removeRequest = (config) => {
  const requestKey = generateReqKey(config);
  if (requestMap.has(requestKey)) {
    requestMap.delete(requestKey);
  }
}