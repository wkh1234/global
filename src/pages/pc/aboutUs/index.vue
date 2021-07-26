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
    <div class="main" v-html="info.content" style="white-space: pre-line;"></div>

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
import { getAbout } from '@/api'


export default {

  name: 'home',
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
    this.getAbout()
  },
  methods: {
    // 获取详情信息
    getAbout() {
      getAbout({}).then((res) => {
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
