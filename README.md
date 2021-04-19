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
  })
  ```

# config

- time: Identified as the number of milliseconds repeat request, default time 800 millisecond
- cancelRepeat: Cancel a repeat request limit,  Not open by default


# example


  No restrictions on this request

  ```
    axios.get(url,{
      cancelRepeat: true
    })
  ```