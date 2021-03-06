Page({

    /**
     * 页面的初始数据
     */
    data: {
      keyword: "Java",
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

    goToSearch: function () {
        wx.navigateTo({
            url: "/pages/search/search",
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      let _this = this;
      wx.request({
        url: 'https://maimai.cn/search/feeds?query='+_this.data.keyword+'&limit=40&offset=20&searchTokens=%5B%22java%22%5D&highlight=true&sortby=&u=226445063&channel=www&version=4.0.0&_csrf=GEQpMfra-CiZZibgtdCM046WZQY9FOOFxAS4&access_token=1.68522476831decf8e5c3eb2b88a0f322&uid="Zc2vesfNcjcamw%2FPjAFwZfAirs3A3wL6ApgZu%2Fo1crA%3D"&token="3vVWZ9Cd9fstmh2geiWF1D5BvZ02rY2Ms19v3RtnDRjHlvhqoasA3w6wzflkAugJ8CKuzcDfAvoCmBm7%2BjVysA%3D%3D"&jsononly=1',
        success(res) {
          let logs = [];
          res.data.data.feeds.forEach((value,index) => {
            let log = {};
            log.avatar = value.contact.avatar;
            log.skill = value.contact.career;
            log.company = value.contact.company;
            log.name = value.contact.name;
            log.province = value.contact.province;
            log.message = value.feed.text;
            log.zanNum = value.feed.likes;
            log.commentNum = value.feed.total_cnt;
            logs.push(log);
          })

          _this.setData({
            messages: logs
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
