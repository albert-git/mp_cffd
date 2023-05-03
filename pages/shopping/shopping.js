const commFunc = require("../../comms/commApi/commFunc.js")
const db = require("../../comms/commApi/localdb.js")
const configs = require("../../comms/configshow/pageconfig.js")
import { moveIt, catchCart } from "../../comms/commDevice/deviceInfo.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    tabArr: []
    
  },
  toAddr:function(e){
    let that = JSON.stringify(this)
    wx.navigateTo({
      url: '/pages/addr/addr?btnTxt=确定&who='+that,
    })
    
  },
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载

    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },
  
  onShow:function(e){
    var that = this
    if (this.data.adimg) {
      getApp().globalData.adimg = this.data.adimg
    }
    else {
      getApp().globalData.adimg = 'flex'
    }
    this.setData({
      buyCount: !getApp().globalData.buyCount ? 0 : getApp().globalData.buyCount
    })
  },
  showCart:function(e){
    wx.navigateTo({
      url: '/pages/shopping/cart/cart',
    })
    
  },
  hideMe:function(e){
    this.setData({
      popFlag:'none'
    })
  },
  onBuy: function (e) {
    
    var that = this
    let buyCount = getApp().globalData.buyCount
    that.setData({
      buyCount:buyCount
    })
  },
  /*
  //tab选项卡向右滑动时触发
  scrollToLower: function (e) {
    console.log(e)
    
  },
  */
  //点击图片时显示详细信息
  showDetail:function(e){
    let obj = e.detail
    this.setData({
      popFlag:'flex',
      itemName:obj.name,
      oldPrice:obj.priceOld,
      newPrice:obj.priceNew
    })
  },
  //控制广告图片的隐藏与显现
  handleShow:function(e){
    let topDistance = 0
    let swiperH = 0
    let tabTop = 0
    let tabFixed = ''
    let swiperFixed=''
    let swiperTop = 0
    let itemH = 0
    if (e.detail == 'flex'){
      itemH = 0
      topDistance = 3
      swiperH = 60
      tabTop = 0
      tabFixed = 'relative'
      swiperFixed='relative'
      swiperTop = 0
      //getApp().globalData.cartPosition.top = getApp().globalData.cartOld.top + 110
    }
    else if (e.detail == 'none'){
      itemH = 220
      topDistance = 7
      swiperH = 100
      tabTop = 0
      tabFixed = 'fixed'
      swiperFixed = 'fixed'
      swiperTop = 17
      //getApp().globalData.cartPosition.top = getApp().globalData.cartOld.top + 110
    }
    getApp().globalData.adimg = e.detail
    this.setData({
      //itemH:itemH,
      adimg:e.detail,
      tabHeadTop:topDistance,
      swiperH:swiperH,
      tabTop:tabTop,
      tabFixed:tabFixed,
      swiperFixed:swiperFixed,
      swiperTop:swiperTop
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      tabs:configs.PageConfig["pages/shooping/tabHead"]
    })
    that.setData({
      products:[
      db.food.slice(0, 6),
      db.food.slice(6, 12),
      db.food.slice(12, 18),
      db.food.slice(18, 24)
    ],
      buyCount:!getApp().globalData.buyCount?0:getApp().globalData.buyCount
    })
    
    //获取cart位置
    catchCart(that, {
      findEleId: "#cart"
    })

    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });
  },

  bindChange: function (e) {
    var that = this

    let arr = that.data.tabArr
    arr.push(e.detail.current)

    if (arr.length > 2) {
      //判断是否为向左滑动
      arr.shift()
      let first = arr[0]
      let second = arr[1]
      if (second - first == 1 && second % 4 == 0) {
        that.setData({
          scrollLeft: 400
        })
      }
      //向右滑动
      else if (first - second == 1 && first % 4 == 0) {
        that.setData({
          scrollLeft: -400
        })
      }
    }
    that.setData({ currentTab: e.detail.current });

  },
  swichNav: function (e) {
    
    var that = this;
    
    if (that.data.currentTab !== e.currentTarget.dataset.current) {
      
      that.setData({
        currentTab: e.currentTarget.dataset.current
        
      })
    }


  }
})
