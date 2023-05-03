const PageConfig = {
  "sendTimes":[
    "配送时段：06:30~08:30",
    "配送时段：11:30~13:30",
    "配送时段：17:30~19:30",
    "配送时段：22:30~23:30"
  ],
  "/pages/mines/menusA":[
    {id: "orders", imgUrl:"/images/order-form-2.png", txt: "订单",img2Url:"/images/right-arrow-2.png"},
    {id: "address", imgUrl:"/images/addr-2.png", txt: "地址", img2Url:"/images/right-arrow-2.png" },
  ],
  "/pages/mines/menusB":[
    {id:"balance",imgUrl:"/images/balance-2.png",txt:"余额",balance:100,img2Url:"/images/right-arrow-2.png",showType: "img"},
    { id: "integral",imgUrl:"/images/integral-2.png",txt:"积分",img2Url:"200", showType:"txt"},
    {id:"coupon",imgUrl:"/images/coupon-2.png",txt: "优惠券",img2Url:"/images/right-arrow-2.png",showType:"img"},
    {id: "acctSet",imgUrl:"/images/account-set-2.png",txt:"账号设置",img2Url:"/images/right-arrow-2.png",showType: "img" }
  ],
  mores:[
    { imgSrc: "/images/mores/member-center-2.png", imgTxt: "会员中心" },
    { imgSrc: "/images/mores/take-delivery-2.png", imgTxt: "代取快递" },
    { imgSrc: "/images/mores/bottle-water-2.png", imgTxt: "桶装水" }
  ],
  payChannels: [
    { id: 0, payName: "微信支付", payImg: "/images/payment/wechat-2.png" },
    { id: 1, payName: "余额支付", payImg: "/images/payment/balance-3.png" }
  ],
  "pages/smarket/tabHead": [
    { imgSrc: "/images/breakfast-2.png", imgTxt: "早餐" },
    { imgSrc: "/images/lunch-2.png", imgTxt: "午餐" },
    { imgSrc: "/images/dinner-2.png", imgTxt: "晚餐" },
    { imgSrc: "/images/nightingale-2.png", imgTxt: "夜宵" }
  ],
  "pages/shooping/tabHead":[
    { imgSrc: "/images/drink-2.png", imgTxt: "饮料" },
    { imgSrc: "/images/noodles-2.png", imgTxt: "泡面" },
    { imgSrc: "/images/partner-2.png", imgTxt: "泡面伴侣" },
    { imgSrc: "/images/smoke-2.png", imgTxt: "香烟" }
  ],
  "pages/mores/express":[
    {imgSrc:"",imgTxt:"物流信息"},
    {imgSrc:"",imgTxt:"地址信息"}
  ],
  "pages/mores/express/logistics":[
    { id: "0", txt: "物流公司", img: "/images/userCenter/right-arrow-2.png", type: "img" },
    { id: "1", txt: "快递单号", img: "请输入快递单号", type: "input" },
    { id: "2", txt: "取货码", img: "请输入取货码", type: "input" },
    { id: "3", txt: "快递电话", img: "请输入快递电话", type: "input" }
  ],
  "pages/mores/express/address":[
    { id: 0, imgSrc: "", txt:"地址（请输入送取地址和时间等信息）"},
    { id: 1, imgSrc: "/images/tabke-express-2.png", txt:"上海大学男三院\n杨阳  15000537624"},
    { id: 2, imgSrc: "/images/receive-express-2.png", txt:"请选择收件地址\n收件人信息"},
    {id:3,imgSrc:"",txt:"送达时间"}
  ],
  "pages/mines/acctSets":[
    {id:0,cmd:"更换账号"},
    {id:1,cmd:"密码修改"},
    {id:3,cmd:"更换支付密码"}
  ]
}

export {PageConfig}