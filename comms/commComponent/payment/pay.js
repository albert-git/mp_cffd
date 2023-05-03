// comms/commComponent/payment/pay.js
import { PageConfig } from "../../configshow/pageconfig.js"
const commFunc = require("../../commApi/commFunc.js")
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showModiAddr:String

  },

  /**
   * 组件的初始数据
   */
  data: {
    payChannels: PageConfig["payChannels"],
    payShow:'none',
    addrTxt:'abc'
  },
  
  attached:function(e){
       
    this.setData({
      totalFee:this.allGoodsFee()
      
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    setAddr:function(e){
      this.setData({
        addrTxt:getApp().globalData.addr
      })
    },
    allGoodsFee: function () {
      let goods = commFunc.getFoo("goods")

      let totalFee = 0

      for (var i in goods) {
        let num = goods[i].orderNum
        let price = num * goods[i].priceNew

        totalFee += price
      }
      return totalFee
    },
    sumFee:function(e){
      this.setData({
        totalFee:this.allGoodsFee()
      })
    },
    radioChange: function (e) {
      let payName = this.data.payChannels[e.detail.value].payName
      let payImg = this.data.payChannels[e.detail.value].payImg

      this.setData({
        payName: payName,
        payImg: payImg
      })
    },
    paySelect: function (e) {
      this.setData({
        payShow: 'flex'
      })
      
    },
    confirmBuy: function (e) {
      console.log(e)
      wx.navigateTo({
        url: '/pages/payment/success',
      })
    },
    payConfirm: function (e) {
      let showFlag = ''
      if (this.properties.showModiAddr){
        showFlag = 'none'
      }
      else {
        showFlag = 'flex'
      }
      this.setData({
        showAddr:showFlag
      })
    },
    paySelectConfirm: function (e) {
      this.setData({
        payShow: 'none' 
      })
    },
    showaddr:function(e){
      this.setData({
        showAddr:'none'
      })
    },
    toAddr:function(e){
      wx.navigateTo({
        url: '/pages/addr/addr',
      })
    }
  }
})
