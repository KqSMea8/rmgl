Page({

    /**
     * 页面的初始数据
     */
    data: {
      messages: [
        {
          name: "达得山",
          skill: "滴滴出行Java开发",
          description: "IT互联网 | 研发",
          avatar: "http://i9.taou.com/maimai/p/2923/2108_26_oFSZq8ekMWm6nB-a160",
          message: "蚂蚁金服杭州职位，帮朋友发布。有兴趣的朋友可直接发简历liangchuan.lc@alibaba-inc.com，也可以和我沟通，多谢",
          commentNum: 19,
          zanNum: 24,
        }, {
          name: "张洪光",
          skill: "京东软件开发工程师",
          avatar: "http://i9.taou.com/maimai/p/3478/870_77_m7ob68nnkKc3nw-a160",
          message: "京东商城招聘android 开发工程师\n\n1. 本科或以上学历，计算机相关专业，有扎实的Java语言基础；\n2. 3年以上Android项目开发经验，有1款以上的上线产品；\n3. 熟悉Android SDK，对Android各个组件和机制能灵活运用；\n4. 工作认真负责，思路清晰，较强的沟通协调能力，具有团队合作精神；\n5. 有音视频相关开发经验者优先；\n求推荐，名额有限，欢迎简历砸来！有意者请将简历发送至zhanghongguang@jd.com",
          commentNum: 2,
          zanNum: 8,
        }, {
          name: "顾旭华",
          skill: "Java",
          avatar: "http://i9.taou.com/maimai/p/1012/427_117_41QYxTvRYBt2Fy-a160",
          message: "本人最近拿到两个offer，一个是饿了么的新零售Java开发，30*15；另外一个是阿里云计费帐财方向的业务，待遇22*16，目前纠结不知道怎么选择，主要考虑阿里云平台挺好，但是待遇差点，饿了么那边主要是觉得前景不明确，各位老铁有何看法呀？",
          commentNum: 70,
          zanNum: 71,
        },
      ],
    },

    alert: function (e) {
        const index = e.currentTarget.dataset.idx;
        let _this = this;
        wx.getStorage({
          key: 'cart',
          success(res) {
            let cartItem = {};
            cartItem.Items = [_this.data.goodItems[index]];
            let cartItems = res.data;
            cartItems.push(cartItem);
            console.log(cartItems);
            wx.setStorage({
              key: 'cart',
              data: cartItems,
            })
          },
        })
    },

    infoChange: function(e) {
      this.setData({
        infoHidden: !this.data.infoHidden
      })
    },

    scanTest: function (e) {
      let _this = this
      wx.scanCode({
        success(res) {
          if (res.scanType == "EAN_13")
            wx.navigateTo({
              url: '/pages/barcode/barcode?barcode='+res.result,
            })
          console.log(res.result)
          console.log(res.charSet)
          console.log(res.scanType)
          // _this.setData({
          //   infoHidden: false,
          // })
        }
      })
    },

    takePhoto() {
      const ctx = wx.createCameraContext()
      ctx.takePhoto({
        quality: 'high',
        success: (res) => {
          this.setData({
            src: res.tempImagePath
          })
        }
      })
    },

    error(e) {
      console.log(e.detail)
    },

    supplierEntry: function () {
        wx.navigateTo({
            url: '/pages/supplierEntry/supplierEntry',
        })
    },

    goToSearch: function () {
        wx.navigateTo({
            url: "/pages/search/search",
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

    },

    toDetail: function (event) {
        console.log(event)
        wx.navigateTo({
            url: '/pages/detail/goodDetail/goodDetail?id=' + event.currentTarget.dataset.id
        })
    },

    toCate: function (event) {
        console.log(event)
      wx.navigateTo({
        url: '/pages/category/category'
      })
    },
})
