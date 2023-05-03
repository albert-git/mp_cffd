import {apiUrl,localPage} from "../routeUrl.js"


/**
 * @describe 警告窗体
 */
function alermShow(data){
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
function routePages(routeType,routePage,params){
  let routeObject = {
    "redirect":function(page){
      wx.redirectTo({
        url: page,
      })
    },
    "switch":function(page){
      wx.switchTab({
        url: page,
      })
    },
    "navigate":function(page){
      wx.navigateTo({
        url: page,
      })
    }
  }
  if(routeObject[routeType]){
    routeObject[routeType](routePage)
  }
  
}

/**
 * @describe 授权登录后，发往后台获取openId,unionId
 * @param iv
 * @param code
 * @param encryptedData the data include unionId
 */
function apiGetNewOld(data){
  routePages('redirect', localPage.loginWithCode)
  /*
  wx.request({
    url: apiUrl.loginAuth,
    method:"post",
    data:{
      code:data.code,
      encryptedData:data.encryptedData,
      iv:data.iv
    },
    success:function(res){
      //成功返回
      if (res.statusCode == 0){
        // userFlag 区分用户的两种情况
        // 1 unionId已经和手机号绑定，但未绑定openId；数据库中无unionId
        let userFlag = res.data.userFlat
        let phoneNum = res.data.phoneNum
        let sessionValue = res.data.sessionKey
        // 用户是第一种情况，直接进入产品界面
        if (userFlag == 1){
          writeFoo('userSession',sessionValue)
          routePages('switch',localPage.product)
        } 
        //用户是第二种，进入手机验证码登录
        else if(userFlag == 2){
          let unionId = res.data.unionId
          let openId = res.data.openId
          //userFlag -1 用户状态未知
          writeFoo('userFlag',-1)
          writeFoo('unionId',unionId)
          writeFoo('openId',openId)
          routePages('redirect', localPage.loginWithCode)
        }

      }
    },
    fail:function(res){
      routePages('redirect', localPage.loginWithCode)
    }
  })
  */
}

/**
 * @describe 向本地存储或全局变量以键值对的形式保留信息
 */
function writeFoo(key,value){
  var that = getApp()
  try {
    wx.setStorageSync(key, value)
  }catch(err){
    that.globalData.key = value
  }
}

/**
 * @describe 从本地存储或全局变量张返回值
 */
function getFoo(key){
  var that = getApp()
  var rtnVal
  if (wx.getStorageSync(key)){
    rtnVal = wx.getStorageSync(key)
  } else if (that.globalData.key){
    rtnVal = that.globalData.key
  }
  return rtnVal
}


/**
 * describe:从wx.login得到code,发往服务器做快速认证
 */
function apiGetFastLogin(code){
  var that = getApp()
  
  wx.request({
    url: apiUrl.loginFast,
    method:"post",
    data:{
      code:code
    },
    success:function(res){
      //用户已经在平台注册，手机号,unionId,openId已成功绑定
      if (res.statusCode == 0){
        //存储从应用服务器传来的session_key,使用同步方法
        let sessionValue = res.data.sessionKey
        writeFoo("userSession",sessionValue)
        // direct to product page
        routePages('switch',localPage.product)

      } else{
        //用户状态-1表示未知，用户第一次登录没有经过手机认证，无法判断
        writeFoo('userFlag',-1)
        routePages('redirect',pageHowtoLogin)
      }
    },
    //调用失败，返回服务器错误
    fail:function(e){
      that.globalData.appServerStatus = "服务器忙，稍后请重试"
      /*
      wx.redirectTo({
        url: '/pages/login/phoneLogin/phoneLogin',
      })
      */
    }
  })
  
}


/**
 * @describe 获取登录验证码
 * @param who 请求验证码的窗体
 */
function apiGetLoginSmsCode(who){
  wx.request({
    url: apiUrl.loginGetCode,
    method:"post",
    success:function(res){
      let smsCode = res.data.smsCode+""
      if (res.statusCode == 0 && smsCode.length > 0){
        who.setData({
          getSmsCode:smsCode,
          codeRecieve:false
        })
      } else {
        alermShow({title:"数据错误",content:"获取验证码错误，请重试"})
      }
    },
    fail:function(e){
      // 测试
      who.setData({
        getSmsCode: "123",
        codeRecieve: false
      })
      alermShow({title:"网络错误",content:"网络忙，请稍后再试"})
    }
    
  })
}

/**
 * @describe 利用验证码登录
 * @param data objects
 */
function apiGetLoginWithCode(data){
  let openId = getFoo("openId")
  let unionId = getFoo("unionId")
  let phoneNum = data.phoneNum
  let smsCode = data.smsCode
  routePages("navigate", localPage.addInfo)
  /*
  //if (!openId || !unionId){
  // 测试 
  if (0){  
    alermShow({title:"缺少数据",content:"请重新授权登录"})
    wx.redirectTo({
      url: localPage.auth,
    })
  } else {
    wx.request({
      url: apiUrl.loginWithCode,
      method:"post",
      data:{
        openId:openId,
        unionId:unionId,
        phoneNum:phoneNum,
        smsCode:smsCode
      },
      success:function(res){
        let userFlag = res.data.userFlag
        if(res.statusCode == 0){
          writeFoo("userSession", res.data.sessionKey)
          // 1 代表是老用户
          if (userFlag == 1) {
            routePages("navigate",localPage.product)
          } 
          // 2 代表是新用户
          else if (userFlag == 2) {
            routePages('navigate',localPage.addInfo)  
          }
        }
      },
      fail:function(e){
        //alermShow({ title: "网络错误", content: "网络忙，请稍后再试" })
        routePages("navigate",localPage.addInfo)
      }
    })
  }
  */
}
export { apiGetFastLogin, getFoo, writeFoo, apiGetNewOld,apiGetLoginWithCode,  apiGetLoginSmsCode}