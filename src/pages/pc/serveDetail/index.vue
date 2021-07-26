<template>
  <div class="container">
    <HomeHead />
    <Navlist />
    <div class="back">
      <div class="backpoint" @click="back">
        <span>返回</span>
        <img src="@/assets/images/home/back.png" alt="">
      </div>
    </div>
    <div class="main">
      <div class="title">
        <div class="text">{{info.title}}</div>
      </div>
      <div class="line"></div>
      <div class="content" v-html="info.detail" style="white-space: pre-line;"></div>


    </div>
    <HomeFooter />
    <DetailFooter />

    <!-- 锚点 -->
    <Totop />
  </div>

</template>

<script>
import HomeHead from '@/components/pc/head.vue'
import Navlist from '@/components/pc/navlist.vue'
import HomeFooter from '@/components/pc/footer.vue'
import Totop from '@/components/pc/topTop.vue'
import DetailFooter from '@/components/pc/detailFooter.vue'
// api
import { getServeDetail } from '@/api'

export default {
  name: 'home',
  data () {
    return {
      info:{}
    }
  },
  components: {
    Navlist,
    HomeHead,
    HomeFooter,
    DetailFooter,
    Totop
  },
  mounted () {
    this.getServeDetail()
  },
  methods: {
    // 获取详情信息
    getServeDetail() {
      const params = {
        id: this.$route.query.id
      }
      getServeDetail(params).then((res) => {
        this.info = res
      })
    },
    back () {
      history.back()
    }
  }
}

</script>

<style lang='less' scoped>
  @import './index.less';
</style>
