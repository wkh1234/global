export function getUrlParam (key, url) {
  var regex = new RegExp(`[?&]${key}=([^&]*)(&|$)`)
  const targetUrl = url || location.search
  var result = targetUrl.match(regex)
  if (result) {
    return decodeURIComponent(result[1])
  } else {
    return ''
  }
}

export function  judgePC () {
  const userAgentInfo = navigator.userAgent
  const reg = /(phone|pad|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows phone)/i
  const flag = !userAgentInfo.match(reg)
  return flag
}
export function debounce(fn, delay) {
  // 记录上一次的延时器
  var timer = null;
  var delay = delay || 200;
  return function() {
    var args = arguments;
    var that = this;
    // 清除上一次延时器
    clearTimeout(timer)
    timer = setTimeout(function() {
        fn.apply(that,args)
    }, delay);
  }
}
