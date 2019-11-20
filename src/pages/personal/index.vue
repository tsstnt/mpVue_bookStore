<template>
  <div id="personalContainer">
    <div class="header">
      <img class="avatarImg" :src="userInfo.avatarUrl?userInfo.avatarUrl:'/static/imgs/personal/personal.png'" alt="">
      <button open-type="getUserInfo" @getuserInfo="handleGetUserInfo" class="userName">{{userInfo.nickName?userInfo.nickName:'登陆'}}</button>
    </div>
    <button @click="scan">扫码</button>
  </div>
</template>
  
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        userInfo:{}
      }
    },
    methods: {
      handleGetUserInfo(res){
        this.userInfo = res.map.detail.userInfo
      },
      scan(){
        wx.scanCode({
         // onlyFromCamera: true, //是否只能从相机扫码，不允许从相册选择图片,
          success: () => {

          }
        });
      },
      mounted() {
        wx.getUserInfo({
          withCredentials: 'false',
          lang: 'zh_CN',
          timeout:10000,
          success: (res)=>{
            console.log(res)
            this.userInfo = res.userInfo
          },
          fail: ()=>{},
          complete: ()=>{}
        });
      },
    },
  }
</script>
  
<style lang="stylus" rel="stylesheet/stylus">
  #personalContainer
    .header
      padding 40rpx
      background #02a774
      .avatarImg
        width 100rpx
        height 100rpx
        vertical-align middle
        margin-right 20rpx
        border-radius 50%
      .userName
        display inline-block
        height 60rpx
        line-height 60rpx
        vertical-align middle
        background rgba(0, 0, 0, .2)
        color #fff
        font-size 24rpx
        max-width 200rpx
        text-align center
</style>
