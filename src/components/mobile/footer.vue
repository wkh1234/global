<template>
  <div class="foot">
    <div class="top">Copyright 2020-2021&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;橙杏健康</div>
    <div class="main">
      <div class="title">下载APP体验更多服务</div>
      <div class="download" @click="downLoad">下载APP</div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Homefooter',
  props: {
    cardInfo: {
      type: Object,
      reuired: true
    },
  },
  computed:{
    ...mapGetters([
      'global'
   ])
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
  },
  methods: {
    downLoad () {
      if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
    	    var loadDateTime = new Date();
    	    window.setTimeout(function() {
    	    	var timeOutDateTime = new Date();
    	    	if (timeOutDateTime - loadDateTime < 5000) {
    	    		window.location = "";  //ios下载地址
    	    	} else {
    	        	window.close();
    	    	}
    	    },2000);
    	    window.location = "weibo://"; //ios提供打开协议
    	  }
    	  else if (navigator.userAgent.match(/android/i)) {
    	    try {
    	    	window.location = 'weibo://';  //android提供打开协议
    	    	setTimeout(function(){
    				window.location= "";    //android下载地址
    			},500);
    	    } catch(e) {}
	    }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  .foot {
    .top {
      font-size: 18px;
      font-family: Microsoft YaHei;
      font-weight: 300;
      color: #4B4B4B;
      margin-bottom: 12px;
      text-align: center;
    }

    .main {
      background: #609BE9;
      height: 130px;
      padding: 0 100px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .title {
        font-size: 36px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #FFFFFF;
        text-shadow: 2px 2px 3px rgba(25, 63, 153, 0.71);
      }

      .download {
        height: 86px;
        width: 325px;
        background: url('../../assets/images/mobile/dowmloadbg.png');
        background-size: cover;
        font-size: 46px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #FFFFFF;
        box-sizing: border-box;
        padding-left: 80px;
      }
    }
  }
</style>
