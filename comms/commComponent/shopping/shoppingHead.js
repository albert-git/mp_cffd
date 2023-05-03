// comms/commComponent/shopping/shoppingHead.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    addrTxt:String,
    imgAd:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },
  attatched:function(e){
    var that = this
    that.setData({
      addrTxt: this.properties.addrTxt,
      imgAd: this.properties.imgAd
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    toAddr:function(e){
      wx.navigateTo({
        url: '/pages/addr/addr'
        
      })
    }
  }
})
