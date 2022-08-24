
(function(){
  var http = axios.create()
  console.log('http',http)
  Object.setPrototypeOf(http, axios)
  AxiosRepeatAbandon(http,{
    time: 400,
    openSwitch: false
  });

  $('#btn').on('click',function(){
    http.get('https://www.fastmock.site/mock/f5d64bece0829e40b155552ae51ae52d/test/list',{
      cancelRepeat: true,
    }).then(()=>{
      console.log('axios result')
    })
  })
})()