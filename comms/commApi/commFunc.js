import { apiUrl, localPage } from "./routeUrl.js"
/**
 * @describe 警告窗体
 */
function alermShow(data) {
  wx.showModal({
    title: data.title,
    content: data.content,
    showCancel: false,
    confirmText: !data.confirmText ? '返回' : data.confirmText
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
 * @describe 从本地存储或全局变量张返回值
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
 * 模拟网络调用，返回一个promise对象
 */
function demoApi(func, data) {
  return new Promise((resolve, reject) => {
    //func(resolve,reject,data)
    setTimeout(() => {
      let result = func(data)
      resolve(result)
    }, 2000)
  })
}

export { alermShow, routePages, demoApi, getFoo, writeFoo }