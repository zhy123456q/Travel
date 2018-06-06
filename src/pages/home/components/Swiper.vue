<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for='item of list' :key='item.imgUrl'>
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
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    showSwiper () {
      return !!this.list.length
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
      padding-bottom: 31.2%
      background: #eee
      .swiper-image
        width: 100%
</style>
