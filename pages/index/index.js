const app = getApp()
tt.setNavigationBarTitle({
  title: '爱情测算' // 导航栏标题
});
Page({
  data: {

  },
  onLoad: function () {
    console.log('Welcome to Mini Code')
  },

  startTest: function(e){
    console.log(e.detail);
    tt.navigateTo({
      url: '/pages/test/index' // 指定页面的url
    });
  },

 adloadhandler: function(e){
    console.log('广告加载成功');
  },

   aderrorhandler: function(e){
    console.log('广告加载失败的回调方法');
  },

   bindclose: function(e){
    console.log('广告关闭的回调方法');
  },

  
  animate :function(){
   
   
  },


  checkData :function(e){
    console.log('发起请求');
    tt.request({
      url: 'https://guoranpai.com/tmyj/douyin/content/verify', // 目标服务器url
      method:'POST',
      data:{
        content:'江泽民'
      },
      success: (res) => {
        console.log(res.data);
      }
    });
  },

  formSubmit: function (e) {
    console.log("form发生了submit事件，携带数据为：", e.detail.value);
    tt.request({
      url: 'https://guoranpai.com/tmyj/douyin/content/verify', // 目标服务器url
      method:'POST',
      data:{
        content:e.detail.value
      },
      success: (res) => {
        console.log(res.data.data+"  aaa");
        if(res.data.data==1){
          tt.showToast({
            title: "内容违规!",
            duration: 2000,
            icon:'fail',
          });
        }else{
          var videoAd= tt.createRewardedVideoAd({adUnitId:'j0il7bq53g1p40a5f7'})
          // 显示广告
          videoAd
            .show()
            .then(() => {
                 console.log("广告显示成功");
        })
        .catch((err) => {
          console.log("广告组件出现问题", err);
          // 可以手动加载一次
          videoAd.load().then(() => {
            console.log("手动加载成功");
            // 加载成功后需要再显示广告
            return videoAd.show();
          });
         });
         videoAd.onClose((res) => {
          if (res.isEnded) {
            // 给予奖励
            console.log("给予奖励");
            tt.navigateTo({
              url: '/pages/ad/index' // 指定页面的url
            });
          }else{
            
          }
        });
         
        }
      }
    });
  },
})
