<template>
  <div class="photolist">
    <van-tabs @change="change">
      <van-tab v-for="(val,index) in photoList" :key="index" :title="val.title">
        <div v-for="val in photos" :key="val.id">
          <img :src="val.img_url"/>
        </div>
        <div v-if="photos.length==0">暂无数据...</div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import api from '@api'
export default {
  data() {
    return {
      active: 0,
      photoList: [],
      photos: []
    }
  },
  created() {
    // 获取导航栏动态列表
    api.getImgCategory().then(({ data: { message } }) => {
      message.unshift({ id: 0, title: '全部' })
      this.photoList = message
    })
    this.change(0)
  },
  methods: {
    change(index, title) {
      // console.info(index, title)
      api.getImages(index).then(({ data: message }) => {
        // console.info(message.message)
        this.photos = message.message
      })
    }
  }
}
</script>

<style lang="less" scoped>
img{
  width: 100%;
  height:100%;
  display: block;
}
</style>
