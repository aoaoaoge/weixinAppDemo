Page({
  // data:{
  //   list:[
      
  //   ]
  // },
  onShow: function(){
    var that = this;
      wx.request({
        url: 'http://localhost:8088/demo/testget',
        method: "GET",
        data: {},
        success: function(res){
          var reslist = res.data.result;
          console.log(reslist);
          if(reslist==null){
            var tstext = '获取数据失败' + res.data.message;
            wx.showToast({
              title: tstext,
              duration: 3000
            });
          }else{
            that.setData({ list: reslist});
          }
        }
      });
  },
  nowGotUserInfo: function(e){
    console.log(e.detail.errMsg);
    console.log(e.detail.userInfo);
    console.log(e.detail.rawData);
    wx.request({
      url: 'http://localhost:8088/user/addUserInfo',
      method: "POST",
      header: { "content-type":"application/json"},
      data: e.detail.userInfo,
      success: function (res) {
        console.log(res.data.message);
      }
    })
  }
})