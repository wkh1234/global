<template>
  <div class="foot">
    <div class="text">关于我们 &nbsp; &nbsp; | &nbsp; &nbsp;联系我们 &nbsp; &nbsp;| &nbsp; &nbsp;服务声明 &nbsp; &nbsp;| &nbsp; &nbsp;隐私条约</div>
  </div>
</template>

<script>
export default {
  name: 'detailFoot',
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
  mounted () {
    // console.log(this.cardInfo.imgUrl, 1111)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  .foot {
    height: 5em;
    background: #2D6CAC;
    line-height: 5em;

    .text {
      text-align: center;
      color: #DDDDDE;
      font-size: 0.8em;
    }
  }
</style>
