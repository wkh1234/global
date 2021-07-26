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
    <div class="title">
      <div class="text">{{info.title}}</div>
    </div>
    <div class="time">
      <span class="text">{{info.updateTime}}</span>
    </div>
    <div class="main">
      <div v-if='info.detail' v-html="info.detail.content" style="white-space: pre-line;"></div>
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
import DetailFooter from '@/components/pc/detailFooter.vue'
import Totop from '@/components/pc/topTop.vue'

import { getArticleDetail } from '@/api'

export default {
  name: 'newsDetail',
  data () {
    return {
      info: {}
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
    this.getArticleDetail()
  },
  methods: {
    // 获取详情信息
    getArticleDetail() {
      const params = {
        id: this.$route.query.id
      }
      getArticleDetail(params).then((res) => {
        this.info = res
      })
    },
    back () {
      history.back()
    },
  }
}

</script>

<style lang='less' scoped>
  @import './index.less';
</style>
