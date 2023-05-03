// pages/mines/balance/balance.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas:[
      {imgSrc:"/images/cash-2.png",txt:"提现",img2Src:"/images/arrow-right-2.png",nextPage:"/pages/mines/balance/cash/cash"},
      {imgSrc:"/images/recharge-2.png",txt:"充值",img2Src:"/images/arrow-right-2.png",nextPage:"/pages/mines/balance/recharge/recharge"},
      {imgSrc:"/images/relation-order-2.png",txt:"关联订单",img2Src:"/images/arrow-right-2.png",nextPage:"/pages/mines/balance/relationOrders/relationOrders"}
    ]
  },
  onSelect:function(e){
    let index = e.currentTarget.dataset.index
    
    let nextpage = this.data.datas[index].nextPage
    console.log(nextpage)
    wx.navigateTo({
      url: nextpage,
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