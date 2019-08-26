<template>
  <div class="toyo-swipe">
    <van-swipe :style="{height:`${ht}px`}" :autoplay="time" indicator-color="white">
      <van-swipe-item v-for="(item,index) in opts" :key="index">
        <img :src="item.img" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  props: {
    ht: Number, // 轮播图高度
    time: Number, // 单位ms
    opts: Array // 轮播图地址
  },
  mounted() {}
}
</script>

<style lang="less" scoped>
.toyo-swipe {
  .van-swipe-item {
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
