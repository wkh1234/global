<template>
  <div class="cardItem" @click="goDetail(cardInfo)">
    <img :src="cardInfo.iconUrl" alt="">
    <div class="cardTitle">{{cardInfo.title}}</div>
    <div class="concent" v-html="cardInfo.info" style="white-space: pre-line;"></div>
    <div class="link">了解服务详情</div>
  </div>
</template>

<script>
export default {
  name: 'cardItem',
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
      this.$router.push({ path: '/serveDetail', query: { id: item.id } })
    }
  },
  mounted () {
    // console.log(this.cardInfo.imgUrl, 1111)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  .cardItem {
    font-size: 1em;
    display: inline-block;
    box-sizing: border-box;
    padding: 1em 0 2em;
    height: 19em;
    width: 19em;
    background:url('../../assets/images/home/cardbg.png');
    text-align: center;
    background-size: cover;
    position: relative;

    img {
      width: 3.75em;
      height: 3.5em;
      margin-bottom: 0.75em;
    }

    .cardTitle {
      font-size: 1.1em;
      font-weight: 800;
      color: #4B4B4B;
      margin-bottom: 1em;
    }

    .concent {
      width: 100%;
      height: 8em;
      font-size: 0.9em;
      // margin: 0 2em;
      box-sizing: border-box;
      color: #4B4B4B;
      overflow: hidden;
    }

    .link {
      cursor: pointer;
      font-size: 0.9em;
      color:#2264A8;
      position: absolute;
      bottom: 2em;
      left: 50%;
      transform: translateX(-50%);
    }
  }
</style>
