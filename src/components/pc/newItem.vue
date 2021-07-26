<template>
  <div class="newItem" @click="goDetail(cardInfo)">
    <img :src="cardInfo.thumbUrl" alt="">
    <div class="box">
      <div class="newTitle">{{cardInfo.title}}</div>
      <div class="newCtx">{{cardInfo.remarks}}</div>
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
    margin-top: 2.6em;
    font-size: 1em;
    display: flex;
    box-sizing: border-box;
    height: 7.5em;
    width: 28em;

    img {
      width: 10em;
      height: 7.5em;
      flex-shrink:0;
    }

    .box {
      display: inline-block;
      box-sizing: border-box;
      padding: 2.3em  0 0 1em;
    }

    .newTitle {
      // width: 16em;
      font-size: 1.1em;
      font-weight: bold;
      color: #4B4B4B;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      text-overflow : ellipsis;
      box-sizing: border-box;
      // margin-bottom: 0.5em;
      line-height: 1.4;
    }

    .newCtx {
      // width: 16em;
      box-sizing: border-box;
      margin-top: 0.05em;
      color: #4B4B4B;
      font-size: 0.9em;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      text-overflow : ellipsis;
      line-height: 1.2;
    }
  }
</style>
