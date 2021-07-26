import axios from 'axios'

const BUILD_ENV = process.env.BUILD_ENV || ''
// const NODE_ENV = process.env.NODE_ENV || ''

let baseUrl = '/webapi'
// 线上环境必须使用https
if (BUILD_ENV === 'camera') {
  baseUrl = 'https://ucapi-1.xdf.cn/eva/api/collections'
}
const httpService = axios.create({
  baseURL: baseUrl,
  timeout: 120000 // 请求超时时间,
})
httpService.defaults.withCredentials = true


// request拦截器
httpService.interceptors.request.use(config => {
  return config
}, error => {
  console.log(error)
  return Promise.reject(error)
})

// respone拦截器
httpService.interceptors.response.use(
  response => {
    if (response.headers['shared-config'] || response.headers['SHARED-CONFIG']) { // 灰度标识, 大小写兼容
      window.grayVersionFlag = true
    }
    return response.data.data
  },
  error => {
    // 请求超时
    return Promise.reject(error)
  }
)

/**
 * 统一的POST请求和相关数据适配
 * @param url
 * @param data
 * @param specialTransformForComplex 特殊复合题转单题
 * @returns {Promise<AxiosResponse<any>>}
 */
export const httpJSONPost = (url, data = {}, specialTransformForComplex = true) => {
  return httpService({
    url,
    method: 'post',
    data: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  }).then(resp => {
    if (resp && resp.itemAndAnswer) {
      return adaptQuestionInfo(resp, specialTransformForComplex)
    } else {
      return resp
    }
  })
}

/**
 * 统一的get请求
 * @param url
 * @param data
 * @returns {Promise<AxiosResponse<any>>}
 */
export const httpGet = (url, data = {}) => {
  return httpService({
    url,
    method: 'get',
    params: data
  }).then(resp => {
    return resp
  })
}
export default httpService
