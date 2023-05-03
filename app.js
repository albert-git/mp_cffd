//app.js
import {apiGetFastLogin} from "/comms/commApi/apiLogin/login.js"
import {screenSize} from "/comms/commDevice/deviceInfo.js"

App({
  
  onLaunch: function () {
    var that = this  
    
    that.globalData.resCode = 1
    
    // 登录
    /*
    wx.login({   
      success: res => {
        that.globalData.resCode = res.code
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        apiGetFastLogin(res.code)
        
      }
    })
    
    wx.login({
      success: res => {
        console.log(res, 'from wx.login')
        getApp().globalData.code = res.code
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    
    wx.getSetting({
      success: res => {
        console.log(res, 'from wx.getSetting')
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log(res.encryptedData,res.iv,'from userinfo')
              // 可以将 res 发送给后台解码出 unionId
              //this.globalData.userInfo = res.userInfo
              let endata = res.encryptedData
              let iv = res.iv
              setTimeout(() => {
                let code = getApp().globalData.code
                wx.request({
                  url: 'https://mp.ejiajunxy.cn/api/super',
                  method: "post",
                  data: {
                    endata: endata,
                    iv: iv,
                    code: code
                  },
                  success: function (res) {
                    console.log(res)
                  }
                })

              }, 1000)
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
              
            }
          })
        }
      }
    }) */
  },  
  globalData: {
    userInfo: null,
    adimg:'flex'
  }
})