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
    cancelRepeat: false
  })
  ```

# config

- time: Identified as the number of milliseconds repeat request, default time 800 millisecond
- cancelRepeat: Whether to cancel the repeated request limit, the total configuration, the default false is not enabled, a single request can overwrite the global configuration, that is, the following example


# example


  No restrictions on this request

  ```
    axios.get(url,{
      cancelRepeat: true
    })
  ```