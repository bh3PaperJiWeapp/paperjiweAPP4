// pages/submit/submit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {
      id: 0,
      name: "",
      cover: "...",
      power: 0,
      precision: 0,
      pierce: 0,
      criticalPossibility: 0,
      criticalPower: 0,
      chain: 0
    } 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let object=JSON.parse(options.jsonStr);
    this.setData({detail:object});
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

  }
})