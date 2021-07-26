<!--
 * @Description: 封装分页组件
 -->
<template>
  <div class="page-wrap">
    <ul>
      <li class="li-page pre" @click="goPrePage"><img src="@/assets/images/home/leftarrow.png" alt=""></li>
      <li v-for="(i, index) in showPageBtn" :key="index"
        :class="{active: i === currentPage, pointer: i, hover: i && i !== currentPage}" @click="pageOffset(i)">
        <a v-if="i">{{i}}</a>
        <a v-else>···</a>
      </li>
      <li class="li-page" @click="goNextPage">
        <img src="@/assets/images/home/leftarrow.png" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "pagination",
    props: {
      current: Number,
      total: Number
    },
    data: () => ({
      offset: 0
    }),
    mounted () {
      console.log(this.totalPage)
    },
    computed: {
      prePage() {
        return this.current > 1;
      },
      nextPage() {
        return this.total > this.current
      },
      totalPage() {
        return this.total
      },
      currentPage() {
        return this.current
      },
      showPageBtn() {
        const pageNum = this.totalPage;
        const index = this.currentPage;
        if (pageNum <= 5) return [...new Array(pageNum)].map((v, i) => i + 1);
        if (index <= 2) return [1, 2, 3, 0, pageNum];
        if (index >= pageNum - 1) return [1, 0, pageNum - 2, pageNum - 1, pageNum];
        if (index === 3) return [1, 2, 3, 4, 0, pageNum];
        if (index === pageNum - 2) return [1, 0, pageNum - 3, pageNum - 2, pageNum - 1, pageNum];
        return [1, 0, index - 1, index, index + 1, 0, pageNum]
      }
    },
    methods: {
      pageOffset(i) {
        if (i === 0 || i === this.currentPage) return;
        this.$emit('changePage', i);
      },
      goPrePage() {
        if (!this.prePage && this.currentPage  < 2) {
          return;
        }
        const num = this.currentPage - 1

        this.$emit('changePage', num);
      },
      goNextPage() {
        // console.log(this.offset,this.total ,this.current)
        if (!this.nextPage && this.currentPage  === this.total) {
          return;
        }
        const num = this.currentPage + 1
        this.$emit('changePage', num);
      }
    }
  }

</script>

<style scoped>

.page-wrap {
  /* line-height: 1em; */
  line-height: 1.4em;
  height: 4em;
}
  .li-page {
    height: 2em;
    /* line-height: 1.9em; */
    cursor: pointer;
    margin: 0.3em;
  }
  .pre img{
      transform: rotate(180deg)
      }
  .active {
    border-color: #2264A8;
    background-color: #2264A8;
    color: #FFF;
  }

  .pointer {
    cursor: pointer;
  }

  /* .hover {
    color: #FFF;
    background-color: #f4f4f5;
  } */

  .active a {
    color: #FFF;
  }

  .page-wrap ul {
    display: inline-block;
    list-style: none;
    padding-inline-start: 0px;
  }

  .page-wrap li {
    float: left;
    color: #2264A8;
    height: 1.4em;
    width: 1.4em;
    border-radius: 0.7em;
    font-size: 0.9em!important;
    margin:0 0.3em;
  }

</style>
