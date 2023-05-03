// pages/mines/acctSet/acctSet.js
const pages = 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cmds:[
      {cmd:"更换手机号"},{cmd:"更换支付密码"}
    ],
    routes: {
      "v0": "/pages/mines/acctSet/changePhone/changePhone",
      "v1": "/pages/mines/acctSet/changePwd/changePwd"
    }
  },
  onSelect:function(e){
    let toPage = e.target.id
    
    if (this.data.routes[toPage]){
      wx.navigateTo({
        url: this.data.routes[toPage]
      })
    }
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

  }
})