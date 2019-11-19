<template>
  <div id="booksListCotainer">
    <div class="bookItem">
      <img src="https://img3.doubanio.com/view/subject/l/public/s1727290.jpg" alt="">
      <div class="bookInfo">
        <p class="bookName">书名:k</p>
        <p class="bookAuthor">作者:</p>
        <p class="bookPublisher">出版社:</p>
      </div>
      <p class="bookPrice">￥58.9</p>
    </div>
  </div>
</template>
  
<script type="text/ecmascript-6">
  export default {
    mounted() {
      console.log(this)
    },
  }
</script>
  
<style lang="stylus" rel="stylesheet/stylus">
  #booksListCotainer
    .bookItem
      display flex
      padding 10rpx
      border-bottom 1rpx solid #eee
      img 
        width 140rpx
        height 140rpx
        margin-right 10rpx
      .bookInfo
        max-width 70%//防止因为书名过长 把左侧的图片挤出去
        p
          width 100%
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
          font-size 30rpx
          line-height 50rpx
      .bookPrice
        position absolute
        right 20rpx
        font-size 36rpx    
        font-weight bold
        color red
</style>