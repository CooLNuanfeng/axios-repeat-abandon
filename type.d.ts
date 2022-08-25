interface Config {
  method: string,
  url: string,
  params?: string,
  data?: any
}

interface RequestKeyObj {
  curTime: number,
  limitTime: number
}

declare module 'qs'

interface AxiosStatic extends Function {
  [propsName:string]: any,
}

// type AxiosFun = () => any extends {[propsName:string]: any }