<template>
  <div id="booksListCotainer">
    <div class="bookItem" v-for="(book, index) in booksArr" :key="index">
      <img :src="book.image" alt="image">
      <!-- <img mode="aspectFill" src="https://img3.doubanio.com/view/subject/l/public/s27264181.jpg"></img> -->
      <div class="bookInfo">
        <p class="bookName">书名:{{book.title}}</p>
        <p class="bookAuthor">作者:{{book.author}}</p>
        <p class="bookPublisher">出版社:{{book.publisher}}</p>
      </div>
      <p class="bookPrice">{{book.price}}</p>
    </div>
  </div>
</template>
  
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        booksArr:[]
      }
    },
    mounted() {
      console.log('mounted')
      console.log(this)
        this.booksArr = JSON.parse(this.$mp.query.booksArr)
    }
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