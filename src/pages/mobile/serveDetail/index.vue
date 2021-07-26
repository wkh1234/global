<template>
  <div class="container">
    <HomeHead />
    <div class="back" @click="back">
      <span>返回</span>
      <img src="@/assets/images/mobile/back.png" alt="">
    </div>
    <div class="title">
        {{info.title}}
    </div>
    <div class="main">
       <div class="content" v-html="info.detail" style="white-space: pre-line;"></div>
    </div>

    <HomeFooter />
  </div>

</template>

<script>
import HomeHead from '@/components/mobile/head.vue'
import HomeFooter from '@/components/mobile/footer.vue'
import { getServeDetail } from '@/api'


export default {

  name: 'home',
  data () {
    return {
      info: {}
    }
  },
  components: {
    HomeHead,
    HomeFooter,
  },
  mounted () {
    this.getServeDetail()
  },
  methods: {
    // 获取详情信息
    getServeDetail() {
      const params = {
        id: this.$route.query.id || 1
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
