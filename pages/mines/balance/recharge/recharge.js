// pages/mines/balance/recharge/recharge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    vips: [
      { vipMon: "赠送1次会员", vipPrice: 19.9, recommend: false },
      { vipMon: "赠送7次会员", vipPrice: 99, recommend: false },
      { vipMon: "赠送15次会员", vipPrice: 150, recommend: true }
    ],
    whichOne:0
  },
  selectOne:function(e){
    let index = e.currentTarget.dataset.selected
    this.setData({
      whichOne:index
    })
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