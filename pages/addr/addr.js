Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    items: ["学校", "园区", "栋数", "宿舍"],
    addrs: {}
  },
  selectAddr: function (e) {
    let addrs = this.data.addrs
    let addr = e.detail
    let addrKey = e.currentTarget.dataset.addr
    addrs[addrKey] = addr
    this.setData({
      addrs: addrs
    })


  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let delta = 1
    if (options.delta){
      delta = options.delta
    }
    this.setData({
      delta:delta
    })
    
  },
  onTab:function(e){
    getApp().globalData.addr="hello"
    wx.navigateBack({
      delta:this.data.delta
    })
    
  }
  
})