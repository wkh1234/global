<template>
  <div class="foot">
    <div class="about">
       <div class="title">关于橙杏健康</div>
       <img class="line" src="@/assets/images/home/shape.png" alt="">
       <div class="mainCtx">
         {{global.compinfo && global.compinfo.content}}
       </div>
    </div>
    <div class="download">
      <div class="title">APP下载</div>
       <img class="line" src="@/assets/images/home/shape.png" alt="">
      <div class="loadItem">
          <span class="left">ios下载</span>
          <img :src="global.download && global.download.ios" alt="">
      </div>
      <div class="loadItem">
          <span class="left">Android<br> 下载</span>
          <img :src="global.download && global.download.android" alt="">
      </div>
    </div>
    <div class="conact">
      <div class="title">联系我们</div>
       <img class="line" src="@/assets/images/home/shape.png" alt="">
      <div class="conactItem">
        <img class="phoneImg" src="@/assets/images/home/phone.png" alt="">
        <div class="right">
          <div  class="titleName">电话号码</div>
          <div class="phone">01086391775</div>
        </div>
      </div>
      <div class="conactItem">
        <img class="companyImg" src="@/assets/images/home/company.png" alt="">
        <div class="right">
          <div class="titleName">公司</div>
          <div class="companyCtx">Copyright©2021 All Rights Reserved版权所有：橙杏健康</div>
        </div>
      </div>
      <div class="conactItem">
        <img class="areaImg" src="@/assets/images/home/position.png" alt="">
        <div class="right">
          <div class="titleName">地址</div>
          <div class="areaCtx">北京市海淀区健康智谷大厦7层</div>
        </div>
      </div>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  .foot {
    box-sizing:border-box ;
    background: #2264A8;
    padding:3.4em  14.5em 0;
    height: 30em;
    display: flex;
    justify-content: space-between;

    .title {
        font-size: 1.5em;
        font-weight: 500;
        color: #FFFFFF;
      }
    .line {
        width: 2em;
        height: 2px;
        margin: 0.8em 0 1.4em;
      }

    .about {
      .mainCtx {
        font-size: 1em;
        font-weight: 300;
        color: #DDDDDE;
        line-height: 1.7em;
        width: 20.5em;
      }
    }

    .download {
      .loadItem {
        margin-bottom: 1.2em;
        display: flex;
        align-items: center;

        .left {
          font-size: 0.9em;
          font-family: Microsoft YaHei;
          font-weight: 300;
          color: #FFFFFF;
          text-align: center
        }

        img {
          margin-left: 0.9em;
          height: 5.5em;
          width: 5.5em;
        }
      }
    }
    .conact {
      .conactItem {
        height: 5.5em;
        width: 13em;
        margin-bottom: 0.5em;
        background: #2D6CAC;
        padding: 0.6em 0.8em;
        display: flex;

        img {
          height: 1.1em;
          width: 1.1em;
          margin-right: 0.7em;
        }

        .companyImg {
          height: 1.5em;
          width: 1.5em;
        }
        .phoneImg {
          height: 1.7em;
          width: 1.1em;
        }

        .right {

          .titleName {
            color: #DDDDDE;
            font-size: 0.7em;
            line-height: 1;
            margin-bottom: 0.2em;
          }

          .phone {
            font-size: 1em;
            color: #FFFFFF;
          }

          .companyCtx {
            font-size: 0.7em;
            color: #FE4565
          }

          .areaCtx {
            margin-top: 0.2em;
            color: #DDDDDE;
            font-size: 0.7em;
            line-height: 1.2;
          }
        }
      }
    }
  }
</style>
