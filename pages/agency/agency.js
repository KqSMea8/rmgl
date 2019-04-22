// pages/agency/agency.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curStatus:0,
    type_list:[
      {
        title:"全部",
        id:1
      },
      {
        title:"内容运营",
        id:2
      },
      {
        title: "CRM Saas",
        id: 3
      },
      {
        title: "企业级软件/服务",
        id: 4
      },
      {
        title: "前端开发",
        id: 5
      },
      {
        title: "产品设计",
        id: 6
      },
    ],
    recommandItems: [
      {
        id: 50284,
        label: '字节跳动',
        img: "https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=69b8176f2c3fb80e18dc698557b8444b/48540923dd54564efa09ff67bede9c82d1584f7b.jpg",
        title: "高级iOS开发工程师",
        price: ["25k", "50k"],
        num: "北京",
        time: '本科及以上',
        supplierNum: 2,
        status: 0, //0未应募，1已应募
        related: [
          {
            img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3765530916,928811954&fm=26&gp=0.jpg",
            title: "【腾讯】运维后台开发工程师",
          },
          {
            img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556477233&di=fe4825c98c3848a5d56dda7812b1d26d&imgtype=jpg&er=1&src=http%3A%2F%2Fandroid-artworks.25pp.com%2Ffs04%2F2015%2F04%2F29%2F5%2F110_d7d2d65c2f35568e971ebdd197c23373_con.png",
            title: "【美团点评】机器学习/数据挖掘工程师",
          },
          {
            img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555882580811&di=2b67a77ae9a31c9a873c819801fcb2ae&imgtype=0&src=http%3A%2F%2Fwww.99danji.com%2Fuploadfile%2F2015%2F0609%2F20150609115026432.png",
            title: "【网易】游戏策划",
          },
          {
            title: '【58同城】广告流量运营高级经理',
            img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2284545932,2128290711&fm=26&gp=0.jpg'
          }
        ]
      },
      {
        id: 50284,
        label: '阿里巴巴',
        img: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4140388679,1025042353&fm=26&gp=0.jpg",
        title: "机器学习算法专家",
        price: ["30k", "50k"],
        num: "杭州",
        time: '硕士及以上',
        supplierNum: 4,
        status: 0, //0未应募，1已应募
        related: [
          {
            img: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2022459761,2695397137&fm=26&gp=0.jpg",
            title: "【华为】视觉设计专家",
          },
          {
            img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556477916&di=cfc7a071931efeb2b4396230a442d87c&imgtype=jpg&er=1&src=http%3A%2F%2Ftravel.people.com.cn%2FNMediaFile%2F2017%2F0615%2FMAIN201706150930246311109982258.jpg",
            title: "【携程】java架构师",
          },
          {
            img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2642503911,3048815861&fm=26&gp=0.jpg",
            title: "【蚂蚁金服】图算法研发专家",
          }, {
            img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1441011952,843964895&fm=26&gp=0.jpg',
            title: '【OPPO】配件产品经理'
          }
        ]
      },
      {
        id: 50284,
        label: '拼多多',
        img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2629892230,958644339&fm=11&gp=0.jpg",
        title: "产品经理",
        price: ["15k", "30k"],
        num: 3000,
        time: '上海',
        supplierNum: 4,
        status: 0, //0未应募，1已应募
        related: [
          {
            img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556478295&di=469a353f532dd125493c2497df8feae1&imgtype=jpg&er=1&src=http%3A%2F%2Fimgup02.iefans.net%2Fiefans%2F2018-11%2F06%2F16%2F15414935137055_0.jpg",
            title: "【快手】商业分析专家",
          },
          {
            img: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2557909816,2497055634&fm=26&gp=0.jpg",
            title: "【饿了么】物流运营",
          },
          {
            img: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2013216559,910090073&fm=26&gp=0.jpg",
            title: "【滴滴】高级研发工程师",
          }, {
            img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2880135809,2875920953&fm=26&gp=0.jpg',
            title: '【vivo】在线算法工程师'
          }
        ]
      },
    ],
  },

  selectStatus: function (e) {
    this.setData({
      curStatus: e.currentTarget.dataset["id"]
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