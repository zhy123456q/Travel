<template>
  <div>
    <div class="banner" @click="handleShowGallary">
      <img
        class="banner-img"
        src="//img1.qunarzz.com/sight/p0/1707/55/55264df7e02bc409a3.water.jpg_600x330_3c5d5f8c.jpg" alt="南京欢乐水魔方">
        <div class="banner-info">
          <div class="banner-title">
            大连圣亚海洋世界（AAA景区）
          </div>
          <div class="banner-number">
            <span class="iconfont banner-icon">&#xe692;</span>
            39
          </div>
        </div>
    </div>
    <common-gallary
      :imgs="imgs"
      v-show="showGallary"
      @close="handleShowGallary"
    >
    </common-gallary>
  </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      imgs: ['http://img1.qunarzz.com/sight/p0/1804/ef/ef090d8cf80ed202a3.img.jpg_350x240_e52750ca.jpg', 'http://img1.qunarzz.com/sight/p0/1804/2d/2d82c759bce931b1a3.img.jpg_350x240_f9c6f8c5.jpg', 'http://img1.qunarzz.com/sight/p0/1804/be/bedfb30457aa656aa3.img.jpg_350x240_7dad0e70.jpg'],
      showGallary: false
    }
  },
  components: {
    CommonGallary
  },
  methods: {
    handleShowGallary () {
      this.showGallary = !this.showGallary
    }
  }
}
</script>
<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      color: #fff
      line-height: .6rem
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        padding: 0 .4rem
        margin-top: .14rem
        height: .32rem
        line-height: .32rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
