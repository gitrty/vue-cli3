<template>
  <div class="newsinfo">
    <van-card num="2" tag="标签" :title="newsinfo.title">
      <template #num>点击:{{newsinfo.click}}次</template>
      <template #price>发表时间:{{newsinfo.add_time}}</template>
    </van-card>
    <div class="content">{{newsinfo.content}}</div>
    <!-- 评论区组件 -->
    <Comment :comment="comment" @addComment="addComment" />
    <van-button plain type="default" class="mon" @click="getMon">{{hasFlag?'加载更多':'没有更多了...'}}</van-button>
  </div>
</template>

<script>
import Comment from './comment.vue'
import api from '@api'
import filter from '../../filter'
export default {
  data() {
    return {
      newsinfo: [],
      comment: [],
      pageIndex: 1,
      limit: 2,
      hasFlag: true
    }
  },
  beforeMount() {
    this.getNewsInfo()
    this.getComments()
  },
  methods: {
    // 获取新闻详情
    getNewsInfo() {
      api.getNewsInfo(this.$route.params.id).then(({ data: { message } }) => {
        this.newsinfo = message
      })
    },
    // 获取评论内容
    getComments() {
      api
        .getComments(this.$route.params.id, this.pageIndex, this.limit)
        .then(({ data, data: { message, count } }) => {
          // console.info(message)
          this.hasFlag = this.pageIndex * this.limit <= count
          this.comment = [...this.comment, ...message]
        })
    },
    // 加载更多评论
    getMon() {
      this.pageIndex++
      this.getComments()
    },
    // 发表评论
    addComment(val) {
      api.postMessage(this.$route.params.id, val).then(({ data: message }) => {
        console.info(message)
        this.comment.unshift({
          add_time: filter.getTime(Date.now()),
          content: val,
          user_name: '匿名用户'
        })
      })
    }
  },
  components: {
    Comment
  }
}
</script>

<style lang="less" scoped>
.newsinfo {
  padding: 0 6px;
}
.van-card {
  background-color: #fff;
  border-bottom: 1px solid #000;
  height: 80px;
}
.van-card__title {
  text-align: center;
  color: red;
  font-size: 16px;
  margin-bottom: 20px;
}
.van-card__bottom {
  text-align: left;
  color: #000;
}
.van-card__price {
  color: blue;
}
.content {
  text-align: left;
  margin: 10px 0;
}
.mon {
  width: 100%;
  color: #999;
  border-color: #ccc;
}
</style>
