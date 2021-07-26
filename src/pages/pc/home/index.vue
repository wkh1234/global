<template>
  <div class="container">
    <HomeHead />
    <Navlist />
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
        <div class="cardBox">
          <div class="cardline">
            <CardItem v-for='(item, index) in serveList' :key="index" v-if="index < 3" :cardInfo='item'  />
          </div>
          <div class="cardline">
            <CardItem v-for='(item, index) in serveList' :key="index" v-if="index > 2" :cardInfo='item'  />
          </div>
        </div>
    </div>
    <!-- 资讯动态 -->
    <div class="news">
        <div class="title">
          <div class="titleName">资讯动态</div>
          <span class="more" @click="goMore">更多</span>
        </div>
        <div class="cardBox">
          <div class="newsline">
            <NewItemBig v-for='(item, index) in newsList' :key="index" v-if="index < 1" :cardInfo='item' @click="goDetail (item)" />
            <NewItem v-for='(item, index) in newsList' :key="index" v-if="index > 0" :cardInfo='item'  @click="goDetail (item)"/>
          </div>
          <div class="newsline">
            <NewItemBig v-for='(item, index) in healthList' :key="index" v-if="index < 1" :cardInfo='item'  @click="goDetail (item)"/>
            <NewItem v-for='(item, index) in healthList' :key="index" v-if="index > 0" :cardInfo='item'  @click="goDetail (item)"/>
          </div>
        </div>
    </div>
    <!-- 合作伙伴 -->
    <div class="partner">
      <div class="title">
        <div class="titleName">合作伙伴</div>
      </div>
      <div class="partBox">
        <img :src="global.partner && global.partner.imageUrl" alt="">
      </div>
    </div>
    <HomeFooter />

  <!-- 锚点 -->
  <Totop />

  </div>

</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import CardItem from '@/components/pc/cardItem.vue'
import NewItemBig from '@/components/pc/newItemBig.vue'
import NewItem from '@/components/pc/newItem.vue'
import HomeHead from '@/components/pc/head.vue'
import Navlist from '@/components/pc/navlist.vue'
import HomeFooter from '@/components/pc/footer.vue'
import Totop from '@/components/pc/topTop.vue'

import { getBanner, getServeList, getArticleDefault } from '@/api'
import {mapGetters} from 'vuex'

let vm = null
export default {
  name: 'home',
    components: {
    Swiper,
    SwiperSlide,
    CardItem,
    NewItemBig,
    NewItem,
    Navlist,
    HomeHead,
    HomeFooter,
    Totop
  },
  data () {
    return {
      swiperOption: {
      // API
        pagination: {
          el: '.swiper-pagination',
          clickable :true
        },
        initialSlide: 0,
        on:{
          click: function(e){
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
    goMore() {
      this.$router.push({ path: '/newsList', query: {} })
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
