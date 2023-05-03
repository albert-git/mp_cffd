const commFunc = require("../commFunc.js")
const db = require("../localdb.js")
const INIT_PAGE_SIZE = 4 //初始展出的产品数量
const LOAD_PAGE_SIZE = 4 //加载

/**
 * @describe 进入超市和美食界面是的产品首页展示
 * @param prodType 对象类型，包括产品大类和小类
 */
function productList(prodCode,who){
  //模拟网络调用
  let prodList =  commFunc.demoApi((data)=>{
    let listProds = db.prodInitList[data]
    return listProds?listProds:[]
  },prodCode)
  
  prodList.then((data)=>{
    let result = {[prodCode]:data}
    who.setData({imgs:data})
  })

}
export {
  productList
}