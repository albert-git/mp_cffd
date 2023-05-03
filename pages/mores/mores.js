const configs = require("../../comms/configshow/pageconfig")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    grids: 12,
    gridContents: configs.PageConfig["mores"],
    routes: [
      { url: "/pages/mores/members" }, 
      { url: "/pages/mores/express" }, 
      { url: "/pages/mores/water" }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      contentLength:this.data.gridContents.length
    })
  },
  onSelect:function(e){
    let item = e.currentTarget.dataset.item
    let routes = this.data.routes
    
    wx.navigateTo({
      url: routes[item].url,
    })
    
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