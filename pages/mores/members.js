// pages/mores/members.js
Page({

  /**
   * 页面的初始数据
   * directtion 表示swiper方向是横向还是纵向
   */
  data: {
    tabs:[
      {imgSrc0:"/images/members/vip-1.png",imgSrc1:"/images/members/vip-2.png",imgTxt:"VIP会员",describe:"开通VIP会员，享受更多权益",direction:"false"},
      {imgSrc0:"/images/members/voucher-1.png",imgSrc1:"/images/members/voucher-2.png",imgTxt:"代金卷",describe:"使用代金券消费更优惠",direction:"true"}
    ],
    payChannels:[
      {id:0,payName:"微信支付",payImg:"/images/payment/wechat-2.png"},
      { id: 1, payName: "余额支付", payImg:"/images/payment/balance-3.png"}
    ],
    payShow:'none',
    vips:[
      {vipMon:"会员1个月",vipPrice:19.9,recommend:false},
      {vipMon:"会员2个月",vipPrice:99,recommend:false},
      {vipMon:"会员12个月",vipPrice:150,recommend:true}
    ],
    
    mySelected:0,
    vouchers:[
      { id: 0, voucherPrice: 3, voucherDescribe:"2元代金券 x 5张"},
      { id: 0, voucherPrice: 5, voucherDescribe: "2元代金券 x 10张" },
      { id: 0, voucherPrice: 10, voucherDescribe: "3元代金券 x 10张" }
    ],
    whichOne:0,
    swiperVertical:false,
    currentTab:0
  },
  
  selectVoucher:function(e){
    
    let selected = e.currentTarget.dataset.voucher
    this.setData({
      mySelected:selected,
      voucher:this.data.vouchers[selected]
    })
  },
  bindChange:function(e){
    this.setData({ currentTab: e.detail.current });
  },
  selectOne:function(e){
    
    this.setData({
      whichOne:e.currentTarget.dataset.selected,
      vip: this.data.vips[e.currentTarget.dataset.selected]
    })
    
  },
  swichNav: function (e) {
    
    var that = this;
    console.log(e)
    if (that.data.currentTab !== e.currentTarget.dataset.current) {
      that.setData({
        currentTab: e.currentTarget.dataset.current,
        describeTxt:e.currentTarget.dataset.describe,
        swiperVertical:e.currentTarget.dataset.direction
      })
    }


  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      describeTxt:this.data.tabs[0].describe,
      vip:this.data.vips[0],
      voucher:this.data.vouchers[0]
    })
  }

})