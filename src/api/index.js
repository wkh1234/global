import { httpJSONPost, httpGet } from '@/utils/httpService'

// banner
export const getBanner = (data) => {
  return httpGet('/banner/get', data)
}
// getHeader
export const getHeader = (data) => {
  return httpGet('/header/get', data)
}
// 全部配置
export const getAll = (data) => {
  return httpGet('/config/all', data)
}
// 关于我们
export const getAbout = (data) => {
  return httpGet('/config/get/about', data)
}
// 联系我们
export const getContract = (data) => {
  return httpGet('/config/get/contract', data)
}
// 加入我们
export const getJoin = (data) => {
  return httpJSONPost('/config/get/join', data)
}
// 下载app
export const getDownload = (data) => {
  return httpGet('/config/get/download ', data)
}
// 合作伙伴
export const getPartner = (data) => {
  return httpGet('/config/get/partner', data)
}
// 服务列表
export const getServeList = (data) => {
  return httpGet('/service/all', data)
}
// 服务详情
export const getServeDetail = (data) => {
  return httpGet('/service/one', data)
}
// 首页文章列表
export const getArticleDefault = (data) => {
  return httpGet('/article/default', data)
}
// 获取文章类型
export const getArticleType = (data) => {
  return httpGet('/article/type/get', data)
}
// 文章分页列表
export const getArticlepage = (data) => {
  return httpJSONPost('/article/page', data)
}
// 文章详情
export const getArticleDetail = (data) => {
  return httpGet('/article/detail', data)
}
