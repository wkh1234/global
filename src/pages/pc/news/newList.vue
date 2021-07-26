<template>
  <div class="container">
    <HomeHead />
    <Navlist />
    <div class="tabBox">
      <div class="tabCtx" :class="acviveTab === (tablist[0] && tablist[0].id) ? 'leftTab' : 'rightTab' ">
        <div class="tabItem"
          :class="acviveTab === item.id ? 'active' : '' "
          v-for='(item, index) in tablist'
          :key="index"
          @click="tabChange(item.id)"
        >
          {{item.title}}
        </div>
       </div>
    </div>
    <div class="main">
      <div :class="index === 0 && 'firstItem'" v-for='(item, index) in pageData' :key="index"  >
        <div class="newsItem" @click="goDetail(item)">
          <img class="mainpic" :src="item.thumbUrl" alt="">
          <div class="right">
            <div class="title"> {{item.title}}</div>
            <div class="concent">{{item.remarks}}</div>
            <div class="time">
              <img class="olock" src="@/assets/images/home/time.png" alt="">
              <span>{{item.updateTime}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pageChage">
      <pagination :current="current" :total="total" @changePage="changePage"></pagination>
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
import pagination from "@/components/pc/pagenation.vue"
// api
import { getArticleType, getArticlepage } from '@/api'

export default {
  name: 'home',
  data () {
    return {
      tablist: [], // 资讯类型
      acviveTab: 1, // 当前资讯类型
      total: 10, // 总页数
      current: 1,
      pageData: [], // 分页数据

    }
  },
  components: {
    Navlist,
    HomeHead,
    HomeFooter,
    DetailFooter,
    Totop,
    pagination
  },
  mounted () {
    this.getArticleType()
  },
  methods: {
    // 分页
    changePage (current) {
      this.current = current
      this.getArticlepage()
    },
    tabChange (index) {
      this.acviveTab = +index
      this.current = 1
      this.getArticlepage()
    },
    // 获取文章类型
    getArticleType() {
      getArticleType({}).then((res) => {
        this.tablist = res
        this.acviveTab = this.$route.query.id || res[0] && res[0].id
        this.tabChange(this.acviveTab)
      })
    },

    // 获取文章分页数据
    getArticlepage() {
      const params = {
        "pageNum" : this.current,
        "pageSize" : "10",
        "typeId" : this.acviveTab
      }
      getArticlepage(params).then((res) => {
        this.total = res.pages
        this.pageData = res.records
      })
    },

    goDetail (item) {
      this.$router.push({path:'/newsDetail',query: {id:item.id}})
    },

    back () {
      history.back()
    }
  }
}

</script>

<style lang='less' scoped>
  @import './newList.less';
</style>
