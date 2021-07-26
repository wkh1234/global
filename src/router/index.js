import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/pc/home'
import AboutUs from '@/pages/pc/aboutUs'
import ServeDetail from '@/pages/pc/serveDetail'
import NewsList from '@/pages/pc/news/newList.vue'
import NewsDetail from '@/pages/pc/newsDetail'
import Notfind from '@/pages/pc/notfind.vue'

import mbHome from '@/pages/mobile/home'
import mbAboutUs from '@/pages/mobile/aboutUs'
import mbServeDetail from '@/pages/mobile/serveDetail'
import mbNewsList from '@/pages/mobile/newsList'
import mbNewsDetail from '@/pages/mobile/newsDetail'
// utils
import { judgePC } from '@/utils/util'

Vue.use(Router)
const isPc = judgePC()

const pcRouter = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/aboutUs',
    name: 'AboutUs',
    component: AboutUs,
  },
  {
    path: '/serveDetail',
    name: 'ServeDetail',
    component: ServeDetail,
  },
  {
    path: '/newsList',
    name: 'NewsList',
    component: NewsList,
  },
  {
    path: '/newsDetail',
    name: 'NewsDetail',
    component: NewsDetail,
  },
  {
    path: '/404',
    name: 'Notfind',
    component: Notfind,
  },
  {
    path: "*",
    redirect: '/404'
  }

]

const mbRouter = [
  {
    path: '/',
    name: 'Home',
    component: mbHome,
  },
  {
    path: '/aboutUs',
    name: 'AboutUs',
    component: mbAboutUs,
  },
  {
    path: '/serveDetail',
    name: 'ServeDetail',
    component: mbServeDetail,
  },
  {
    path: '/newsList',
    name: 'NewsList',
    component: mbNewsList,
  },
  {
    path: '/newsDetail',
    name: 'NewsDetail',
    component: mbNewsDetail,
  },
]

const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  routes: isPc ? pcRouter : mbRouter,
  // mode: 'history',
})
