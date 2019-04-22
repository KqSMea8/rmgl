// pages/jobDetail/jobDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contactorImg: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2873914150,902943197&fm=26&gp=0.jpg",
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
    identity: "美团招聘经理",
    description: "岗位职责\n负责金融产品相关系统架构规划、设计，深入理解业务架构和需求，识别系统风险，能设计可扩展、高可用、高性能、稳定安全的系统；\n负责完成重要业务模块以及核心框架的搭建及编码实现；负责系统整体相关架构和技术规划质量控制，主导团队技术方案评审等工作；\n对新技术快速学习推广，提高团队技术能力，打造战斗力强的技术团队；\n任职要求\nJava基础扎实，熟练掌握数据结构、多线程编程，掌握常用的设计模式；\n精通Web编程，精通Spring MVC、ORM框架(MyBatis或Hibernate)，熟悉前端开发(JavaScript、HTML、CSS)；\n熟练掌握后端技术并能根据业务场景做好技术选型，例如负载均衡、弹性扩容、微服务、缓存、分布式存储、分布式事务、消息中间件、RPC框架等；\n精通高并发、分布式系统设计、对JVM、数据库性能优化有独到见解；\n主导完成过大型互联网产品或者金融产品后端服务，在性能优化方面有突出案例"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    wx.request({
      url: 'http://47.102.152.51:8080/Entity/U433103f159a5b6/group1/Job/'+options.id,
      success(res) {
        let value = res.data;
        let job = {};
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
        job.contactorImg = value.j2r.imgurl;
        job.description = value.description;
        job.img = value.j2c.imgurl;
        _this.setData({
          ...job
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