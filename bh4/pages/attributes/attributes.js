// pages/attributes/attributes.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    name: "",
    power: 0,
    precision: 0,
    pierce: 0,
    criticalPossibility: 0,
    criticalPower: 0,
    chain: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoade")
    this.setData({
      index: options.index,
      name: options.name,
      power: options.power,
      precision: options.precision,
      pierce: options.pierce,
      criticalPossibility: options.criticalPossibility,
      criticalPower: options.criticalPower,
      chain: options.chain
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  powerChange: function(e) {
    this.setData({
      power: e.detail.value
    })
  },
  precisionChange: function(e) {
    this.setData({
      precision: e.detail.value
    })
  },
  pierceChange: function(e) {
    this.setData({
      pierce: e.detail.value
    })
  },
  criticalPossibilityChange: function(e) {
    this.setData({
      criticalPossibility: e.detail.value
    })
  },
  criticalPowerChange: function(e) {
    this.setData({
      criticalPower: e.detail.value
    })
  },
  chainChange: function(e) {
    this.setData({
      chain: e.detail.value
    })
  },
  changeInfo: function(e) {
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2];  //上一个页面
    let temp = prevPage.data.telescopicSelected
    temp[this.data.index].power = this.data.power
    temp[this.data.index].precision = this.data.precision
    temp[this.data.index].pierce = this.data.pierce
    temp[this.data.index].criticalPossibility = this.data.criticalPossibility
    temp[this.data.index].criticalPower = this.data.criticalPower
    temp[this.data.index].chain = this.data.chain
    prevPage.setData({
      telescopicSelected: temp
    })
  }
})
