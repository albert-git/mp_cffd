import { food, code2unionId as c2u } from "../localdb.js"
import {apiUrl,localPage} from "../routeUrl.js"
/**
 * @describe 警告窗体
 */
function alermShow(data) {
  wx.showModal({
    title: data.title,
    content: data.content,
    showCancel: false,
    confirmText: '返回'
  })
}


/**
 * @describe 根据各种指令路由数据
 * @param routeType 路由指令类型
 * @param params  路由参数
 */
function routePages(routeType, routePage, params) {
  let routeObject = {
    "redirect": function (page) {
      wx.redirectTo({
        url: page,
      })
    },
    "switch": function (page) {
      wx.switchTab({
        url: page,
      })
    },
    "navigate": function (page) {
      wx.navigateTo({
        url: page,
      })
    }
  }
  if (routeObject[routeType]) {
    routeObject[routeType](routePage)
  }

}



/**
 * @describe 向本地存储或全局变量以键值对的形式保留信息
 */
function writeFoo(key, value) {
  var that = getApp()
  try {
    wx.setStorageSync(key, value)
  } catch (err) {
    that.globalData.key = value
  }
}

/**
 * @describe 从本地存储或全局变量返回值
 */
function getFoo(key) {
  var that = getApp()
  var rtnVal
  if (wx.getStorageSync(key)) {
    rtnVal = wx.getStorageSync(key)
  } else if (that.globalData.key) {
    rtnVal = that.globalData.key
  }
  return rtnVal
}
/**
 * @describe 判断新老用户，点击授权登录后发起的网络请求
 * @param data 包含rescode,iv,encreptedData的对象
 */
function apiGetNewOld(data){
  var p = demoApi((z)=>{
    let code = z.code
    return {
      sessionKey: c2u[code].sessionKey,
      unionId: c2u[code].unionId,
      openId: c2u[code].openId,
      phoneNum: c2u[code].phoneNum
    }
  },data)
  p.then(obj=>{
    if (obj.phoneNum){
      routePages('redirect',localPage.loginWithCode)
    }
    
  })
  
}

/**
 * @describe 发送短信验证码
 * @param who 表示发送验证码的窗体
 */
function apiGetSmsCode(who,phoneNum){
  let p = demoApi((z)=>{
    return 123
  },phoneNum)
  
  p.then(code=>{
    who.setData({
      getSmsCode:code,
      cannotInput:false
    })
  })
}

/**
 * @describe 使用手机号和验证码登录
 */
function apiLoginWithCode(){

}
function demoApi(func,data){
  return new Promise((resolve,reject)=>{
    //func(resolve,reject,data)
    setTimeout(()=>{
      let result = func(data)
      resolve(result)
    },2000)
  })
}


export { apiGetNewOld, apiGetSmsCode}