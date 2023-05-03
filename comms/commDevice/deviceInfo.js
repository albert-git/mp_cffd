const commFunc = require("../commApi/commFunc.js")
function screenSize(who){
  var that = who;
  wx.getSystemInfo({
    success: function (res) {
      var ww = res.windowWidth;
      var hh = res.windowHeight;
      that.globalData.ww = ww;
      that.globalData.hh = hh;
    }
  })
}
//获取购物车位置
function getElePosition(eleId,who) {
  var that = who
  var para = eleId
  
  wx.createSelectorQuery().select(eleId).boundingClientRect(function (rect) {
    /*
    that.setData({
      cc:rect,
      cartX: rect.left,
      cartY: rect.top
    })
    */
    
  }).exec()
}

// 返回抛物线方程的三个参数 a,b,c 
// https://www.desmos.com/calculator/lac2i0bgum
function beizer(points) {
  let x1 = points.x1
  let y1 = points.y1
  let x2 = points.x2
  let y2 = points.y2
  let x3 = points.x3
  let y3 = points.y3
  let a1 = -1*x1*x1 + x2*x2
  let b1 = -1*x1 + x2
  let d1 = -1*y1 + y2
  let a2 = -1*x2*x2 + x3*x3
  let b2 = -1*x2 + x3
  let d2 = -1*y2 + y3

  let b3 = -1*(b2/b1)
  let a3 = b3*a1 + a2
  let d3 = b3*d1 + d2

  let a = d3 / a3 
  let b = (d1 - a1*a) / b1
  let c = y1 - a*x1*x1 - b*x1
  return {a:a,b:b,c:c}
}

function moveIt(sourceX, sourceY, who, idx, itemObj) {

  //判断是否可移动，在绿十字没有移动到购物车之前连续点击无效
  if (who.data.canImove && itemObj.num > 0) {
    who.setData({
      canImove: !who.data.canImove
    })
    var app = getApp()

    //先移动到绿十字
    let sourceY2 = app.globalData.adimg == 'none' ? sourceY - 80 : sourceY - 210

    who.setData({
      moveLeft: sourceX,
      //moveTop: sourceY - 200,
      moveTop: sourceY2,
      showMe: !who.data.showMe
    })

    
    

    //使用全局变量保存cart的位置 加减的数字都是测试出来的
    let targetX = app.globalData.cartPosition.left + 20
    let targetY = app.globalData.adimg == 'none' ? app.globalData.cartPosition.top - 50 : app.globalData.cartPosition.top - 180
    sourceY = sourceY2

    //第三个参照点的位置
    let delta = (targetX - sourceX) / 2
    let x2 = 0 
    let y2 = 0 
    //如果图片在左侧，则参照的在左侧，反之在购物车附近
    if (sourceY < targetY){
      x2 = sourceX + delta
      y2 = sourceY - delta
    } else {
      x2 = targetX - delta
      y2 = targetY - delta - 50
    }
    
    //求解a,b,c
    let points = {x1:sourceX,y1:-1*sourceY,x2:x2,y2:-1*y2,x3:targetX,y3:-1*targetY}
    let params = beizer(points)
    let a = params.a
    let b = params.b
    let c = params.c


    //多长时间移动一次
    let timePerStep = 15
    
    //移动多少步
    var steps = 0
    var stepX = 0
    var stepY = 0
    var stepLength = 5
    
    //总共移动多少步
    steps = (targetX - sourceX) / stepLength
    stepX = stepLength

    //如果图片在右侧，则不使用抛物线
    if (sourceX > 200){
      steps = Math.abs(targetY - sourceY) / stepLength
      stepY = -stepLength
      if (targetY > sourceY) {
        stepY = stepLength
      }
      stepX = (targetX - sourceX) / steps
    }
    
    

    var that = who
    var count = 1
    let rowNum = idx.split("-")[0] //行索引
    let pid = idx.split("-")[1] //产品id
    //移动动画
    let moveAnimation = setInterval(() => {
      let currentX = sourceX + count * stepX
      let currentY = 0
      //右侧图片不使用抛物线
      if (sourceX > 200){
        currentY = sourceY + count * stepY
      } else {
        currentY = (a * currentX * currentX + b * currentX + c) * -1
      }
      //let currentY = sourceY + count * stepY
      //let currentY = (a*currentX*currentX + b*currentX + c) * -1
      count++;
      if (count > steps + 1) {

        let num = that.data.imgs[rowNum].num -= 1
        let obj = that.data.imgs
        that.setData({
          //mySelf:who,
          showMe: !that.data.showMe,
          buyCount: that.data.buyCount + 1,
          canImove: true,
          eleId: num == 0 ? [pid / 1, num, true] : [pid / 1, num],
          imgs: obj //这个是新增加为自定义组件用的
        })

        clearInterval(moveAnimation)
        //判读是否为第一次购买
        if (!getApp().globalData.buyCount) {
          let orderGoods = [{ id: pid, name: itemObj.name, priceNew: itemObj.priceNew, priceOld: itemObj.priceOld, orderNum: 1 }]
          commFunc.writeFoo("goods", orderGoods)
          getApp().globalData.buyCount = 1
        } else {
          let orderGoods = commFunc.getFoo("goods")
          let repeatOrder = false
          for (var i in orderGoods) {
            let id = orderGoods[i].id
            if (id == pid) {
              orderGoods[i].orderNum += 1
              repeatOrder = true
              break
            }
          }
          if (!repeatOrder) {
            orderGoods.push({ id: pid, name: itemObj.name, priceNew: itemObj.priceNew, priceOld: itemObj.priceOld, orderNum: 1 })
          }
          commFunc.writeFoo("goods", orderGoods)
          getApp().globalData.buyCount += 1
        }

        who.triggerEvent("buyFoo")
      } else {
        that.setData({
          moveLeft: currentX,
          moveTop: currentY
        })
      }

    }, timePerStep)

  }
}


/**
 * @describer 动画入购物车
 * @param idx {{index}}-{{item.id}}
 * @param sourceX 点击绿十字的x位置
 * @param sourceY 点击绿十字的y位置
 * @param itemObj 每个被点击产品的详细内容
 */

/*
function moveIt2(sourceX, sourceY,who,idx,itemObj) {
  
  //判断是否可移动，在绿十字没有移动到购物车之前连续点击无效
  if (who.data.canImove && itemObj.num > 0) {
    who.setData({
      canImove: !who.data.canImove
    })
    var app = getApp()
    //先移动到绿十字
    let sourceY2 = app.globalData.adimg == 'none' ? sourceY - 50 : sourceY -200
    
    who.setData({
      moveLeft: sourceX,
      //moveTop: sourceY - 200,
      moveTop: sourceY2,
      showMe: !who.data.showMe
    })
    //移动一次的时间
    let timePerStep = 50
    //动画时长
    let moveTimes = 500
    
    
    //使用全局变量保存cart的位置 加减的数字都是测试出来的
    let targetX = app.globalData.cartPosition.left + 20
    
    let targetY = app.globalData.adimg == 'none' ? app.globalData.cartPosition.top - 50 : app.globalData.cartPosition.top -160
    
    

    //移动多少步
    let steps = moveTimes / timePerStep
    //每次移动步长
    let stepX = (targetX - sourceX) / steps
    let stepY = (targetY - sourceY) / steps

    var that = who
    var count = 1
    let rowNum = idx.split("-")[0] //行索引
    let pid = idx.split("-")[1] //产品id
    //移动动画
    let moveAnimation = setInterval(() => {
      let currentX = sourceX + count * stepX
      let currentY = sourceY + count * stepY
      count++;
      if (count > steps + 1) {
        
        let num = that.data.imgs[rowNum].num -= 1
        let obj = that.data.imgs
        that.setData({
          //mySelf:who,
          showMe: !that.data.showMe,
          buyCount: that.data.buyCount + 1,
          canImove: true,
          eleId:num==0?[pid/1,num,true]:[pid/1,num],
          imgs: obj //这个是新增加为自定义组件用的
        })
                
        clearInterval(moveAnimation)
        //判读是否为第一次购买
        if (!getApp().globalData.buyCount) {
          let orderGoods = [{id:pid,name:itemObj.name,priceNew:itemObj.priceNew,priceOld:itemObj.priceOld,orderNum:1}]
          commFunc.writeFoo("goods",orderGoods)
          getApp().globalData.buyCount = 1
        } else {
          let orderGoods = commFunc.getFoo("goods")
          let repeatOrder = false
          for (var i in orderGoods){
            let id = orderGoods[i].id
            if (id == pid){
              orderGoods[i].orderNum += 1
              repeatOrder = true
              break
            }
          }
          if (!repeatOrder){
            orderGoods.push({ id: pid, name: itemObj.name, priceNew: itemObj.priceNew, priceOld: itemObj.priceOld, orderNum: 1 })
          }
          commFunc.writeFoo("goods", orderGoods)
          getApp().globalData.buyCount += 1
        }
        
        who.triggerEvent("buyFoo")
      } else {
          that.setData({
          moveLeft: currentX,
          moveTop: currentY
        })
      }

    }, timePerStep)

  }
}
*/

function moveIt_aa(sourceX, sourceY, who, idx, itemObj) {

  //判断是否可移动，在绿十字没有移动到购物车之前连续点击无效
  if (who.data.canImove && itemObj.num > 0) {
    who.setData({
      canImove: !who.data.canImove
    })
    var app = getApp()
    //先移动到绿十字
    let sourceY2 = app.globalData.adimg == 'none' ? sourceY - 80 : sourceY - 210

    who.setData({
      moveLeft: sourceX,
      //moveTop: sourceY - 200,
      moveTop: sourceY2,
      showMe: !who.data.showMe
    })
    //移动一次的时间
    let timePerStep = 10
    //动画时长
    let moveTimes = 500


    //使用全局变量保存cart的位置 加减的数字都是测试出来的
    let targetX = app.globalData.cartPosition.left + 20

    let targetY = app.globalData.adimg == 'none' ? app.globalData.cartPosition.top - 50 : app.globalData.cartPosition.top - 180

    /*
    let targetX = who.data.cartX +20
    // let targetY = who.data.cartY +25
    let targetY = who.data.cartY - 170
    */
    sourceY = sourceY2
    //移动多少步
    var steps = 0
    var stepX = 0
    var stepY = 0
    if (sourceX < 200) {
      steps = (targetX - sourceX) / 10
      stepX = 10
      stepY = (targetY - sourceY) / steps
    } else {
      steps = Math.abs(targetY - sourceY) / 10
      stepY = -10
      if (targetY > sourceY){
        stepY = 10
      }
      stepX = (targetX- sourceX) / steps
    }
    
    
    console.log(targetX,targetY,sourceX,sourceY)
    //每次移动步长
    //let stepX = (targetX - sourceX) / steps
    //let stepY = (targetY - sourceY) / steps

    var that = who
    var count = 1
    let rowNum = idx.split("-")[0] //行索引
    let pid = idx.split("-")[1] //产品id
    //移动动画
    let moveAnimation = setInterval(() => {
      let currentX = sourceX + count * stepX
      let currentY = sourceY + count * stepY
      count++;
      if (count > steps + 1) {

        let num = that.data.imgs[rowNum].num -= 1
        let obj = that.data.imgs
        that.setData({
          //mySelf:who,
          showMe: !that.data.showMe,
          buyCount: that.data.buyCount + 1,
          canImove: true,
          eleId: num == 0 ? [pid / 1, num, true] : [pid / 1, num],
          imgs: obj //这个是新增加为自定义组件用的
        })

        clearInterval(moveAnimation)
        //判读是否为第一次购买
        if (!getApp().globalData.buyCount) {
          let orderGoods = [{ id: pid, name: itemObj.name, priceNew: itemObj.priceNew, priceOld: itemObj.priceOld, orderNum: 1 }]
          commFunc.writeFoo("goods", orderGoods)
          getApp().globalData.buyCount = 1
        } else {
          let orderGoods = commFunc.getFoo("goods")
          let repeatOrder = false
          for (var i in orderGoods) {
            let id = orderGoods[i].id
            if (id == pid) {
              orderGoods[i].orderNum += 1
              repeatOrder = true
              break
            }
          }
          if (!repeatOrder) {
            orderGoods.push({ id: pid, name: itemObj.name, priceNew: itemObj.priceNew, priceOld: itemObj.priceOld, orderNum: 1 })
          }
          commFunc.writeFoo("goods", orderGoods)
          getApp().globalData.buyCount += 1
        }

        who.triggerEvent("buyFoo")
      } else {
        that.setData({
          moveLeft: currentX,
          moveTop: currentY
        })
      }

    }, 30)

  }
}

/**
 * 父祖件给子组件传递数据
 * @param who 代表组件
 * @data 传递的数据
 */
function catchCart(who,obj){
  var app = getApp()  
  var that = who
  let findEleId = obj.findEleId
  wx.createSelectorQuery().in(who).select(findEleId).boundingClientRect(function(rect) {
    app.globalData.cartPosition={left:rect.left,top:rect.top}
    app.globalData.cartOld = { left: rect.left, top: rect.top }
    
  }).exec()  
}


export { screenSize, getElePosition,moveIt,catchCart }