// pages/mines/mines.js
import {routePages} from "../../comms/commApi/commFunc.js"
const configs = require("../../comms/configshow/pageconfig.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    publicPath: "/images/userCenter/" ,
    menusA: configs.PageConfig["/pages/mines/menusA"],
    menusB: configs.PageConfig["/pages/mines/menusB"],
    routes:{
      "address": { type: 'navigate', routePage: "/pages/mines/address/address" },
      "orders": { type: 'navigate', routePage: "/pages/mines/orders/orders" },
      "acctSet": { type: 'navigate', routePage: "/pages/mines/acctSet/acctSet" },
      "coupon": { type: "navigate", routePage: "/pages/mines/discount/discount" },
      "balance": { type: "navigate", routePage: "/pages/mines/balance/balance" }
    }
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
  onSelect:function(e){
    let theSelected = e.currentTarget.id
    let navigator = this.data.routes
    routePages(navigator[theSelected].type, navigator[theSelected].routePage)
    
  }
})