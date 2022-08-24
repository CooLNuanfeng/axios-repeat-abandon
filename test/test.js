
(function(){
  var http = axios.create()
  console.log('http',http)
  Object.setPrototypeOf(http, axios)
  AxiosRepeatAbandon(http,{
    time: 400,
    openSwitch: true
  });

  $('#btn').on('click',function(){
    http.get('https://demo-api.apipost.cn/api/demo/news_list?mobile=18289454846&theme_news=国际新闻&page=1&pageSize=20',{
      cancelRepeat: false,
    }).then(()=>{
      console.log('axios result')
    })
  })

  $('#btn1').on('click',function(){
    http.get('https://demo-api.apipost.cn/api/demo/news_details?id=20&status=1').then(()=>{
      console.log('axios result')
    })
  })
})()