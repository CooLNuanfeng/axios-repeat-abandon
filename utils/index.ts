import Qs from 'qs'
export const requestMap = new Map();

export const generateReqKey = (config:Config) => {
  const { method, url, params, data } = config;
  let key = [method.toLowerCase(), url, Qs.stringify(params), Qs.stringify(data)].join(":");
  return key
}

export const addRequest = (config: Config, {curTime}:RequestKeyObj) => {
  const requestKey = generateReqKey(config);
  if(!requestMap.has(requestKey)){
    requestMap.set(requestKey, {
      oldReqTime: curTime,
    });
  }
}

export const removeRequest = (config: Config) => {
  const requestKey = generateReqKey(config);
  if (requestMap.has(requestKey)) {
    requestMap.delete(requestKey);
  }
}