/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo,
    CusUserInfo?:{},
    height?:Number,
    topHeight?:Number,
    NavWidth?:Number,
  }
  NarBarHeight?:any,
  toast?:any,
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}