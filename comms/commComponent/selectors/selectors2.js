// comms/commComponent/selectors/selectors.js
Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
   addrs:Array
  },
  attached: function () {
    this.setData({
      addrs:this.properties.addrs
    })
  },
  data: {
    // 这里是一些组件内部数据
    
  },
  methods: {
    theSelectAddr:function(e){
      let addr = e.currentTarget.dataset.addr
      this.setData({
        addrName:addr,
        popUp:'none'
      })
      this.triggerEvent("onSelectAddr",addr)

    },
    where2go:function(e){
      /*
      let addrs = []
      for(let i = 0;i<100;i++){
        addrs.push(i)
      }
      */
      this.setData({
        popUp:'display'
        //addrs:addrs
      })
    },
    
  }
})