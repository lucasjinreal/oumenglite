
var api = require('../../utils/api.js')
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    swipers: [],
    people: [
      {
        "image": "http://img3.imgtn.bdimg.com/it/u=2270925593,695827456&fm=23&gp=0.jpg",
        "name": "小明",
        "school": "中南大学"
      },
      {
        "image": "http://img0.imgtn.bdimg.com/it/u=3905047297,1473316209&fm=23&gp=0.jpg",
        "name": "刘明",
        "school": "湖南大学"
      },
      {
        "image": "http://img2.imgtn.bdimg.com/it/u=465735542,3222513942&fm=23&gp=0.jpg",
        "name": "菲菲",
        "school": "湖南师大"
      },
      {
        "image": "http://img3.imgtn.bdimg.com/it/u=2270925593,695827456&fm=23&gp=0.jpg",
        "name": "小明",
        "school": "中南大学"
      },
      {
        "image": "http://img3.imgtn.bdimg.com/it/u=1229491562,2290812655&fm=23&gp=0.jpg",
        "name": "花路",
        "school": "湖南大学"
      },
      {
        "image": "http://img1.imgtn.bdimg.com/it/u=2100953599,3799756120&fm=23&gp=0.jpg",
        "name": "形式",
        "school": "湖南师大"
      },
      {
        "image": "http://img3.imgtn.bdimg.com/it/u=2270925593,695827456&fm=23&gp=0.jpg",
        "name": "但凡",
        "school": "中南大学"
      },
      {
        "image": "http://img0.imgtn.bdimg.com/it/u=3905047297,1473316209&fm=23&gp=0.jpg",
        "name": "雷鸣",
        "school": "湖南大学"
      },
      {
        "image": "http://img2.imgtn.bdimg.com/it/u=2257801327,3853034333&fm=23&gp=0.jpg",
        "name": "丘雪",
        "school": "湖南师大"
      }
    ]
  },

  onLoad: function () {
    console.log('----what the fuck!!')
    console.log(api.SWIPERS)
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    that.getSwipers()
  },

// 获取轮播图信息
  getSwipers () {
    var that = this
    console.log('did this work?!!!!???')
    wx.request({
      url: "https://ios1.artand.cn/discover/home/rank",
      data: {},
      header:{
          "Content-Type":"json"
      },
      method: 'GET', 
      success: res=>{
        // success
        console.log('got data????')
        console.log(res.data.ads)
        that.setData({
          swipers: res.data.ads
        })
        console.log('log swipers')
        console.log(swipers)
        
      }
    })
   },

})
