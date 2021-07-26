import { getAll } from '@/api'
import * as types from './mutation-types'
/**
 * 获取全局配置
 * @param context：与 store 实例具有相同方法和属性的 context 对象
 * @param Object：需管理的数据
 */
export function getGlobalSync (context) {
  getAll({}).then((res) => {
    let obj = {}
    for (var i=0;i<res.length;i++) {
        if (res[i].id === 1) {
          obj.aboutUs = res[i]
        }
        if (res[i].id === 2) {
          obj.contact = res[i]
        }
        if (res[i].id === 3) {
          obj.jion = res[i]
        }
        if (res[i].id === 4) {
          obj.download = res[i]
        }
        if (res[i].id === 5) {
          obj.partner = res[i]
        }
        if (res[i].id === 6) {
          obj.compinfo = res[i]
        }
    }
    context.commit(types.SET_GLOBAL,obj)
  })
 }
