// pages/job/job.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jobs: [
      {
        name: "JAVA开发工程师",
        companyName: "美团",
        companyStatus: "已上市",
        workerNum: "1万人以上",
        position: "上海",
        salary: "30k-50k",
        experience: "1-3年",
        education: "本科及以上",
        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555840965613&di=875b3342115d716112326515ec2ce07e&imgtype=0&src=http%3A%2F%2Fimages.liqucn.com%2Fimg%2Fh22%2Fh82%2Fimg_localize_960ebfd8ef6df0321effec15e78d2db4_220x220.png",
        person: "周会",
        identity: "美团招聘经理"
      },
      {
        name: "数据平台产品经理",
        companyName: "美团",
        companyStatus: "已上市",
        workerNum: "1万人以上",
        position: "上海",
        salary: "20k-50k",
        experience: "5-10年",
        education: "本科及以上",
        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555840965613&di=875b3342115d716112326515ec2ce07e&imgtype=0&src=http%3A%2F%2Fimages.liqucn.com%2Fimg%2Fh22%2Fh82%2Fimg_localize_960ebfd8ef6df0321effec15e78d2db4_220x220.png",
        person: "周会",
        identity: "美团招聘经理"
      },
      {
        name: "数据开发专家",
        companyName: "美团",
        companyStatus: "已上市",
        workerNum: "1万人以上",
        position: "北京",
        salary: "30k-50k",
        experience: "5-10年",
        education: "本科及以上",
        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555840965613&di=875b3342115d716112326515ec2ce07e&imgtype=0&src=http%3A%2F%2Fimages.liqucn.com%2Fimg%2Fh22%2Fh82%2Fimg_localize_960ebfd8ef6df0321effec15e78d2db4_220x220.png",
        person: "周会",
        identity: "美团招聘经理"
      },]
  },

  goToEmployees: function (e) {
    wx.navigateTo({
      url: './employees/employees',
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