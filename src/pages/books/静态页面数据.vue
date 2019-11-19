<template>
  <div id="booksContainer">
    <swiper indicator-dots autoplay circular>
        <!-- <block v-for="(book, index) in newArr" :key="index" > -->
            <swiper-item>
                <img mode="aspectFill" src="https://img3.doubanio.com/view/subject/l/public/s1727290.jpg"></img>
            </swiper-item>
            <swiper-item>
                <img mode="aspectFill" src="https://img3.doubanio.com/view/subject/l/public/s27264181.jpg"></img>
            </swiper-item>
            <swiper-item>
                <img mode="aspectFill" src="https://img3.doubanio.com/view/subject/l/public/s1103152.jpg"></img>
            </swiper-item>
            <swiper-item>
                <img mode="aspectFill" src="https://img3.doubanio.com/view/subject/l/public/s4610502.jpg"></img>
            </swiper-item>
        <!-- </block> -->
    </swiper>
    <div id="booksList">
      <div class="nav">
        <span> 全部商品</span>
        <span>></span>
      </div>
      <ul class="list">
        <li>
          <img src="https://img3.doubanio.com/view/subject/l/public/s1727290.jpg" alt="">
          <p>追风筝的人</p>
          <p>天使</p>
        </li>
        <li>
          <img src="https://img3.doubanio.com/view/subject/l/public/s27264181.jpg" alt="">
          <p>追风筝的人</p>
          <p>天使</p>
        </li>
        <li>
          <img src="https://img3.doubanio.com/view/subject/l/public/s1727290.jpg" alt="">
          <p>追风筝的人</p>
          <p>天使</p>
        </li>
        <li>
          <img src="https://img3.doubanio.com/view/subject/l/public/s1727290.jpg" alt="">
          <p>追风筝的人</p>
          <p>天使</p>
        </li>
      </ul>
    </div>
  </div>
</template>
  
<script type="text/ecmascript-6">
  import datas from './datas/data.json'
  export default {
    data() {
      return {
        bookArr:[]
      }
    },
    mounted() {
      this.bookArr = datas
    },
  }
</script>
  
<style lang="stylus" rel="stylesheet/stylus">
  #booksContainer
    // height 100%
    // width 100%
    swiper 
      height 400rpx
      width 100%
      img 
        width 100%
        height 100%
    #booksList
      .nav
        padding 10rpx
        display flex
        justify-content space-between
      .list
        display flex
        flex-wrap wrap
        li
          width 50%
          display flex
          flex-direction column
          align-items center
          border-bottom 1rpx solid #eee
          &:nth-child(2n+1)
            border-right 1rpx solid #eee
            width calc(50% - 1rpx)
          img 
            width 200rpx
            height 200rpx
            margin 10rpx 0
          p
            font-size 26rpx
            line-height 50rpx  


</style>