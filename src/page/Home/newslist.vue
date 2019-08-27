<template>
  <div>
    <van-card
      v-for="news in newsList"
      :key="news.id"
      :title="news.title"
      :thumb="news.img_url"
      @click.native="$path(`/home/newsinfo/${news.id}`)"
    >
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
    // 获取新闻
    api.getNews().then(({ data: { message } }) => {
      this.newsList = message
    })
  }
}
</script>

<style lang="less" scoped>
.van-card__content {
  text-align: left;
  min-height: 55px;
}
.van-card__thumb {
  height: 55px;
}
.van-card__price {
  margin-top: 18px;
}
.van-card__num {
  margin-top: 18px;
}
</style>
