var apiUrlLoginWithCode = "https://mp.ejiajunxy.cn/api/login/smsCode" //用验证码登录
var apiUrlLoginSmsCode = "https://mp.ejiajunxy.cn/api/sms/login" //短信验证登录
var apiUrlFastLogin = "https://mp.ejiajunxy.cn/api/login/fastLogin"
var apiUrlLogin = "https://mp.ejiajunxy.cn/api/login/login"
var apiUrlLoginPhonePwd = "https://mp.ejiajunxy.cn/api/login/phonePwd"
var apiUrlLoginPhoneCheckCode = "https://mp.ejiajunxy.cn/api/login/phoneCode"

var localPage = {
  product: "/pages/product/product",
  loginWithCode:"/pages/login/codeLogin/codeLogin",
  auth:"/pages/login/login",
  addInfo:"/pages/login/addData/addData",
  addAddr:"/pages/login/addAddr/addAddr"
}

var apiBase = "https://mp.ejiajunxy.cn/api/"
var apiUrl = {
  loginWithCode:  apiBase + "accounts/sms-code/",     //用验证码登录   
  loginGetCode:   apiBase + "sms/login/phone-number", //得到登录验证码
  loginFast:      apiBase + "accounts/open-id/",      //在后台手机号；unionId；openId已绑定
  loginAuth:      apiBase + "",                       //授权登录后
}

export {apiUrl,localPage}
