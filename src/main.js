// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import '@/common/styles/reset.css'
import '@/common/styles/pc.css'
import "swiper/css/swiper.css";
import store from './store'
import MintUI from 'mint-ui'

Vue.use(MintUI)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
