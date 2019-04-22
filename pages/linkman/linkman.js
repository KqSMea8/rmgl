Page({
  /** 
   * 页面的初始数据 
   */
  data: {
    isActive: null,
    listMain: [],
    listTitles: [],
    fixedTitle: null,
    toView: 'inToView0',
    oHeight: [],
    scroolHeight: 0,
    scrollTop:0,
    recommendType: 0,
    testL : [
      {
        id: "1", region: "A",
        brands: [
          { brandId: "3", name: "阿明", avatar:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556454470&di=04c2d076f040a7963f7ae20a4109b2df&imgtype=jpg&er=1&src=http%3A%2F%2Fimg0.sc115.com%2Fuploads%2Fsc%2Fpsd%2F131112%2F1384169085169.jpg"},
          { brandId: "4", name: "奥特曼", avatar: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556454470&di=04c2d076f040a7963f7ae20a4109b2df&imgtype=jpg&er=1&src=http%3A%2F%2Fimg0.sc115.com%2Fuploads%2Fsc%2Fpsd%2F131112%2F1384169085169.jpg"},
          { brandId: "5", name: "安庆", avatar: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556454470&di=04c2d076f040a7963f7ae20a4109b2df&imgtype=jpg&er=1&src=http%3A%2F%2Fimg0.sc115.com%2Fuploads%2Fsc%2Fpsd%2F131112%2F1384169085169.jpg"},
          { brandId: "6", name: "阿曼", avatar: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556454470&di=04c2d076f040a7963f7ae20a4109b2df&imgtype=jpg&er=1&src=http%3A%2F%2Fimg0.sc115.com%2Fuploads%2Fsc%2Fpsd%2F131112%2F1384169085169.jpg"}
        ]
      },
      {
        id: "2", region: "B",
        brands: [
          { brandId: "7", name: "爸爸", avatar: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556454470&di=04c2d076f040a7963f7ae20a4109b2df&imgtype=jpg&er=1&src=http%3A%2F%2Fimg0.sc115.com%2Fuploads%2Fsc%2Fpsd%2F131112%2F1384169085169.jpg"},
          { brandId: "8", name: "北京", avatar: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556454470&di=04c2d076f040a7963f7ae20a4109b2df&imgtype=jpg&er=1&src=http%3A%2F%2Fimg0.sc115.com%2Fuploads%2Fsc%2Fpsd%2F131112%2F1384169085169.jpg"}
        ]
      },
]

  },
  //点击右侧字母导航定位触发
  scrollToViewFn: function (e) {
    var that = this;
    var _id = e.target.dataset.id;
    for (var i = 0; i < that.data.listMain.length; ++i) {
      if (that.data.listMain[i].id == _id) {
        that.setData({
          isActive: _id,
          toView: 'inToView' + _id,
          fixedTitle: this.data.oHeight[i].name
        })
        break
      }
    }
  },
  toBottom: function (e) {
  },
  // 页面滑动时触发
  onPageScroll: function (e) {
    this.setData({
      scroolHeight: e.detail.scrollTop
    });
    for (let i in this.data.oHeight) {
      if (e.detail.scrollTop < this.data.oHeight[i].height) {
        this.setData({
          isActive: this.data.oHeight[i].key,
          fixedTitle: this.data.oHeight[i].name
        });
        return false;
      }
    }

  },

  chooseRecommendType: function (e) {
    this.setData({
      recommendType: parseInt(e.currentTarget.dataset.recommendtype),
      scroolHeight:0,
      scrollTop:0
    })

  },
  // 处理数据格式，及获取分组高度
  getBrands: function () {
    var that = this;
    wx.request({
      url: '获取数据地址',
      success(res) {
        if (res.data.status == 0) {
          var someTtitle = null;
          var someArr = [];
          for (var i = 0; i < res.data.data.length; i++) {
            var newBrands = { brandId: res.data.data[i].brandId, name: res.data.data[i].brandName };
            if (res.data.data[i].initial != someTtitle) {
              someTtitle = res.data.data[i].initial
              var newObj = {
                id: i,
                region: someTtitle,
                brands: []
              };
              someArr.push(newObj)
            }
            newObj.brands.push(newBrands);

          };
          //赋值给列表值
          that.setData({
            listMain: someArr
          });
          //赋值给当前高亮的isActive
          that.setData({
            isActive: that.data.listMain[0].id,
            fixedTitle: that.data.listMain[0].region
          });

          //计算分组高度,wx.createSelectotQuery()获取节点信息
          var number = 0;
          for (let i = 0; i < that.data.listMain.length; ++i) {
            wx.createSelectorQuery().select('#inToView' + that.data.listMain[i].id).boundingClientRect(function (rect) {
              number = rect.height + number;
              var newArry = [{ 'height': number, 'key': rect.dataset.id, "name": that.data.listMain[i].region }]
              that.setData({
                oHeight: that.data.oHeight.concat(newArry)
              })

            }).exec();
          };

        }
      }
    })
  },

  onLoad: function (options) {
    var that = this;
    //that.getBrands();
    this.setData({
      listMain:this.data.testL,
      isActive: this.data.testL[0].id,
      fixedTitle: this.data.testL[0].region
    })
    var number = 0;
    for (let i = 0; i < that.data.listMain.length; ++i) {
      wx.createSelectorQuery().select('#inToView' + that.data.listMain[i].id).boundingClientRect(function (rect) {
        number = rect.height + number;
        var newArry = [{ 'height': number, 'key': rect.dataset.id, "name": that.data.listMain[i].region }]
        that.setData({
          oHeight: that.data.oHeight.concat(newArry)
        })
      }).exec();
    };
    

  }
}) 
