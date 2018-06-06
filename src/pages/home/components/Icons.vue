<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide  v-for='(page, index) of pages' :key='index'>
        <div class="icon" v-for='item of page' :key='item.id'>
          <div class="icon-img">
            <img class="content" :src="item.imgUrl" :alt="item.desc">
            <p class="description">{{item.desc}}</p>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false,
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang='stylus' scoped>
  @import '..\..\..\assets\styles\varibles.styl'
  @import '..\..\..\assets\styles\mixins.styl'
  .icons
    overflow: hidden
    height: 0
    padding-bottom: 50%
    margin-top: .1rem
    .icon
      position: relative
      overflow: hidden
      float: left
      height:0
      width: 25%
      padding-bottom: 25%
      text-align: center
      .icon-img
        position: absolute
        top: 0
        left: 0
        right:0
        bottom: .44rem
        .content
          height: 100%
        .description
          color:$darkTextColor
          margin-top: .08rem
          ellipsis()
</style>
