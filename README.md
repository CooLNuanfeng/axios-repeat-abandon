# axios-repeat-abandon

Cancel axios repeated request


English | [简体中文](./README_CN.md)

# Installing

  npm install axios-repeat-abandon

# Usage

  ```
  import axios from 'axios'
  import axiosRepeatAbandon from 'axios-repeat-abandon'
  
  axiosRepeatAbandon(axios,{
    time: 800
    openSwitch: true
  })
  ```

  ```
    var http = axios.create()
    Object.setPrototypeOf(http, axios)
    AxiosRepeatAbandon(http,{
      time: 400
    });
  ```

# config

- time: Identified as the number of milliseconds repeat request, default time 800 millisecond
- openSwitch: Whether to enable the repeated request limit, the total configuration, the default is true to enable, a single request can override the global configuration, that is, the following example


# example


  Remove the duplicate request limit for this request

  ```
    axios.get(url,{
      cancelRepeat: false
    })
  ```