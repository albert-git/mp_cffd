// comms/commComponent/selectors/selectors.js
Component({
      properties: {
        // 这里定义了innerText属性，属性值可以在组件使用时指定
        selectTxtId: {
          type: String,
          value: 'selectTxtId',
        },
        imgSrc: {
          type: String,
          value: '/images/login/arrow-down.png'
        },
        outerData: {
          type: Array,
          value: []
        },
        outputData:String
      },
      attached:function(){
        
          this.setData({
            theDataSrc:this.properties.outerData
          })
      },
      data: {
        // 这里是一些组件内部数据
        show: 0,
        index:0,
        theDataSrc:[]
      },
      methods: {
        onTap:function(e){
          wx.navigateTo({
            url: '/pages/addr/addr',
          })
        },
        // 在下拉框中选中后触发
        catchSelectTxt:function(e){
          var Index = e.target.dataset.index
          //触发自定义事件，提供外部接收者
          this.triggerEvent("showMySelected", this.data.theDataSrc[Index].id)
          this.setData({
            index: Index,
            show: !this.data.show
          })
        },
        //点击下拉框时触发
        catchShowTxt:function(e){
          let currentId = e.target.id
          this.setData({
            show: !this.data.show
          })
        }
      }
})