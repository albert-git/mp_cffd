// pages/login/addData/addData.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectData2: ['1', '2', '3', '4', '5', '6','7','8','9','10'],//下拉列表的数据
    selectData:[{id:1,name:"hello"},{id:2,name:'hi'},{id:3,name:"abc"}],
    addrs: ['学校', '园区', '栋数', '宿舍']
  },
  onSelectTxt:function(e){
    console.log(e)
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  toAddData:function(e){
    var that = this
    wx.chooseLocation({
      success: function(res) {
        that.setData({
          address:res.address
        })
      },
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