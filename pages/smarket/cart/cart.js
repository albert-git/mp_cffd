// pages/shopping/cart/cart.js
const commFunc = require("../../../comms/commApi/commFunc.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let goods = commFunc.getFoo("goods")
    this.setData({
      goods:goods
    })
  },
  setAddr:function(e){
    this.selectComponent("#payid").setAddr()
  },
  modiOrderNum:function(e){
    
    var id = e.target.id
    if (id =="plus" || id =="sub"){
      var goods = commFunc.getFoo("goods")
      var idx = e.target.dataset.item
      let componet = this.selectComponent("#payid")
      let addSubFlag = 1
      
      //减少购买数量
      if (id == "sub" && goods[idx].orderNum > 0){
        addSubFlag = -1
      }

      goods[idx].orderNum += addSubFlag
      //如果订购数量为0，则从列表在删除此产品
      if (goods[idx].orderNum == 0) {
        goods.splice(idx, 1)
      }

      commFunc.writeFoo("goods", goods)
      getApp().globalData.buyCount += addSubFlag
      this.setData({
        goods: goods
      })

      componet.sumFee()
      
    }
    
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