Page({

    /**
     * 页面的初始数据
     */
    data: {
        infoHidden: true,
        info: [
          ['证书编号', ' 2017152203018122'],
          ['证书状态', ' 有效'],
          ['产品分类', ' 塑料水杯类产品'],
          ['产品名称（主）', ' 产品类别 塑料水杯'],
          ['产品名称（次）', ' Plastic Bottles'],
          ['认证依据标准和要求', ' GB 6675.1—2014；GB 6675.2—2014；GB 6675.3—2014；GB 6675.4—2014'],
          ['发证机构名称', ' 北京中轻联认证中心'],
          ['颁证日期', ' 2017-06-23'],
          ['证书到期日期', ' 2022-04-16'],
          ['初次获证日期', ' 2017-04-17'],
          ['信息上报日期', ' 2017-06-26'],
          ['证书更新时间戳', ' 20170626093349131000'],
          ['产品类别代码', ' 2203'],
        ],
        goodItems: [
            {
                src: '',
                id: 10,
                img: "https://cbu01.alicdn.com/img/ibank/2018/882/406/8780604288_1464209007.400x400.jpg",
                name: "苏维超宽口PPSU宝宝学饮杯带吸管儿童大口径广口吸管杯防摔带手柄",
                sale: ["109", "件"],
                price: ["33", "50"],
                prices: [
                    {
                        price: '8.50',
                        num: '2套起批'
                    }, {
                        price: '8.00',
                        num: '112-49999套'
                    },
                    {
                        price: '7.50',
                        num: '≥50000套'
                    }
                ],
            },
            {
                id: 10,
                img: "https://cbu01.alicdn.com/img/ibank/2018/862/057/8607750268_1719961238.400x400.jpg",
                name: "铁艺吸顶灯客厅卧室现代简约北欧马卡龙吸顶灯圆形LED吸顶灯灯具",
                sale: ["109", "件"],
                price: ["33", "50"],

            },
            {
                id: 10,
                img: "https://cbu01.alicdn.com/img/ibank/2018/855/309/9142903558_444110884.400x400.jpg",
                name: "包邮304不锈钢刀叉勺西餐餐具套装酒店加厚牛排刀欧式牛扒刀叉勺",
                sale: ["109", "件"],
                price: ["33", "50"]
            },

        ],
        swiperItem: [
            {
                img: "https://img.alicdn.com/tfs/TB1LMNcDhjaK1RjSZKzXXXVwXXa-1920-490.png",
                nav: ""
            },
            {
                img: "https://img.alicdn.com/tfs/TB1dJ3NCVYqK1RjSZLeXXbXppXa-1920-490.png",
                nav: ""
            },
            {
                img: "https://img.alicdn.com/tfs/TB1xbVeDiLaK1RjSZFxXXamPFXa-1920-490.png",
                nav: ""
            },
            {
                img: "https://img.alicdn.com/tfs/TB1APxzDmzqK1RjSZFjXXblCFXa-1920-490.png",
                nav: ""
            },
            {
                img: "https://img.alicdn.com/tfs/TB10YZBAOLaK1RjSZFxXXamPFXa-1920-490.jpg",
                nav: ""
            },
        ],
        indicatorDots: true,
        autoplay: true,
        hotSearch: [
            {
                title: "儿童帽子",
                nav: ""
            },
            {
                title: "帽子",
                nav: ""
            },
            {
                title: "针织帽",
                nav: ""
            },
            {
                title: "草帽",
                nav: ""
            }
        ],
        navItems: [
            {
                img: "../../resources/images/fire.png",
                nav: "",
                name: "热门",
                id: 1
            },
            {
                img: "../../resources/images/woman-dress.png",
                nav: "",
                name: "女装",
                id: 1

            },
            {
                img: "../../resources/images/man-cloth.png",
                nav: "",
                name: "男装",
                id: 1

            },
            {
                img: "../../resources/images/toy.png",
                nav: "",
                name: "玩具",
                id: 1

            },
            {
                img: "../../resources/images/phone.png",
                nav: "",
                name: "手机数码",
                id: 1

            },
            {
                img: "../../resources/images/shoe.png",
                nav: "",
                name: "鞋靴",
                id: 1

            },
            {
                img: "../../resources/images/food.png",
                nav: "",
                name: "食品",
                id: 1

            },
            {
                img: "../../resources/images/ring.png",
                nav: "",
                name: "配饰",
                id: 1

            },
            {
                img: "../../resources/images/lip.png",
                nav: "",
                name: "美妆",
                id: 1

            },
            {
                img: "../../resources/images/more.png",
                nav: "",
                name: "更多"
            }
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
