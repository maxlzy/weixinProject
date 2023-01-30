// index.ts
// 获取应用实例
const app = getApp<IAppOption>()
Page({
  data: {
    motto: 'Hello World',
    userInfo: app.globalData.CusUserInfo,
    showBack: false,
    infoFlag: true,//是否弹出用户信息授权
  },
  onLoad() {
  },
  onShow() {},
  // 是否弹出用户授权
  showGetInfo(event: any) {
    console.log(event)
    this.setData({
      infoFlag: event.detail.infoFlag,
      userInfo:app.globalData.CusUserInfo,
    }
    )
  }
})
