<template>
  <div class="icons">
    <swiper>
      <swiper-slide :options="swiperOption" v-for='(page, index) of pages' :key='index'>
        <div class="icon" v-for='item of page' :key='item.id'>
          <div class="icon-img">
            <img class="content" :src="item.iconUrl" :alt="item.description">
            <p class="description">{{item.description}}</p>
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
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      },
      iconList: [{
        id: '001',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        description: '景点门票'
      }, {
        id: '002',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        description: '必游榜单'
      }, {
        id: '003',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
        description: '踏青赏花'
      }, {
        id: '004',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        description: '一日游'
      }, {
        id: '005',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        description: '名胜古迹'
      }, {
        id: '006',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/c1/6f15f887179fa002.png',
        description: '夫子庙'
      }, {
        id: '007',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
        description: '总统府'
      }, {
        id: '008',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        description: '中山陵'
      }, {
        id: '009',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
        description: '万达主题乐园'
      }, {
        id: '010',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png',
        description: '牛首山'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
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
          ellipsis()
</style>
