// pages/login/phoneLogin/phoneLogin.js
import { apiGetLoginPhonePwd as phoneLogin } from "../../../comms/commApi/apiLogin/login.js"
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    
  },
  proofError:function(){
    wx.showModal({
      title: '警告',
      content: '手机号或密码错误，您可以选择使用短信验证码登录',
      showCancel: false,
      confirmText: '返回',
      success: function (res) {
        // do nothing
      }
    })
  },
  phoneInput:function(e){
    this.setData({
      phoneNum:e.detail.value
    })
  },
  pwdInput:function(e){
    this.setData({
      pwd:e.detail.value
    })
  },
  onLoad: function (options) {
    
  },
  loginWithPhone:function(e){
    console.log('from button')
    var that = this
    phoneLogin(that,{phoneNum:this.data.phoneNum,pwd:this.data.pwd})
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})