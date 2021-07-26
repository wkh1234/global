<template>
  <header>
    <img class="logo" src="@/assets/images/home/logo2.png" alt="">
    <div class="commit-box">


      <div class="download">
        下载APP
        <div class="downloadDetail">
          <span class="arrow"></span>
          <div class="loadItem">
            <span class="left">ios下载</span>
            <img :src="global.download && global.download.ios" alt="">
          </div>
          <div class="line" ></div>
          <div class="loadItem">
              <span class="left">Android<br> 下载</span>
              <img :src="global.download && global.download.android" alt="">
          </div>
        </div>
      </div>
      <div class="join">
        加入橙杏
        <div class="joinDetail">
          <span class="arrow"></span>
          <div class="text">{{global.jion && global.jion.content}}</div>
        </div>
      </div>
      <div class="commit">
        联系我们
        <div class="commitDetail">
          <span class="arrow"></span>
          <div class="commitItem">
            <span class="text">联系邮箱 :</span>
            <br>
            <span class="text">{{global.contact && global.contact.mail}}</span>
          </div>
          <div class="commitItem">
            <span class="text">联系电话 :</span>
            <br>
            <span class="text">{{global.contact && global.contact.phone}}</span>
          </div>
          <!-- <div class="commitItem">
            <span class="text">联系地址 :</span>
            <br>
            <span class="text">{{global.contact && global.contact.address}}</span>
          </div> -->

        </div>
      </div>
    </div>
</header>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'Homehead',
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
      showMenu: false
    }
  },

  mounted () {
    this.$store.dispatch('getGlobalSync')
    // console.log('this.userInfo==',this.global);
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  header {
  background: #fff;
  padding: 0 18em;

  .logo {
    height: 2.65em;
    width: 16.2em;
    padding: 1em 0 1.4em
  }
  .commit-box {
    float: right;
    padding-right: 2.5em ;
    padding-top: 2.1em;
    cursor: pointer;
  }
  .commit {
    float: right;
    margin-right: 2.5em ;
    position: relative;
    height: 3em;

    .commitDetail {
      display: none;
      position: absolute;
      top:3em;
      left: -3em;
      padding: 0.5em 0.6em;
      background: url('../../assets/images/home/commitbg.png');
      background-size: cover;

      width: 12em;
      z-index: 2;
      .arrow {
        width: 2em;
        height: 1.4em;
        position: absolute;
        top:-1.4em;
        left: 3.3em;
        background: url('../../assets/images/home/arrow.png');
        background-size: cover;
      }

      .text {
        font-weight: 300;
        font-size: 0.9em;
        line-height: 1.6em;
        color: #4B4B4B;
      }

      .commitItem {
        padding-top: 0.5em ;
      }
    }
  }

  .commit:hover {
    .commitDetail {
      display: block;
    }
  }

  .join {
    float: right;
    margin-right: 2.5em ;
    position: relative;
    height: 3em;

    .joinDetail {
      display: none;
      position: absolute;
      min-height: 5em;
      width: 11em;
      top:3.2em;
      left: -3em;
      // padding: 1em 0.5em;
      background: url('../../assets/images/home/joinbg.png');
      background-size: cover;
      line-height: 2;
      z-index: 2;
      text-align: center;

      .arrow {
        width: 2em;
        height: 1.4em;
        position: absolute;
        top:-1.4em;
        left: 3.3em;
        background: url('../../assets/images/home/arrow.png');
        background-size: cover;
      }
      .text {
        vertical-align: middle;
        line-height: 5;
        text-align: center;
        font-size: 1em;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #4B4B4B;
      }
    }
  }

  .join:hover {
    .joinDetail {
      display: block;
    }
  }

 .download {
    float: right;
    margin-right: 2.5em ;
    position: relative;
    height: 3em;

    .downloadDetail {
      display: none;
      position: absolute;
      height: 14em;
      // width: 11em;
      top:3.2em;
      left: -3em;
      background: url('../../assets/images/home/downbg.png');
      background-size: cover;
      line-height: 2;
      z-index: 2;
      text-align: center;

      .arrow {
        width: 2em;
        height: 1.4em;
        position: absolute;
        top:-1.4em;
        left: 3.3em;
        background: url('../../assets/images/home/arrow.png');
        background-size: cover;
      }
      .loadItem {
        display: flex;
        align-items: center;
        padding: 0.75em;
        .left {
          font-size: 0.9em;
          font-family: Microsoft YaHei;
          font-weight: 300;
          color: #4B4B4B;
          white-space: nowrap;
        }

        img {
          margin-left: 0.8em;
          height: 5.5em;
          width: 5.5em;
          display: block;
        }
      }
      .line {
        height: 1px;
        background: url('../../assets/images/home/blueline.png');
      }
      .text {
        font-size: 1.2em;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #4B4B4B;
      }
    }
  }

  .download:hover {
    .downloadDetail {
      display: block;
    }
  }
}
</style>
