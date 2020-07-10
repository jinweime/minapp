const app = getApp()
Page({
  data: {

  },
  onLoad: function () {
    console.log('Welcome to Mini Code')
    tt.setNavigationBarTitle({
      title: '姓名匹配' // 导航栏标题
    });
  },


   startTest: function(e){
       console.log('startTest')
     tt.navigateTo({
       url: '/pages/ad/index' // 指定页面的url
     });
  },

  
})

