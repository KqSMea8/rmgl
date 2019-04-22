// pages/contactList/contactList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    clist:[
      {
        avatar:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556454470&di=04c2d076f040a7963f7ae20a4109b2df&imgtype=jpg&er=1&src=http%3A%2F%2Fimg0.sc115.com%2Fuploads%2Fsc%2Fpsd%2F131112%2F1384169085169.jpg",
        name:"lihu",
        lastMsg:"好的，谢谢",
        lastTime:"晚上6：35",
        msgNum:4
      },
      {
        avatar: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555859757557&di=abc78b4b492502a3336d3115318e7c17&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Feca2ba7a42f7d0050f54718a3096822c61f8f77cf046-s63wEQ_fw658",
        name: "hujiahong",
        lastMsg: "tql",
        lastTime: "中午12：01",
        msgNum:15
      },
      {
        avatar: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555859757547&di=21e65655806f4159703b0d2083b0361d&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F-fo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2Fe7cd7b899e510fb35180c4fadb33c895d0430cc5.jpg",
        name: "huangyouqi",
        lastMsg: "tql",
        lastTime: "上午9：35",
        msgNum:0
      }
    ]
  },

  goin:function(){
    wx.navigateTo({
      url: '/pages/contact/contact',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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