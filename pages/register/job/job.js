// pages/register/job/job.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curIndexTitle:"",
    curJindexTitle:"",
    curIndex:"",
    curJindex:"",
    jobs:[
      {
        id:1,
        title:"金融业",
        children:"银行|证券|保险|基金|股权投资"
      },
      {
        id: 2,
        title: "IT/互联网",
        children: "互联网|IT|游戏|软件"
      },
      {
        id: 3,
        title: "房地产业/建筑业",
        children: "开发商|物业中介|建筑施工|装修"
      },
      {
        id: 8,
        title: "商务服务业",
        children: "面向企业提供服务|法律|咨询|人力资源"
      },
      {
        id: 4,
        title: "生活服务",
        children: "餐饮|旅游酒店|生活服务|居民服务"
      },
      {
        id: 5,
        title: "文化/传媒/广告",
        children: "文化|媒体|广告|娱乐|体育"
      },
      {
        id: 6,
        title: "快速消费品",
        children: "食品|烟酒饮品|个护化妆|粮油生鲜"
      },
      {
        id: 7,
        title: "制造业",
        children: "机械|重工|材料|设备"
      },
      {
        id: 9,
        title: "金融业",
        children: "银行|证券|保险|基金|股权投资"
      },
      {
        id: 10,
        title: "IT/互联网",
        children: "互联网|IT|游戏|软件"
      },
      {
        id: 11,
        title: "房地产业/建筑业",
        children: "开发商|物业中介|建筑施工|装修"
      },
      {
        id: 12,
        title: "商务服务业",
        children: "面向企业提供服务|法律|咨询|人力资源"
      },
      {
        id: 13,
        title: "生活服务",
        children: "餐饮|旅游酒店|生活服务|居民服务"
      },
      {
        id: 14,
        title: "文化/传媒/广告",
        children: "文化|媒体|广告|娱乐|体育"
      },
      {
        id: 15,
        title: "快速消费品",
        children: "食品|烟酒饮品|个护化妆|粮油生鲜"
      },
      {
        id: 16,
        title: "制造业",
        children: "机械|重工|材料|设备"
      },
    ],
    curJob:[]
  },

  choose:function(e){
    this.setData({
      curIndex: e.currentTarget.dataset.index,
      curIndexTitle: this.data.jobs[e.currentTarget.dataset.index].title
    })
    var curJob = this.data.jobs[e.currentTarget.dataset.index].children
    curJob = curJob.split("|")
    this.setData({
      curJob:curJob,
      curJindex:"",
      curJindexTitle:""
    })
  },

  choosej:function(e){
    this.setData({
      curJindex:e.currentTarget.dataset.jindex,
      curJindexTitle: this.data.curJob[e.currentTarget.dataset.jindex]
    })
  },

  ok:function(){
    console.log(this.data.curIndexTitle+" "+this.data.curJindexTitle)
    var pages = getCurrentPages()
    var prevPage = pages[pages.length-2]
    prevPage.setData({
      job:this.data.curIndexTitle+" "+this.data.curJindexTitle
    })
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