<template>
  <div class="container">
    <HomeHead />
    <!-- <Navlist /> -->
    <!-- banner -->
    <div class="banner">
      <swiper :options="swiperOption" ref="mySwiper" v-if="bannerList.length">
        <swiper-slide v-for="(item, index) in bannerList" :key="index" >
          <img :src="item.thumbUrl" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!-- 服务项目 -->
    <div class="servie">
        <div class="title">
          <div class="titleName">服务项目</div>
        </div>
        <div class="mainbox">
          <div class="cardline">
            <div class="serveItem" v-for='(item, index) in serveList' :key="index" v-if="index < 3" @click="goDetail(item)">
              <img :src="item.iconUrl" alt="">
              <div class="serveTitle">{{item.title}}</div>
            </div>
          </div>
          <div class="cardline">
            <div class="serveItem" v-for='(item, index) in serveList' :key="index" v-if="index > 2" @click="goDetail(item)">
              <img :src="item.iconUrl" alt="">
              <div class="serveTitle">{{item.title}}</div>
            </div>
          </div>
        </div>
    </div>
    <!-- 行业新闻 -->
    <div class="news">
        <div class="title">
          <div class="titleName">{{tablist[0] && tablist[0].title}}</div>
          <span class="more" @click="goMore(tablist[0])">查看全部</span>
        </div>
        <div class="mainBox">
          <div class="newsline">
            <NewItem v-for='(item, index) in healthList' :key="index" :cardInfo='item'  />
          </div>
        </div>
    </div>
    <!-- 健康科普 -->
    <div class="news">
        <div class="title">
          <div class="titleName">{{tablist[1] && tablist[1].title}}</div>
          <span class="more" @click="goMore(tablist[1])">查看全部</span>
        </div>
        <div class="mainBox">
          <div class="newsline">
            <NewItem v-for='(item, index) in newsList' :key="index" :cardInfo='item'  />
          </div>
        </div>
    </div>
    <!-- 合作伙伴 -->
    <div class="partner">
      <div class="title">
        <div class="titleName">合作企业</div>
      </div>
      <div class="partBox">
        <img :src="global.partner && global.partner.imageUrl" alt="">
      </div>
    </div>
    <HomeFooter />

  </div>

</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import NewItem from '@/components/mobile/newItem.vue'
import HomeHead from '@/components/mobile/head.vue'
import HomeFooter from '@/components/mobile/footer.vue'

import { getBanner, getServeList, getArticleDefault, getArticleType } from '@/api'
import {mapGetters} from 'vuex'
let vm = null

export default {
  name: 'home',
    components: {
    Swiper,
    SwiperSlide,
    NewItem,
    HomeHead,
    HomeFooter,
  },
  data () {
    return {
      swiperOption: {
      // API
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable :true
        // },
        initialSlide: 0,
        on:{
          click: function(){
            const item = vm.bannerList[this.realIndex]
            open(item.linkUrl)
          },
        },
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
        loop: true,
        autoplay: {
          disableOnInteraction: false,
          delay: 4000,
        },
      },
      bannerList:[],
      serveList:[],
      articleList: [], //
      newsList:[], // 新闻
      healthList:[], // 健康科普
      tablist:[], // 类型
    }
  },
  computed:{
    ...mapGetters([
      'global'
   ])
  },
  mounted () {
    this.getBanner()
    this.getServeList()
    this.getArticleDefault()
    this.getArticleType()
  },
  created () {
    vm = this;
  },
  methods: {
    // 获取banner信息
    getBanner() {
      const params = {
        position: 1
      }
      getBanner(params).then((res) => {
        this.bannerList = res
      })
    },
    // 获取服务列表
    getServeList() {
      getServeList({}).then((res) => {
        this.serveList = res
      })
    },
    // 获取服务列表
    getArticleDefault() {
      getArticleDefault({}).then((res) => {
         for (var i=0;i<res.length;i++) {
           if (res[i].type.id === 1) {
             this.newsList = res[i].articles
           } else {
             this.healthList = res[i].articles
           }
         }
        this.articleList = res
      })
    },
    // 获取文章类型
    getArticleType() {
      getArticleType({}).then((res) => {
        this.tablist = res
      })
    },
    goMore(item) {
      const { id, title } = item
      // console.log(id)
      this.$router.push({ path: '/newsList', query: {id, title} })
    },
    // 服务详情
    goDetail (item) {
      const { id, title } = item
      this.$router.push({ path: '/serveDetail', query: { id } })
    }
  }
}

</script>

<style lang='less' scoped>
  @import './index.less';
</style>
