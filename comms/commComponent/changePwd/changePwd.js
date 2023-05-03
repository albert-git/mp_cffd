// comms/commComponent/changePwd/changePwd.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    pwds:"",
    currentInput:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onInput:function(e){
      let data = e.detail.value
      console.log(data)
      this.setData({
        pwds:e.detail.value
      })
      
    },
    onAllways:function(e){
      this.setData({
        allways:true
      })
    },
    onGo:function(e){
      if (!this.data.newOrold){
        if (this.data.pwds == "456258"){
          this.setData({
            newOrold:"new",
            pwds:""
          })
        }
      }
      else {
        this.setData({
          newOrold:this.data.pwds
        })
        /*
        wx.navigateBack({
          delta:1
        })
        */
      }
      
    }
  }
})
