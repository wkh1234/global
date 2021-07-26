<template>
  <div class="container" @scroll.passive="getScroll($event)" >
    <HomeHead />
    <div class="back" @click="back">
      <span>返回</span>
      <img src="@/assets/images/mobile/back.png" alt="">
    </div>
    <div class="title">
        {{title}}
    </div>
    <div class="main" >
      <NewItem v-for='(item, index) in pageData' :key="index" :cardInfo='item'  />
      <div class="more-txt" v-if="isLoading">加载中...</div>
      <div class="no-more" v-if="noMore">没有更多了~</div>
    </div>

    <HomeFooter />
  </div>

</template>

<script>
import HomeHead from '@/components/mobile/head.vue'
import HomeFooter from '@/components/mobile/footer.vue'
import NewItem from '@/components/mobile/newItem.vue'
import { debounce } from '@/utils/util'

import { getArticlepage } from '@/api'


export default {
  name: 'home',
  data () {
    return {
      tablist: [], // 资讯类型
      acviveTab: 1, // 当前资讯类型
      title: '',
      total: 10, // 总页数
      current: 1,
      pageData: [], // 分页数据
      isMoreLoading: false, // 加载更多中
      isLoading : false,
      noMore : false
    }
  },
  components: {
    HomeHead,
    HomeFooter,
    NewItem
  },
  mounted () {
    const { id, title } = this.$route.query
    this.acviveTab = id
    this.title = title
    this.getArticlepage()
  },
  methods: {
    // 获取文章分页数据
    getArticlepage() {
      const params = {
        "pageNum" : this.current,
        "pageSize" : "10",
        "typeId" : this.acviveTab
      }
      getArticlepage(params).then((res) => {
        this.isLoading = false;
        if (res.records.length === 0) {
          this.noMore = true;
          return
        }
        this.total = res.pages
        this.pageData = this.pageData.concat(res.records)
      })
    },

    loadMore:debounce(function(){
    	this.isMoreLoading = true;
      this.isLoading = true;
      this.noMore = false;
      this.current++
      setTimeout(() => {
        this.getArticlepage()
      }, 1000);
   	 },300),

    goDetail (item) {
      this.$router.push({path:'/newsDetail',query: {id:item.id}})
    },
    back () {
      history.back()
    },

    getScroll(event) {
      // 滚动条距离底部的距离scrollBottom
      let scrollBottom =
        event.target.scrollHeight -
        event.target.scrollTop -
        event.target.clientHeight;
        if(scrollBottom < 100 && !this.noMore) {
          this.loadMore()
        }
      // if (this.finished && scrollBottom < 40) {
      //  操作
      // }
    }
  }
}

</script>

<style lang='less' scoped>
  @import './index.less';
</style>
