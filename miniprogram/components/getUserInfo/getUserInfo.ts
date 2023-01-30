// components/getUserInfo/getUserInfo.ts
const appData = getApp<IAppOption>()
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    getUserInfo() {
      wx.getUserProfile({
        lang: 'zh_CN',
        desc: '允许该小程序获取您的用户信息',
        success: (res) => {
          appData.globalData.CusUserInfo=res.userInfo
          this.triggerEvent('showGetInfo',{infoFlag:false})
        },
        fail:(res)=>{
          console.log(res)
          appData.toast("授权失败")
        }
      })
    }
  }
})
