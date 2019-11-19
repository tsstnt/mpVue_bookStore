<template>
  <div id="firstViewContainer">
    <swiper indicator-dots="true" autoplay="true" circular="true"  @change="handleChange" :indicator-dots="index !== 3" indicator-color="green" indicator-active-color="pink">
      <swiper-item>
        <img src="/static/imgs/firstView/1.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/2.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/3.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/nvsheng.jpg" alt="">
      </swiper-item>
    </swiper>
    <button class="btn" v-show="index === 3" @click="toBooks">开始体验</button>
  </div>
</template>
  
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        index:0
      }
    },
    methods: {
      handleChange(event){
        this.index = event.mp.detail.current
      },
      toBooks(){
        //当设置了Tabbar  这种跳转就不能使用了
        // wx.navigateTo({ url: '/pages/books/main' });
        wx.switchTab({
          url: '/pages/books/main' 
      })
      }
  }}
</script>
  
<style lang="stylus" rel="stylesheet/stylus">
  #firstViewContainer
    height 100%
    width 100%
    swiper 
      height 100%
      width 100%
      img 
        width 100%
        height 100%
    .btn
      width 300rpx
      height 80rpx
      text-align center
      line-height 80rpx
      position absolute
      bottom 20rpx
      left 50%
      margin-left -150rpx
      background rgba(255,255,255,0.5)
</style>