<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for='item of swiperList' :key='item.imgUrl'>
        <img class='swiper-image' :src="item.imgUrl" alt="去哪儿">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/78/5ca9578686bf3002.jpg_750x200_531755bf.jpg'

      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/c4/1cdd28811593b802.jpg_750x200_5fbb7c91.jpg'

      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/3b/ef86879aa50e3002.jpg_750x200_2a108508.jpg'
      }]
    }
  }
}
</script>

<style lang='stylus' scoped>
// >>>表示穿透，子组件适用
  .wrapper >>> .swiper-pagination-bullet-active
       background: #fff
    .wrapper
      overflow: hidden
      width: 100%
      height: 0
      padding-bottom: 26.7%
      background: #eee
      .swiper-image
        width: 100%
</style>
