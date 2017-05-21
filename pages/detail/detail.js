var app = getApp()
Page({
  data: {
    userInfo: {},
    items:[
      {
        id: "love",
        text: "找对象",
        image: "http://ofwzcunzi.bkt.clouddn.com/fFOj2R9ueiFIud06.png",
        detail: "TA在等你"
      },{
        id: "message",
        text: "请求",
        image: "http://ofwzcunzi.bkt.clouddn.com/JDqUJUSDgPoeZpk7.png",
        detail: "消息来了"
      },{
        id: "activity",
        text: "报名的活动",
        image: "http://ofwzcunzi.bkt.clouddn.com/pxLda5BgA5dZ2EgL.png",
        detail: "精彩一整天"
      },{
        id: "stone",
        text: "三生石",
        image: "http://cdn-img.easyicon.net/png/11759/1175962.gif",
        detail: "一路桃花"
      },{
        id: "about",
        text: "关于",
        image: "http://cdn-img.easyicon.net/png/11759/1175962.gif",
        detail: ""
      },
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: 'findlove/findlove'
    })
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})