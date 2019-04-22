// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    job:"",
    place:"",
    edu:"",
    school:"",
    ehidden:true,
    words:"",
    edus:[
      "大专","本科","硕士","博士"
    ]
  },

  a:function(){
    wx.navigateTo({
      url: '/pages/register/job/job',
    })
  },

  b:function(){
    this.setData({
      ehidden:false
    })
  },

  inputname:function(e){
    this.setData({
      name:e.detail.value
    })
  },

  inputplace: function (e) {
    this.setData({
      place: e.detail.value
    })
  },

  inputschool: function (e) {
    this.setData({
      school: e.detail.value
    })
  },

  inputwords: function (e) {
    this.setData({
      words: e.detail.value
    })
  },

  

  echange:function(){
    this.setData({
      ehidden: true
    })
  },

  chooseEdu:function(e){
    this.setData({
      edu: e.currentTarget.dataset.item,
      ehidden:true
    })
  },

  ok:function(){
    var user = {}
    user.name = this.data.name
    user.job = this.data.job
    user.place = this.data.place
    user.edu = this.data.edu
    user.school = this.data.school
    wx.request({
      url: 'http://47.102.152.51:8080/Entity/U433103f159a5b6/group1/User/',
      data:user,
      method:"POST",
      success:function(res){
        console.log(res)
      }
    })
    console.log(user)
    wx.navigateBack({
      
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