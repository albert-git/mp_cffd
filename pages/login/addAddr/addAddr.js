// pages/login/addAddr/addAddr.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectData:["abc","efg","sksk","hello"],
    items:["学校","园区","栋数","宿舍"],
    addrs:{}
  },
  selectAddr:function(e){
    let addrs = this.data.addrs
    let addr = e.detail
    let addrKey = e.currentTarget.dataset.addr
    addrs[addrKey] = addr
    this.setData({
      addrs:addrs
    })
    
    
  },
  toAddData:function(e){
    
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