var food = [{ id: 1, img: '凉皮.jpg', name: 'kuizuf', num: 4, priceNew: 14, priceOld: 8 }, { id: 2, img: '奥尔良烤全腿.jpg', name: 'gesewj', num: 24, priceNew: 18, priceOld: 11 }, { id: 3, img: '宫保鸡丁盖饭.jpg', name: 'ldpzcb', num: 7, priceNew: 17, priceOld: 25 }, { id: 4, img: '扬州炒饭.jpg', name: 'gltnop', num: 25, priceNew: 12, priceOld: 1 }, { id: 5, img: '炒米线.jpg', name: 'itdkty', num: 22, priceNew: 19, priceOld: 19 }, { id: 6, img: '炒面.jpg', name: 'bdqnbw', num: 21, priceNew: 5, priceOld: 1 }, { id: 7, img: '猪肝盖饭.jpg', name: 'tcwmkw', num: 6, priceNew: 15, priceOld: 2 }, { id: 8, img: '素菜混拼.jpg', name: 'jqgrzp', num: 23, priceNew: 6, priceOld: 17 }, { id: 9, img: '红三剁.jpg', name: 'kcsemv', num: 13, priceNew: 15, priceOld: 15 }, { id: 10, img: '红烧肉套饭.jpg', name: 'ebfdpu', num: 1, priceNew: 23, priceOld: 15 }, { id: 11, img: '肉夹馍.jpg', name: 'bobrwk', num: 12, priceNew: 5, priceOld: 10 }, { id: 12, img: '肥肠盖饭.jpg', name: 'rmgzpe', num: 24, priceNew: 20, priceOld: 14 }, { id: 13, img: '超大鸡排.jpg', name: 'vwntet', num: 9, priceNew: 12, priceOld: 15 }, { id: 14, img: '酸菜肉丝炒饭.jpg', name: 'tntzil', num: 7, priceNew: 12, priceOld: 17 }, { id: 15, img: '青椒肉片盖饭.jpg', name: 'vrtxzt', num: 13, priceNew: 14, priceOld: 5 }, { id: 16, img: '香菇滑鸡饭.jpg', name: 'lcellm', num: 23, priceNew: 14, priceOld: 8 }, { id: 17, img: '香辣汉堡.jpg', name: 'dukyzw', num: 21, priceNew: 14, priceOld: 9 }, { id: 18, img: '香酥鸡腿.jpg', name: 'sznrlz', num: 8, priceNew: 2, priceOld: 9 }, { id: 19, img: '鸡翅尖.jpg', name: 'hfiblu', num: 19, priceNew: 17, priceOld: 10 }, { id: 20, img: '鸡翅饭.jpg', name: 'mohwbf', num: 25, priceNew: 22, priceOld: 15 }, { id: 21, img: '鸡肉卷.jpg', name: 'qrxbiv', num: 10, priceNew: 1, priceOld: 22 }, { id: 22, img: '鸡腿饭.jpg', name: 'tewjdm', num: 17, priceNew: 5, priceOld: 21 }, { id: 23, img: '鸭心.jpg', name: 'xxwsmn', num: 18, priceNew: 6, priceOld: 23 }, { id: 24, img: '鸭架（2个）.jpg', name: 'wghzbf', num: 15, priceNew: 13, priceOld: 1 }, { id: 25, img: '鸭肠.jpg', name: 'iffihv', num: 13, priceNew: 11, priceOld: 12 }, { id: 26, img: '鸭脖.jpg', name: 'tbjnmw', num: 17, priceNew: 21, priceOld: 20 }, { id: 27, img: '黄焖鸡米饭.jpg', name: 'bsvgby', num: 8, priceNew: 21, priceOld: 2 }]

var superMarket = [{ id: 1, img: '3度rio柠檬朗姆味鸡尾酒330ml.jpg', name: 'hmwgyc', num: 19, priceNew: 18, priceOld: 21 }, { id: 2, img: '450ml蓝色百事可乐.jpg', name: 'kozhgp', num: 21, priceNew: 16, priceOld: 17 }, { id: 3, img: '70g单身狗粮（地中海盐味）.jpg', name: 'lfbqlj', num: 23, priceNew: 7, priceOld: 4 }, { id: 4, img: '70g单身狗粮（日式青芥味）.jpg', name: 'yxpjrd', num: 10, priceNew: 5, priceOld: 22 }, { id: 5, img: '万宝路黑冰爆珠.jpg', name: 'jgttfg', num: 4, priceNew: 8, priceOld: 19 }, { id: 6, img: '乐虎380ml.jpg', name: 'ksfgum', num: 17, priceNew: 3, priceOld: 5 }, { id: 7, img: '云烟（紫云）.jpg', name: 'ctsjcw', num: 2, priceNew: 19, priceOld: 20 }, { id: 8, img: '云烟（软珍品）.jpg', name: 'gkqipm', num: 14, priceNew: 24, priceOld: 2 }, { id: 9, img: '兰州（硬珍品）.jpg', name: 'iwphkw', num: 25, priceNew: 23, priceOld: 23 }, { id: 10, img: '农夫山泉饮用天然水550ml.jpg', name: 'gswgzy', num: 15, priceNew: 24, priceOld: 7 }, { id: 11, img: '凑数的.jpg', name: 'vudjed', num: 1, priceNew: 18, priceOld: 8 }, { id: 12, img: '利群（新版）.jpg', name: 'vgzuyj', num: 19, priceNew: 4, priceOld: 16 }, { id: 13, img: '利群（蓝天）.jpg', name: 'jqmoyw', num: 23, priceNew: 17, priceOld: 2 }, { id: 14, img: '南京（煊赫门）.jpg', name: 'thljmx', num: 2, priceNew: 20, priceOld: 8 }, { id: 15, img: '南京（金陵十二钗薄荷）.jpg', name: 'pdjozr', num: 14, priceNew: 15, priceOld: 6 }, { id: 16, img: '友圆泡椒猪脆90g.jpg', name: 'igqvxv', num: 12, priceNew: 11, priceOld: 12 }, { id: 17, img: '双汇泡面搭档.jpg', name: 'kkoztv', num: 6, priceNew: 6, priceOld: 25 }, { id: 18, img: '双汇玉米肠.jpg', name: 'qvqzej', num: 22, priceNew: 2, priceOld: 7 }, { id: 19, img: '口味王青果槟榔.jpg', name: 'zhzxss', num: 19, priceNew: 8, priceOld: 23 }, { id: 20, img: '可口可乐500ml.jpg', name: 'egopbc', num: 13, priceNew: 16, priceOld: 4 }, { id: 21, img: '咚咚蛋定32g.jpg', name: 'nmjlik', num: 4, priceNew: 23, priceOld: 12 }, { id: 22, img: '唐世酒鬼花生90g.jpg', name: 'cgtyhd', num: 13, priceNew: 12, priceOld: 14 }, { id: 23, img: '喜之郎什锦果肉果冻200g.jpg', name: 'nfjjyw', num: 11, priceNew: 6, priceOld: 12 }, { id: 24, img: '大隆汇logo.jpg', name: 'rkjxvu', num: 11, priceNew: 12, priceOld: 19 }, { id: 25, img: '好巴食南溪豆干.jpg', name: 'wfmvhv', num: 18, priceNew: 18, priceOld: 19 }, { id: 26, img: '娃哈哈苏打水350g.jpg', name: 'twfocm', num: 18, priceNew: 16, priceOld: 11 }, { id: 27, img: '娃哈哈营养快线原味500g.jpg', name: 'dmcylk', num: 13, priceNew: 16, priceOld: 15 }, { id: 28, img: '小茗同学溜溜哒.jpg', name: 'zexxmr', num: 17, priceNew: 2, priceOld: 15 }, { id: 29, img: '小茗同学青柠红茶.jpg', name: 'dqufqu', num: 23, priceNew: 22, priceOld: 19 }, { id: 30, img: '康师傅冰红茶1l.jpg', name: 'kfkquy', num: 25, priceNew: 1, priceOld: 14 }, { id: 31, img: '康师傅泡椒牛肉面.jpg', name: 'mkkpwl', num: 24, priceNew: 20, priceOld: 16 }, { id: 32, img: '康师傅泡椒竹笋鸡面.jpg', name: 'ctscwt', num: 1, priceNew: 1, priceOld: 8 }, { id: 33, img: '康师傅红烧牛肉面.jpg', name: 'hfkgfl', num: 11, priceNew: 23, priceOld: 11 }, { id: 34, img: '康师傅老坛酸菜面.jpg', name: 'eqnglr', num: 15, priceNew: 6, priceOld: 22 }, { id: 35, img: '康师傅辣卤香牛肉面.jpg', name: 'ktzlod', num: 13, priceNew: 2, priceOld: 18 }, { id: 36, img: '康师傅酸辣牛肉面.jpg', name: 'qtyrcl', num: 4, priceNew: 6, priceOld: 8 }, { id: 37, img: '康师傅香菇炖鸡面.jpg', name: 'gjbjjx', num: 13, priceNew: 20, priceOld: 3 }, { id: 38, img: '康师傅鲜虾鱼板面.jpg', name: 'bsyssz', num: 18, priceNew: 19, priceOld: 2 }, { id: 39, img: '康师傅麻辣牛肉.jpg', name: 'ngtfel', num: 6, priceNew: 23, priceOld: 8 }, { id: 40, img: '康师傅黑胡椒牛排面.jpg', name: 'gzuxuk', num: 17, priceNew: 5, priceOld: 25 }, { id: 41, img: '旺仔125ml.jpg', name: 'xhlxkk', num: 11, priceNew: 13, priceOld: 3 }, { id: 42, img: '旺仔245ml罐装.jpg', name: 'ibwctm', num: 1, priceNew: 5, priceOld: 23 }, { id: 43, img: '有友泡凤爪100g.jpg', name: 'phbshk', num: 9, priceNew: 17, priceOld: 15 }, { id: 44, img: '果粒橙450ml.jpg', name: 'tkwgxr', num: 14, priceNew: 8, priceOld: 9 }, { id: 45, img: '汤达人日式豚骨拉面.jpg', name: 'nbhzzg', num: 18, priceNew: 8, priceOld: 13 }, { id: 46, img: '汤达人海鲜拉面.jpg', name: 'jtdnsw', num: 23, priceNew: 11, priceOld: 19 }, { id: 47, img: '汤达人韩式辣牛面.jpg', name: 'tifhvo', num: 12, priceNew: 11, priceOld: 5 }, { id: 48, img: '洽洽原味瓜子200g.jpg', name: 'tttbbf', num: 22, priceNew: 18, priceOld: 21 }, { id: 49, img: '洽洽山核桃味瓜子.jpg', name: 'qlfzke', num: 21, priceNew: 7, priceOld: 17 }, { id: 50, img: '洽洽每日坚果26g.jpg', name: 'ritqyh', num: 17, priceNew: 12, priceOld: 19 }, { id: 51, img: '洽洽焦糖瓜子.jpg', name: 'lmjefl', num: 1, priceNew: 14, priceOld: 10 }, { id: 52, img: '火鸡面.jpg', name: 'nnptkf', num: 20, priceNew: 22, priceOld: 14 }, { id: 53, img: '爱喜（爆珠）.jpg', name: 'huvucu', num: 23, priceNew: 11, priceOld: 9 }, { id: 54, img: '爱喜（绿）.jpg', name: 'wgbchh', num: 3, priceNew: 14, priceOld: 4 }, { id: 55, img: '玉溪（软）.jpg', name: 'symtgd', num: 15, priceNew: 4, priceOld: 25 }, { id: 56, img: '王老吉310ml.jpg', name: 'hfvdkl', num: 4, priceNew: 16, priceOld: 8 }, { id: 57, img: '琥珀小米锅巴.jpg', name: 'gbpjcx', num: 7, priceNew: 2, priceOld: 12 }, { id: 58, img: '红塔山（1956）.jpg', name: 'mjyuir', num: 3, priceNew: 10, priceOld: 9 }, { id: 59, img: '红塔山（硬经典）.jpg', name: 'jelmfz', num: 13, priceNew: 8, priceOld: 18 }, { id: 60, img: '红河（硬88）.jpg', name: 'oerjfy', num: 10, priceNew: 12, priceOld: 23 }, { id: 61, img: '统一阿萨姆奶茶.jpg', name: 'oobpoj', num: 5, priceNew: 25, priceOld: 5 }, { id: 62, img: '脉动青柠口味600ml.jpg', name: 'pxczdl', num: 5, priceNew: 3, priceOld: 8 }, { id: 63, img: '贤哥手撕牛排味辣条.jpg', name: 'ptgero', num: 10, priceNew: 19, priceOld: 19 }, { id: 64, img: '贤哥辣条.jpg', name: 'bxtvys', num: 20, priceNew: 24, priceOld: 24 }, { id: 65, img: '银鹭桂圆八宝粥.jpg', name: 'isuxlc', num: 15, priceNew: 15, priceOld: 4 }, { id: 66, img: '雀巢丝滑拿铁.jpg', name: 'sucbhj', num: 8, priceNew: 2, priceOld: 17 }, { id: 67, img: '雪碧500ml.jpg', name: 'ldtdiw', num: 4, priceNew: 15, priceOld: 10 }]

var code2unionId = [{ sessionKey: 0, unionId: 0, openId: 0 }, { sessionKey: 1, openId: 1, unionId: 1, phoneNum: 369 }, { sessionKey: 2, openId: 2, unionId: 2 }]

var imgPath = {
  food : "https://mp.ejiajunxy.cn/food/",
  superMarket : "https://mp.ejiajunxy.cn/superMarket/"
}
const superMarketMenu = [
  { imgSrc: "/images/products/drink-2.png", imgTxt: "饮料" },
  { imgSrc: "/images/products/dinner-2.png", imgTxt: "泡面" },
  { imgSrc: "/images/products/dinner-2.png", imgTxt: "泡面伴侣" },
  { imgSrc: "/images/products/smoke-2.png", imgTxt: "香烟" }
]
const foodMenu = [
  { imgSrc: "/images/products/drink-2.png", imgTxt: "饮料" },
  { imgSrc: "/images/products/dinner-2.png", imgTxt: "泡面" },
  { imgSrc: "/images/products/dinner-2.png", imgTxt: "泡面伴侣" },
  { imgSrc: "/images/products/smoke-2.png", imgTxt: "香烟" }
]
const prodInitList = {
  "s001":superMarket.slice(0,6), //超市饮料
  "s002":superMarket.slice(6,12),//"超市泡面",
  "s003":superMarket.slice(12,18),//"超市泡面伴侣",
  "s004":superMarket.slice(18,24),//"超市香烟",
  "f001":food.slice(0,6),//"美食早晨",
  "f002":food.slice(6,12),//"美食中餐",
  "f003":food.slice(12,18),//"美食午餐",
  "f004":food.slice(18,24)//"美食夜宵"
}

/**
 * 返回商品列表的页面配置参数对象
 * @param productPath
 */
function rtnPageCfg(){
  return {
    canImove: true,
    showMe: false,
    moveLeft: 0,
    moveTop: 0,
    coverFlag: false,
    loadDataFrom: 0,
    loadDataTo: 6,
    loadingData: false,
    hidden: false,
    data: [],
    pPath:productPath
  }  

}
export {food,superMarket,code2unionId,imgPath,superMarketMenu,foodMenu,prodInitList,rtnPageCfg}