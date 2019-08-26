<template>
  <div id="app">
    <!-- 顶部 -->
    <van-nav-bar title="标题" left-text="返回" left-arrow @click-left="onClickLeft">
      <van-icon name="search" slot="right" @click.native="search" />
    </van-nav-bar>
    <!-- 路由 -->
    <router-view />
    <!-- 底部导航 -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" @click.native="$path('/home')">首页</van-tabbar-item>
      <van-tabbar-item icon="contact" @click.native="$path('/friends')">朋友</van-tabbar-item>
      <van-tabbar-item
        icon="shopping-cart-o"
        :info="$store.state.shopNum"
        @click.native="$path('/cart')"
      >购物车</van-tabbar-item>
      <van-tabbar-item icon="search" @click.native="$path('/search')">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import api from '@api'
export default {
  data() {
    return {
      active: 0
    }
  },
  methods: {
    onClickLeft() {
      this.$back()
    },
    search() {}
  },
  mounted() {
    api.getLunbo().then(({ data: { message } }) => {
      this.$store.state.lunbo = message
    })
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
