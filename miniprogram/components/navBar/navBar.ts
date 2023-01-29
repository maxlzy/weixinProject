// components/navBar/navBar.ts
const AppData= getApp<IAppOption>()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showBack:{
      type:Boolean,
      value:false,
    },
    Title:{
      type:String,
      value:""
    },
    backColor:{
      type:String,
      value:"#222"
    }
  },
  attached:function(){
    this.setData({
      height:AppData.globalData.height,
      topHeight:AppData.globalData.topHeight,
      NavWidth:AppData.globalData.NavWidth,
    })
  },
  /**
   * 组件的初始数据
   */
  data: {
    height:AppData.globalData.height,
    topHeight:AppData.globalData.topHeight,
    NavWidth:AppData.globalData.NavWidth,
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 获取顶部距离

  }
})
