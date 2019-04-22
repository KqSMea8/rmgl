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
        experience: "5-10年",
        education: "本科及以上",
        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555840965613&di=875b3342115d716112326515ec2ce07e&imgtype=0&src=http%3A%2F%2Fimages.liqucn.com%2Fimg%2Fh22%2Fh82%2Fimg_localize_960ebfd8ef6df0321effec15e78d2db4_220x220.png",
        person: "周会",
        identity: "美团招聘经理"
      },
      {
        name: "JAVA开发工程师",
        companyName: "拼多多",
        companyStatus: "B轮",
        workerNum: "1万人以上",
        position: "上海",
        experience: "1-3年",
        education: "本科及以上",
        salary: "15k-30k",
        person: "sunny",
        identity: "拼多多招聘经理",
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555843678726&di=cd4f0b26fea9757a06354e08d3c115f6&imgtype=0&src=http%3A%2F%2Fwx1.sinaimg.cn%2Flarge%2Fac18b792ly1ftczwflpczj20dm0dmgq2.jpg'
      },
      {
        name: "JAVA开发实习生",
        companyName: "今日头条",
        companyStatus: "D轮及以上",
        workerNum: "1万人以上",
        position: "上海",
        experience: "1年以内",
        education: "本科及以上",
        salary: "4k-8k",
        person: "程颖",
        identity: "今日头条HRBP",
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555844402679&di=bf30e9380cee8c9d25ee612de3abc480&imgtype=0&src=http%3A%2F%2Fzhaopin-rd5-pub.oss-cn-beijing.aliyuncs.com%2Fimgs%2Fcompany%2Ff131b23ae3960b8142e34a766620be1b.jpeg'
      },]
  },

  goToDetail: function (e) {
    wx.navigateTo({
      url: '/pages/jobDetail/jobDetail?id='+e.currentTarget.dataset.idx,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    wx.request({
      url: 'http://47.102.152.51:8080/Entity/U433103f159a5b6/group1/Job/',
      success(res) {
        let jobs = [];
        res.data.Job.forEach((value) => {
          let job = {};
          job.id = value.id;
          job.name = value.jobname;
          job.companyName = value.j2c.companyname;
          job.companyStatus = value.j2c.companystatus;
          job.workerNum = value.j2c.workernum;
          job.position = value.position;
          job.experience = value.experience;
          job.education = value.education;
          job.salary = value.salary;
          job.person = value.j2r.name;
          job.identity = value.j2r.position;
          job.img = value.j2c.imgurl;
          jobs.push(job);
        })
        _this.setData({
          jobs: jobs,
        })
      }
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