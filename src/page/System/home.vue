<template>
  <div class="home">
    <!-- 轮播图 -->
    <toyo-swipe :ht="200" :time="3000" :opts="this.$store.state.lunbo" />
    <!-- grid导航 -->
    <van-grid :column-num="3">
      <van-grid-item
        v-for="grid in grids"
        :key="grid.id"
        icon="photo-o"
        :text="grid.title"
        :to="grid.to"
      >
        <template #icon>
          <img :src="grid.src" />
        </template>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import api from '@api'
export default {
  data() {
    return {
      grids: []
    }
  },
  created() {
    api.getGrid().then(({ data: { message } }) => {
      this.grids = message
    })
  }
}
</script>

<style lang="less" scoped>
.van-grid-item {
  img {
    width: 60px;
    height: 60px;
    margin-bottom: 10px;
  }
}
</style>
