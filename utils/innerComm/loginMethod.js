/*
function selectMethods(events,theSetData) {
  let e = event
  let currentId = e.target.id

  if (currentId.indexOf("select") > -1) {
    if (currentId.indexOf("Id") > -1) {
      this.setData({
        show: !this.data.show
      })
    } else if (currentId.indexOf("School") > -1) {
      this.setData({
        show2: !this.data.show2
      })
    }
  } else if (currentId.indexOf("option") > -1) {
    var Index = e.target.dataset.index

    let that = this
    if (currentId.indexOf("Id") > -1) {

      this.setData({
        index: Index,
        show: !this.data.show
      })
    } else if (currentId.indexOf("School") > -1) {

      that.setData({
        index2: Index,
        show2: !this.data.show2
      })

    }
  }
  */