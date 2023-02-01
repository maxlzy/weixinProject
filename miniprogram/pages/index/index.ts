// index.ts
// 获取应用实例
const app = getApp<IAppOption>()
Page({
  data: {
    motto: 'Hello World',
    userInfo:{},
    showBack: false,
    hidePhoto:"",
    infoFlag: false,//是否弹出用户信息授权
  },
  onLoad() {
  },
  onShow() {

  },
  // 是否弹出用户授权
  showGetInfo(event: any) {
    this.setData({
      infoFlag: event.detail.infoFlag,
      userInfo:app.globalData.CusUserInfo,
    }
    )
    console.log(app.globalData.CusUserInfo)
  },
  goPre(){
    if(Object.keys(this.data.userInfo).length==0){
      this.setData({
        infoFlag:true
      })
      return
    }
  },
  noInfo(){
    this.setData({
      infoFlag:false,
    })
  }
})
