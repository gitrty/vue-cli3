<template>
  <div id="app" @click="add">
    <!-- 顶部 -->
    <van-nav-bar title="Vue-App" left-text="返回" left-arrow @click-left="onClickLeft" fixed>
      <van-icon name="search" slot="right" @click.native="search" />
    </van-nav-bar>

    <!-- 路由 -->
    <transition name="toyo">
      <router-view />
    </transition>

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
    <!--  -->
  </div>
</template>

<script>
import api from '@api'
import { mapActions, mapState, mapGetters } from 'vuex'
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
    search() {},
    // vuex-mapActions  -----
    ...mapActions(['add'])
  },
  computed: {
    // vuex-mapState   -----
    ...mapState({
      shopNum: state => state.shopNum
    }),
    // vuex-mapGetters  -----
    ...mapGetters([])
  },
  mounted() {
    api.getLunbo().then(({ data: { message } }) => {
      this.$store.state.lunbo = message
    })
    console.info(this.shopNum)
  }
}
</script>

<style lang="less" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // 解决使用vue动画时x轴出现滚动条
  overflow-x: hidden;
  padding-top:46px;
  padding-bottom: 50px;
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
// 路由切换动画
.toyo-enter {
  transform: translateX(100%);
}
.toyo-leave-to {
  transform: translateX(-100%);
  position: absolute;
  // 解决路由动画时 轮播图 全部显示 (有3张图片,所以-300%)
  left: -300%;
}
.toyo-enter-active,
.toyo-leave-active {
  transition: 1s all ease;
}
</style>
