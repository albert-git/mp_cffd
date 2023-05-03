import {apiGetNewOld} from "../..//comms/commApi/apiLogin/loginDemo.js"
import {food} from "../../comms/commApi/localdb.js"
Page({
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
       
  },
  onTap:function(e){
    wx.navigateTo({
      url: '/pages/login/addData/addData',
    })
  },
  bindGetUserInfo: function (e) {
    console.log(e)
    console.log(wx.canIUse("button.open-type.getUserInfo"))
    wx.navigateTo({
      url: '/pages/login/codeLogin/codeLogin',
    })
    /*    
    //测试  
    //if (e.detail.userInfo) {
      //用户按了允许授权按钮 
      let encryptedData = 3
      let iv = 2
      let code = that.globalData.resCode
      apiGetNewOld({ code: 1, iv: 2, encryptedData:encryptedData})
      */
     
  },
  

})
