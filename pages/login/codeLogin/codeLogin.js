// pages/login/codeLogin/codeLogin.js
import { apiGetSmsCode as getCode } from "../../../comms/commApi/apiLogin/loginDemo.js"
import { apiGetLoginWithCode as loginWithCode} from "../../../comms/commApi/apiLogin/login.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cannotInput:true 
  },
  phoneInput:function(e){
    this.setData({
      phoneNum:e.detail.value
    })
  },
  codeInput:function(e){
    this.setData({
      smsCode:e.detail.value
    })
  },
  loginWithSmsCode:function(e){
    
    let phoneNum = this.data.phoneNum + ""
    let inputCode = this.data.smsCode + ""
    let urlCode = this.data.getSmsCode
    
    
    if (phoneNum.length < 12 && inputCode == urlCode){
      loginWithCode({phoneNum:phoneNum,smsCode:urlCode})
    }
    
  },
  //发送验证码
  apiGetCode:function(e){
    let who = this
    let phone = this.data.phoneNum
    getCode(who,phone)
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