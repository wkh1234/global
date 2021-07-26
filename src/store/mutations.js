import * as types from './mutation-types'

  const mutations = {

/*
 * 获取全局配置
*/
 [types.SET_GLOBAL](state, data={}) {
   state.global = data
 }
 }

export default mutations
