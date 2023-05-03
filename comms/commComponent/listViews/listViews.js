// comms/commComponent/listViews/listViews.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    listObjects: Array,
    outerViewHeight: Number,
    leftViewPercent: Number,
    leftImgWidth: Number,
    leftImgHeight: Number,
    middleViewPercent: Number,
    middleViewPosition: String,
    rightViewPercent: Number,
    rightImgWidth: Number,
    rightImgHeight: Number,
    outerViewName: String

  },

  /**
   * 组件的初始数据
   */
  data: {
    outerViewName: String,
    listObjects: [],
    outerViewHeight: 100,
    leftViewPercent: 1,
    middleViewPercent: 5,
    middleViewPosition: "center",
    rightViewPercent: 1
  },
  attatched: function () {
    this.setData({
      outerViewName: this.properties.outerViewName,
      listObjects: this.properties.listObjects,
      outerViewHeight: this.properties.outerViewHeight,
      leftViewPercent: this.properties.leftViewPercent,
      leftImgWidth: this.properties.leftImgWidth,
      leftImgHeight: this.properties.leftImgHeight,
      middleViewPercent: this.properties.middleViewPercent,
      middleViewPosition: this.properties.middleViewPosition,
      rightViewPercent: this.properties.rightViewPercent,
      rightImgWidth: this.properties.rightImgWidth,
      rightImgHeight: this.properties.rightImgHeight
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onSelected: function (e) {
      let currentId = e.currentTarget.id

      if (currentId.length > 0) {
        let eventName = this.data.outerViewName
        this.triggerEvent(eventName, currentId)
      }
    }
  }
})
