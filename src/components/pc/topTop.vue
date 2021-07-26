<template>
    <div style="scroll-behavior: smooth;">
    <!-- // scroll-behavior: smooth : 平滑滚动 一定要写  不然锚点很生硬
    // 但如果是用饿了么那样用js实现，就不需要这个样式的帮助 -->
        <div v-show="iftop" class="totop" @click="toTop">
            <img src="@/assets/images/home/point.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'totop',
    data () {
      return {
        iftop: false
      }
    },
    mounted() { //监听scroll方法
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy() { //及时释放
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            this.iftop = window.pageYOffset > 400 ? true : false
        },
        toTop() {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                let step = 50

                // 实现滚动效果
                const timer = setInterval(() => {
                    scrollTop -= step;
                    document.body.scrollTop = scrollTop;
                    document.documentElement.scrollTop = scrollTop;

                    if (scrollTop <= 0) {
                        clearInterval(timer);
                    }
                }, 10);
        }
    }
}
</script>
<style scoped lang='less'>
.totop {
  cursor: pointer;
  bottom:2.2em;
  right: 1.2em;
  position: fixed;
  height: 5.5em;
  width: 5.5em;

  img {
    height: 5.5em;
    width: 5.5em;
  }
}
</style>
