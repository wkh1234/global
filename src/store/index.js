import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
    state:{
      //存放的键值对就是所要管理的状态
      global:[]
    },
    actions,
    getters,
    mutations,
})

export default store
