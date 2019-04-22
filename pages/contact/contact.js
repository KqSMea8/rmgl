// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "JAVA开发工程师",
    companyName: "美团",
    companyStatus: "已上市",
    workerNum: "1万人以上",
    position: "上海",
    salary: "30k-50k",
    experience: "5-10年",
    education: "本科及以上",
    img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555840965613&di=875b3342115d716112326515ec2ce07e&imgtype=0&src=http%3A%2F%2Fimages.liqucn.com%2Fimg%2Fh22%2Fh82%2Fimg_localize_960ebfd8ef6df0321effec15e78d2db4_220x220.png",
    tabdata:{
      title:"上海交通大学",
      attribute_attribute:"软件开发工程师",
      time_agree:"2018-04-10",
      nickname:"huhu"
    },
    centendata:[
      {
        time:"2019-04-09",
        content:"hahaha",
        if_img:false,
        is_show_right:1,
        show_rignt : "是自己的内容，显示在右边，右边渲染 nickname_owner，head_owner",
        head_owner:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1555827602&di=e3fcae2b1bf2b71607619dc88d6b24de&src=http://uploads.5068.com/allimg/1806/189-1P615135G8-50.jpg",
      },
      {
        time: "2019-04-09",
        content: "nonono",
        if_img: false,
        is_show_right: 2,
        show_rignt: "不是自己的内容，显示在左边，左边渲染 nickname_owner，head_owner",
        head_owner: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1555827602&di=e3fcae2b1bf2b71607619dc88d6b24de&src=http://uploads.5068.com/allimg/1806/189-1P615135G8-50.jpg",
      },
      {
        time:"2019-04-09",
        content:"hahaha",
        if_img:false,
        is_show_right:1,
        show_rignt : "是自己的内容，显示在右边，右边渲染 nickname_owner，head_owner",
        head_owner:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1555827602&di=e3fcae2b1bf2b71607619dc88d6b24de&src=http://uploads.5068.com/allimg/1806/189-1P615135G8-50.jpg",
      },
      {
        time: "2019-04-09",
        content: "nonono",
        if_img: false,
        is_show_right: 2,
        show_rignt: "不是自己的内容，显示在左边，左边渲染 nickname_owner，head_owner",
        head_owner: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1555827602&di=e3fcae2b1bf2b71607619dc88d6b24de&src=http://uploads.5068.com/allimg/1806/189-1P615135G8-50.jpg",
      },
      {
        time: "2019-04-09",
        content: "hahaha",
        if_img: false,
        is_show_right: 1,
        show_rignt: "是自己的内容，显示在右边，右边渲染 nickname_owner，head_owner",
        head_owner: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1555827602&di=e3fcae2b1bf2b71607619dc88d6b24de&src=http://uploads.5068.com/allimg/1806/189-1P615135G8-50.jpg",
      },
      {
        time: "2019-04-09",
        content: "nonono",
        if_img: false,
        is_show_right: 2,
        show_rignt: "不是自己的内容，显示在左边，左边渲染 nickname_owner，head_owner",
        head_owner: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1555827602&di=e3fcae2b1bf2b71607619dc88d6b24de&src=http://uploads.5068.com/allimg/1806/189-1P615135G8-50.jpg",
      }
    ],
    news_input_val:"234",
    scrollTop:0,
    message:"",


  },

  bindChange:function(e){
    this.setData({
      news_input_val:e.detail.value
    })
  },

  upimg1:function(){
    var that = this
    wx.chooseImage({
      success: function(res) {
        var tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.bottom()
  },

  add:function(e){
    var new_msg = {
      time: "2019-04-09",
      content: this.data.news_input_val,
      if_img: false,
      is_show_right: 1,
      show_rignt: "是自己的内容，显示在右边，右边渲染 nickname_owner，head_owner",
      head_owner: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1555827602&di=e3fcae2b1bf2b71607619dc88d6b24de&src=http://uploads.5068.com/allimg/1806/189-1P615135G8-50.jpg",
    }
    this.data.centendata.push(new_msg)
    this.setData({
      centendata:this.data.centendata,
      news_input_val:""
    })
    this.bottom()
  },

  bottom: function () {
    var query = wx.createSelectorQuery()
    query.select('#hei').boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec(function (res) {
      wx.pageScrollTo({
        scrollTop: res[0].bottom  // #the-id节点的下边界坐标
      })
      res[1].scrollTop // 显示区域的竖直滚动位置
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

  }
})