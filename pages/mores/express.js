import { PageConfig } from "../../comms/configshow/pageconfig.js"
import { getElePosition, moveIt } from "../../comms/commDevice/deviceInfo.js"

Page({
  data: {
    currentTab: 0,
    tabs: PageConfig["pages/mores/express"],
    logistics: PageConfig["pages/mores/express/logistics"],
    address: PageConfig["pages/mores/express/address"],
    payChannels: PageConfig["payChannels"],
    payShow: 'none'
  },

  onLoad: function () {
    var that = this


  },
  radioChange: function (e) {
    let payName = this.data.payChannels[e.detail.value].payName
    let payImg = this.data.payChannels[e.detail.value].payImg

    this.setData({
      payName: payName,
      payImg: payImg
    })
  },
  payConfirm: function (e) {
    console.log(e)
  },
  paySelectConfirm: function (e) {
    this.setData({
      payShow: 'none'
    })
  },
  swichNav: function (e) {
    console.log(e)
    var that = this;

    if (that.data.currentTab !== e.currentTarget.dataset.current) {
      that.setData({
        currentTab: e.currentTarget.dataset.current

      })
    }


  },
  paySelect: function (e) {
    this.setData({
      payShow: 'flex'
    })
  },
  bindChange: function (e) {
    var that = this
    that.setData({ currentTab: e.detail.current });

  },
  loadMore: function (e) {
    var that = this
    if (!that.data.loadingData) {
      that.setData({
        loadingData: true,
        hidden: true
      })
      wx.showLoading({
        title: '数据加载中',
      })
      setTimeout(() => {
        that.listMore()
        wx.hideLoading()
        that.setData({
          loadingData: false,
          hidden: false
        })
      }, 2000)
    }
  },

  buyIt: function (e) {
    var that = this
    //当前绿十字的坐标

    let x = e.touches[0].clientX
    let y = e.touches[0].clientY
    moveIt(x, y, that, e.currentTarget.id)
  },

  listMore: function (e) {
    var that = this
    this.setData({
      loadDataFrom: this.data.loadDataTo,
      loadDataTo: this.data.loadDataTo + 4
    })
    this.setData({
      imgs: this.data.imgs.concat(db.food.slice(this.data.loadDataFrom, this.data.loadDataTo)),
      mySelf: that
    })

  },
  onShow: function (e) {
    var that = this
    getElePosition("#cart", that)
  }
})
