<template>
  <div class="comment">
    <h2>发表评论</h2>
    <textarea class="tarea" cols="30" rows="10" placeholder="请输入评论内容" v-model="text"></textarea>
    <van-button type="danger" class="sea" @click="add">发表评论</van-button>

    <div class="comment-list" v-for="(val,index) in comment" :key="val.id">
      <div class="com-top">
        <span>{{index+1}}楼</span>
        <span>用户 : {{val.user_name}}</span>
        <span>发表时间 : {{val.add_time}}</span>
      </div>
      <div class="com-conent">{{val.content}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: Array
  },
  data() {
    return {
      text: ''
    }
  },
  mounted() {
    // console.info(this.comment)
  },
  methods: {
    add() {
      if (this.text === '') return
      this.$emit('addComment', this.text)
      this.text = ''
    }
  }
}
</script>

<style lang="less" scoped>
.tarea {
  width: 100%;
  box-sizing: border-box;
  border-color: #ccc;
}
.sea {
  width: 100%;
}
.com-top {
  background-color: #ccc;
  // height: 30px;
  // line-height: 30px;
  padding: 6px 0;
}
.comment-list {
  font-size: 14px;
  margin-top: 10px;
  span {
    margin: 0 6px;
  }
}
.com-conent {
  text-align: left;
}
</style>
