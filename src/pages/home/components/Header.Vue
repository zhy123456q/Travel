<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to='/city'>
      <div class="header-right">
        {{city}}
        <span class='iconfont arrow-icon'>&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
  }
}
</script>
<style lang='stylus' scoped>
  @import '..\..\..\assets\styles\varibles.styl'
  @import '..\..\..\assets\styles\mixins.styl'
  .header
    line-height: .86rem
    display: flex
    background: $bgColor
    color:#fff
    .header-left
      width: .64rem
      float: left
      text-align:center
    .header-input
      flex:1
      padding-left: .2rem
      height: .64rem
      line-height: .64rem
      background: #fff
      margin-top: .12rem
      margin-left: .2rem
      border-radius: .1rem
      color: #ccc
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      float: right
      text-align: center
      color:#fff
      .arrow-icon
        font-size: .24rem
</style>
