<template>
  <div class="notfind" >
      <img src="@/assets/images/home/404.png" alt="">
      <div class="title">页面丢失，请重新加载</div>
  </div>
</template>

<script>
export default {
  name: 'notfind',
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
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
 .notfind {
   height: 100%;
   width: 100%;
   background: #609BE9;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   img {
     height: 16em;
     width: 42em;
     margin-bottom: 6em;
   }
   .title {
      font-size: 2.5em;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #FFFFFF;

   }
 }
</style>
