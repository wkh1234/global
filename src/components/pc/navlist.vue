<template>
  <!-- nav -->
  <div class="navlsit">
      <!-- <div class="nav-item" v-for='(item, index) in navList' :key="index">首页</div> -->
      <div class="nav-item" v-for='(item, index) in navList' :key="index" @click="goPage(item)">
        {{item.title}}
        <img v-if='item.item && item.item.length' src="@/assets/images/home/downarrow.png" alt="">
        <ul v-if='item.item && item.item.length' >
          <li v-for='(child, index) in item.item' :key="index" @click="goDetail(child)">
            <span>{{child.title}}</span>
          </li>
        </ul>
      </div>
      <div class="nav-item" @click="goUs()">
        关于我们
      </div>
      <!-- <div class="nav-item news">
        资讯动态
        <img src="@/assets/images/home/downarrow.png" alt="">
        <ul>
          <li>
            <span>健检服务</span>
          </li>
          <li>
            <span>健检服务</span>
          </li>
          <li>
            <span>健检服务</span>
          </li>
        </ul>
      </div>
      <div class="nav-item">关于我们</div> -->
  </div>
</template>

<script>
import { getHeader } from '@/api'

export default {
  name: 'navList',
  props: {
    cardInfo: {
      type: Object,
      reuired: true
    },
  },
  data () {
    return {
      showMenu: false,
      navList: []
    }
  },
  mounted () {
    this.getHeader()
  },
  methods: {
    // 获取菜单信息
    getHeader() {
      const params = {
      }
      getHeader(params).then((res) => {
        this.navList = res
      })
    },
    goDetail(item) {
      const { type, id } = item
      if (type === 1) {
        this.$router.push({ path: '/serveDetail', query: { id } })
      } else {
        this.$router.push({ path: '/newsList', query: { id } })
      }
    },
    goPage(item) {
      if (item.id === 1) {
        this.$router.push({ path: '/', query: {} })
      }
    },
    // 关于我们
    goUs() {
      this.showMenu = false
      this.$router.push({ path: '/aboutUs', query: {} })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  .navlsit {
  background: #609BE9;
  text-align: right;
  height: 4em;
  margin: 0 18em;
  // padding-right: 5.5em;

    ul {
     display: none;
  }
  .nav-item {
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    height: 100%;
    line-height: 3.5em;
    font-size: 1.1em;
    color: #FFF;
    text-align: center;
    width: 10em;
    position: relative;

    img{
      width: 1.2em;
      height: 0.5em;
    }

    ul {
      position: absolute;
      left: 0;
      z-index: 5;
      li {
        width: 10em;
        // padding: 1em 0;
        height: 3em;
        line-height: 3em;
        background: rgba(96,155,233, 0.5);
        border-bottom: 1px dashed #fff;
        box-sizing: border-box;
        span {
          display: block;
          text-align: center;
          font-size: 0.9em;
          font-family: Microsoft YaHei;
          font-weight: 300;
          color: #FFFFFF;
          line-height: 3em;
        }
      }

      li:last-child {
        border: none
      }
    }
  }

  .show {
    display: block!important;;
  }
  .nav-item:hover {
    ul {
      display: block;
    }
  }
}
</style>
