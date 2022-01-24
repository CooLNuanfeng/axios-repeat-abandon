
(function(){
  AxiosRepeatAbandon(axios,{
    time: 400,
    openSwitch: true
  });

  $('#btn').on('click',function(){
    axios.get('https://www.fastmock.site/mock/f5d64bece0829e40b155552ae51ae52d/test/list').then(()=>{
      console.log('axios result')
    })
  })
})()