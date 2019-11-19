<template>
  <div id="booksContainer">
    <swiper indicator-dots autoplay circular indicator-color="green" indicator-active-color="pink">
        <block v-for="(book, index) in newArr" :key="index">
            <swiper-item>
                <img :src="book.image"></img>
            </swiper-item>
        </block>
    </swiper>
    <div id="booksList">
      <div class="nav">
        <span> 全部商品</span>
        <span @click="toBookList(booksArr)">></span>
      </div>
      <ul class="list">
        <li v-for="(book, index) in booksArr" :key="index">
          <img :src="book.image" alt="">
          <p>《{{book.title}}》</p>
          <p>{{book.author}}</p>
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
        booksArr:[]
      }
    },
    mounted() {
      this.booksArr = datas
    },
    computed: {
      newArr(){
        return [...this.booksArr].splice(0,4)
      }
    },
    methods: {
      toBookList(booksArr){
        wx.navigateTo({
          url: '/pages/booksList/main'
          // url: '/pages/bookList/main?booksArr=' + booksArr
        })
      }
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