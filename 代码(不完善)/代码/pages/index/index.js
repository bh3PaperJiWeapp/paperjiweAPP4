
Page({
  data: {
    listData: [
      { "code": "01", "text": "text1", "type": "type1" },
      { "code": "02", "text": "text2", "type": "type2" },
      { "code": "03", "text": "text3", "type": "type3" },
      { "code": "04", "text": "text4", "type": "type4" },
      { "code": "05", "text": "text5", "type": "type5" },
      { "code": "06", "text": "text6", "type": "type6" },
      { "code": "07", "text": "text7", "type": "type7" }
    ]
  },
  toMap: function(e) {
    console.log("click")
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    });
  },
  toPeople: function(e) {
    console.log("click")
    wx.pageScrollTo({
      scrollTop: 700,
      duration: 300
    });
  },
  toElf: function(e) {
    console.log("click")
    wx.pageScrollTo({
      scrollTop: 600,
      duration: 300
    });
  },
  toHalo: function(e) {
    console.log("click")
    wx.pageScrollTo({
      scrollTop: 1000,
      duration: 300
    });
  },
  toZhuangbei: function(e) {
    console.log("click")
    wx.pageScrollTo({
      scrollTop: 1200,
      duration: 300
    });
  },
  toMiaoju: function(e) {
    console.log("click")
    wx.pageScrollTo({
      scrollTop:1500,
      duration: 300
    });
  },
  onLoad: function (options) {
    console.log('onLoad')


 
  }


})

