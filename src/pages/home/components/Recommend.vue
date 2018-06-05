<template>
  <div>
    <div class="title">
      热销推荐
    </div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div>
          <img :src="item.imgUrl" :alt="item.title" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.description}}</p>
          <button class="detail-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1805/ca/ca11017f163d32cea3.water.jpg_200x200_3030aa94.jpg',
        title: '南京万达主题乐园',
        description: '江苏省南京市栖霞区仙林大道与守敬路交汇处南京万达茂1楼2楼'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/f7/f7c3be996152011c.img.jpg_200x200_0b707f70.jpg',
        title: '南京总统府',
        description: '江苏省南京市玄武区长江路292号'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1601/93/93fc9519bd1959b890.img.jpg_200x200_61a38fdf.jpg',
        title: '牛首山文化旅游区',
        description: '江苏省南京市江宁区宁丹大道18号'
      }, {
        id: '004',
        imgUrl: 'http://img1.qunarzz.com/sight/201312/03/38da27f8a2ad319ec8d65eac.jpg_200x200_72a1d26d.jpg',
        title: '红山森林动物园',
        description: '江苏省南京市玄武区和燕路168号'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '..\..\..\assets\styles\mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem .1rem .1rem .2rem
    .item-info
      flex: 1
      min-width: 0
      padding: .1rem
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .detail-btn
        background: #ff9300
        line-height: .44rem
        margin-top: .16rem
        padding: 0 .1rem
        border-radius: .06rem
        color: #fff
</style>
