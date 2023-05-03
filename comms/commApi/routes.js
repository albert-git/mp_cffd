/**
 * @describe 所有对外接口对照信息
 */
var routes = {
  "/pages/shopping/shopping/initPage":{apiUrl:"htts://s1api.ejiajunxy.cn/...",apiFunc:apiGetProductInitData},//页面的初始展现数据
  "/pages/shopping/shopping/addShowData":{apiUrl:"https://s1api.ejiajunxy.cn/....",apiFunc:apiAddShowData},//下拉追加数据
  "/pages/shopping/shopping/modiAddr":{apiUrl:"",apiFunc:apiGetAddr},//修改地址信息
  "/pages/shopping/shopping/addProd2cart":{apiUrl:"",apiFunc:apiAddProd2cart},//点击绿色十字添加商品
}

/**
 * @describe 餐饮和超市的商品初始化数据,默认时餐饮的饮料数据
 * @param obj 从请求页面传来的对象数据包
 */
function apiGetProductInitData(obj){
  let url = routes["/pages/shopping/shopping/initPage"].apiUrl
  wx.request({
    url: '',
    data:{
      //请求参数
    }
  })
}

/**
 * @describe 下拉追加数据
 * @param
 */
function apiAddShowData(obj){

}

/**
 * @describe 修改地址信息
 */
function apiGetAddr(obj){

}

/**
 * @describe 添加商品到购物车
 */
function apiAddProd2cart(obj){

}


