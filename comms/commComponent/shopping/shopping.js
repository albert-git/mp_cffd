// comms/commComponent/shopping/shopping2.js
const db = require("../../commApi/localdb.js")
import { getElePosition, moveIt } from "../../commDevice/deviceInfo.js" 
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgs:Array,
    
    initPageSize:Number,
    loadPageSize:Number
  },
  
  /**
   * 组件的初始数据
   */
  data: {
    canImove: true,
    showMe: false,
    moveLeft: 0,
    moveTop: 0,
    buyCount: 0,
    coverFlag: false,
    loadDataFrom: 0,
    loadDataTo: 8,
    loadingData: false,
    hidden: false,
    foodPath:db.imgPath.food,
    cartX:300,
    cartY:440,
    upperLoader:false
  },
  attached:function(e){
    var that = this
    getElePosition("#cart", that)
    
    this.setData({
      imgs:this.properties.imgs,
      
      //productPath:that.properties.productPath,
      initPageSize:that.properties.initPageSize,
      loadPageSize:that.properties.loadPageSize,
      
    })
    
    
    
  },
   
  /**
   * 组件的方法列表
   */
  methods: {
    
    //上拉刷新
    onUpper:function(e){
        this.triggerEvent("upperFlash")
        var that = this
        if (!that.data.upperLoader) {
          
          that.setData({
            upperLoader: true,
            hidden: true
          })
          this.triggerEvent("hideOrshow", "flex")
          wx.showLoading({
            title: '数据加载中',
          })
          setTimeout(() => {
            that.setData({
              imgs: [
                { id: 1, img: '凉皮.jpg', name: 'kuizuf', num: 4, priceNew: 14, priceOld: 8 },
                { id: 2, img: '奥尔良烤全腿.jpg', name: 'gesewj', num: 24, priceNew: 18, priceOld: 11 },
                { id: 2, img: '奥尔良烤全腿.jpg', name: 'gesewj', num: 24, priceNew: 18, priceOld: 11 },
                { id: 1, img: '凉皮.jpg', name: 'kuizuf', num: 4, priceNew: 14, priceOld: 8 },
                { id: 2, img: '奥尔良烤全腿.jpg', name: 'gesewj', num: 24, priceNew: 18, priceOld: 11 },
                { id: 2, img: '奥尔良烤全腿.jpg', name: 'gesewj', num: 24, priceNew: 18, priceOld: 11 }

              ]
            })

            wx.hideLoading()

            that.setData({
              upperLoader: false,
              hidden: false
            })

          }, 1000)
        } 
      
      
    },
    listMore: function (e) {
      var that = this
      this.setData({
        loadDataFrom: this.data.loadDataTo,
        loadDataTo: this.data.loadDataTo + 4
      })
      this.setData({
        imgs: this.data.imgs.concat(db.food.slice(0, 3))
      })

    },
    loadMore: function (e) {
      var that = this
      if (!that.data.loadingData) {
        that.setData({
          loadingData: true,
          hidden: true
        })
        wx.showLoading({
          title: '数据加载中',
        })
        setTimeout(() => {
          that.listMore()
          wx.hideLoading()
          that.triggerEvent("hideOrshow","none")
          that.setData({
            loadingData: false,
            hidden: false
            
          })
        }, 500)
      }
    },
    showDetail:function(e){
      this.triggerEvent("showDetail",e.currentTarget.dataset.detail)
    },
    buyIt2: function (e) {
      var that = this
      console.log(e)
      //当前绿十字的坐标
      let buyId = e.currentTarget.dataset.buy
      wx.createSelectorQuery().in(this).select(buyId).boundingClientRect(function (rect) {


      }).exec()
      let x = e.touches[0].clientX
      let y = e.touches[0].clientY
      let itemObj = e.currentTarget.dataset.item

      moveIt(x, y, that, e.currentTarget.id, itemObj)

    },

    buyIt: function (e) {
      let num = e.currentTarget.dataset.item.num 
      if (this.data.canImove && num > 0) {
        var that = this
        
        //当前绿十字的坐标
        let buyId = e.currentTarget.dataset.buy
        wx.createSelectorQuery().in(this).select(buyId).boundingClientRect(function (rect) {
          //let x = e.touches[0].clientX
          //let y = e.touches[0].clientY
          let x = rect.left
          let y = rect.top
          let itemObj = e.currentTarget.dataset.item
          
          moveIt(x, y, that, e.currentTarget.id, itemObj)

        }).exec()   
      }
      
      
      
    },
    
    getCartPosition:function(data){
      var that = this
      that.setData({
        cartX:data.x,
        cartY:data.y
      })
      
    }

  }
})
