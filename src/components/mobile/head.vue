<template>
  <header>
    <div class="headbox">
      <img class="logo" src="@/assets/images/mobile/logo.png" alt="">
      <img class="menuIcon" src="@/assets/images/mobile/menuicon.png" alt="" @click="clickMenu">
    </div>
    <div class="mask" v-if='showMenu' @click="clickMenu">
      <div class="menuList">
          <div class="meunItem" v-for='(item, index) in menuList' :key="index" @click="goPage(item)">
            <div class="supName">{{item.title}}</div>
            <ul v-if='item.item && item.item.length' >
              <li v-for='(child, index) in item.item' :key="index" @click="goDetail(child)">
                <span>{{child.title}}</span>
              </li>
            </ul>
          </div>
          <div class="meunItem"  @click="goUs()">
            <div class="supName">关于我们</div>
          </div>
      </div>
    </div>
    <mt-popup
      :visible.sync="showMenu"
      position="left"
      @touchmove.native.stop.prevent>

    </mt-popup>
</header>
</template>

<script>
import {mapGetters} from 'vuex'
import { getHeader } from '@/api'

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
      showMenu: false,
      menuList:[]
    }
  },

  mounted () {
    this.getHeader()
    this.$store.dispatch('getGlobalSync')
    // console.log('this.userInfo==',this.global);
  },
  methods: {
    clickMenu() {
      this.showMenu = !this.showMenu
      if (this.showMenu){
        // 解决iOS滚动穿透
        document.body.style.overflow = 'hidden'
        document.addEventListener('touchmove', this.preventTouchMove, { passive: false })
      } else {
        document.body.style.overflow = 'auto'
        document.removeEventListener('touchmove', this.preventTouchMove, { passive: false })
      }
    },
      // 阻止滚动穿透
    preventTouchMove (e) {
      e.stopPropagation()
      e.preventDefault()
    },
    // 获取菜单信息
    getHeader() {
      const params = {
      }
      getHeader(params).then((res) => {
        this.menuList = res
      })
    },
    goDetail(item) {
      const { type, id, title } = item
      this.showMenu = false
      if (type === 1) {
        this.$router.push({ path: '/serveDetail', query: { id } })
      } else {
        this.$router.push({ path: '/newsList', query: { id, title } })
      }
    },
    // 首页
    goPage(item) {
      this.showMenu = false
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
  header {
  height: 132px;
  box-sizing: border-box;
  background: #609BE9;
  // padding: 18em;

  .headbox {
    box-sizing: border-box;
    padding: 0 40px;
    height: 132px;
    display:flex;
    justify-content: space-between;
  }
  .logo {
    margin-top: 26px;
    height: 80px;
    width: 440px;
  }
  .menuIcon {
    height: 88px;
    width: 88px;
    margin-top: 22px;
  }

  .mask {
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    // height: 100%;
    // width: 100%;

    background: rgba(0,0,0, 0.58);
    // opacity: 0.58;
    z-index: 3;
  }
  .menuList {
    margin-top: 200px;
    width: 940px;
    background: rgba(43,96,165, 0.58) ;
    color: #fff;

    .meunItem {
      box-sizing: border-box;
      padding:40px 120px;
      width: 640px;
      border-bottom: 1px solid #fff;

      li {
        font-size: 64px;
        font-family: Microsoft YaHei;
        font-weight: 300;
        color: #FFFFFF;
        padding-top: 50px;
      }
    }
    .meunItem:last-child {
      border: 0;
    }
    .supName{
      font-size: 76px;
      font-family: Microsoft YaHei;
      font-weight: 300;
      color: #FFFFFF;
    }
  }
}
</style>
