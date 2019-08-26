<template>
  <div>
    <van-card v-for="news in newsList" :key="news.id" :title="news.title" :thumb="news.img_url">
      <template #price>{{news.add_time}}</template>
      <template #num>点击了{{news.click}}次</template>

    </van-card>
  </div>
</template>

<script>
import api from '@api'
export default {
  data() {
    return {
      newsList: []
    }
  },
  created() {
    api.getNews().then(({ data: { message } }) => {
      this.newsList = message
      console.info(message)
    })
  }
}
</script>

<style lang="less" scoped>
.van-card__content {
  text-align: left;
  min-height: 55px;
}
.van-card__thumb{
  height: 55px;
}
.van-card__price{
  margin-top: 18px;
}
.van-card__num{
  margin-top: 18px;
}
</style>
