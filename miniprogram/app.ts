// app.ts
App<IAppOption>({
  globalData: {
    CusUserInfo: {},
    height: 0,//胶囊高度
    NavWidth:0,//胶囊宽度
    topHeight:0,//顶部状态栏高度
  },
  async onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        wx.getUserInfo({
          success: res => {
          }
        })
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
    await this.NarBarHeight()
  },
  // 计算头部栏高度
  async NarBarHeight(){
    let BarMessage=await wx.getSystemInfo()
    this.globalData.topHeight=BarMessage.statusBarHeight*2
    let rightButton=await wx.getMenuButtonBoundingClientRect()
    console.log(rightButton)
    console.log(BarMessage)
    this.globalData.height=((rightButton.top-BarMessage.statusBarHeight)*2+rightButton.height)*2
    this.globalData.NavWidth=(rightButton.width+(BarMessage.windowWidth-rightButton.right))*2
  }
})