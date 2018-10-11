// pages/booklist/booklist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buycen:false,
    book:{
      id:0,
      name:"",
      price:0,
      totel:0
    },
    disable:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    wx.request({
      url: 'http://localhost:8088/books/getBooks',
      method: "POST",
      data: {
        "pageindex": 1,
        "pagesize": 10
        // "name": "j"
        },
      success: function (res) {
        var reslist = res.data.books;
        if (reslist == null) {
          var tstext = '获取数据失败' + res.data.message;
          wx.showToast({
            title: tstext,
            duration: 3000
          });
        } else {
          that.setData({ list: reslist });
        }
      }
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  addBuyCar: function (event){
    this.setData({
      disable: false,
      buycen : true,
      book:{
        id: event.target.dataset.book.id,
        name: event.target.dataset.book.name,
        price: event.target.dataset.book.price,
        totel: event.target.dataset.book.price
      }
    })
    wx.request({
      url: '',
      data: '',
      method: 'POST',
      dataType: 'json',
      responseType: 'json',
      success: function(res) {},
      fail: function(res) {}
    })
  },
  cancelbuy: function(){
    this.setData({
      buycen: false,
      disable: true
    })
  },
  addbook:function(event){
    var num = 
  }
})