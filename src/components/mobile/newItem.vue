<template>
  <div class="newItem" @click="goDetail(cardInfo)">
    <img :src="cardInfo.thumbUrl" alt="">
    <div class="box">
      <div class="newTitle">{{cardInfo.title}}</div>
      <div class="newCtx">{{cardInfo.remarks}}</div>
      <div class="time">{{cardInfo.updateTime}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newItem',
  props: {
    cardInfo: {
      type: Object,
      reuired: true
    },
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    goDetail (item) {
      this.$router.push({path:'/newsDetail',query: {id:item.id}})
    },
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  .newItem {
    cursor: pointer;
    padding-top: 30px;
    display: flex;

    img {
      width: 386px;
      height: 190px;
      flex-shrink:0;
    }

    .box {
      display: inline-block;
      box-sizing: border-box;
      margin-left:38px;
      position: relative;
      overflow: hidden;
      min-width: 400px;
    }

    .newTitle {
      // width: 16em;
      font-size: 20px;
      font-weight: bold;
      color: #2264A8;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      text-overflow : ellipsis;
      box-sizing: border-box;
      // margin-bottom: 0.5em;
    }

    .newCtx {
      // width: 460px;
      // height: 100px;
      box-sizing: border-box;
      // margin-top: 6px;
      color: #4B4B4B;
      font-size: 18px;
      line-height: 25px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 5;
      overflow: hidden;
      text-overflow : ellipsis;
      white-space: pre-wrap;
      word-break: break-all;
    }

    .time {
      position: absolute;
      bottom: 0;
      left: 0;
      font-size: 14px;
      white-space: nowrap;
      color: #4B4B4B;
    }
  }
</style>
