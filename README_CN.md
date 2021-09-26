# axios-repeat-abandon

取消axios中的重复请求


[English](./README.md) | 简体中文



# 安装

  npm install axios-repeat-abandon

# 使用

  ```
  import axios from 'axios'
  import axiosRepeatAbandon from 'axios-repeat-abandon'
  
  axiosRepeatAbandon(axios,{
    time: 800，
  })
  ```

# 配置

- time: 认定为重复请求的时间间隔, 默认800毫秒
- cancelRepeat: 是否取消重复请求限制，总配置，默认 false 不开启, 单次请求可覆盖该全局配置，即如下示例


# 示例

  对本次请求不限制重复请求
  ```
    axios.get(url,{
      cancelRepeat: true
    })
  ```