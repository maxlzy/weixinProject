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
      console.log("1111")
      wx.login({
        success: (res) => {
          console.log(res)
          wx.getUserInfo({
            success: (res) => {
              console.log(res)
            }
          })
        }
      })
    }
  }
})
