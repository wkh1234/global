<template>
  <div class="newItemBig">
    <img :src="cardInfo.thumbUrl" alt="" @click="goDetail(cardInfo)">
    <div class="newTitle">{{cardInfo.remarks}}</div>
  </div>
</template>

<script>
export default {
  name: 'newItemBig',
  props: {
    cardInfo: {
      type: Object,
      reuired: true
    },
  },
  data () {
    return {
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
  .newItemBig {
    font-size: 1em;
    display: inline-block;
    box-sizing: border-box;
    height: 17em;
    width: 28em;
    text-align: center;
    position: relative;
    cursor: pointer;
    img {
      height: 100%;
      width: 28em;
    }

    .newTitle {
      font-size: 1.1em;
      font-weight: 800;
      color: #fff;
      background: rgba(186,181,173, 0.5);
      position: absolute;
      bottom: 0;
      box-sizing: border-box;
      width: 100%;
      line-height: 2em;
      padding: 0 1.2em;
      text-align: left;
    }
  }
</style>
