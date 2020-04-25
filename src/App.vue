<template>
  <div id="app">
    <!--====== 头部菜单栏 ======-->
    <header-view></header-view>
    <!--====== 主体部分 ======-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!--====== 底部菜单栏 ======-->
    <footer-view></footer-view>
    <!--====== 回到顶部 ======-->
    <back-to-top></back-to-top>
  </div>
</template>

<script>
import HeaderView from './views/menu/header.vue'
import FooterView from './views/menu/footer.vue'
import BackToTop from './views/component/backtotop/index.vue'
export default {
  name: 'App',
  components: {
    HeaderView,
    FooterView,
    BackToTop
  }
}
</script>
