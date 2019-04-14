function getQuery(url, name) {
  const reg = /[?|&][^=?&]+=[^?#&]*/gi
  const res = url.match(reg)
  const resObj = res.reduce((pre, next) => {
    const queryObject = next.substring(1).split('=')
    pre[queryObject[0]] = decodeURIComponent(queryObject[1])
    return pre
  }, {})
  if (name) return resObj[name]
  return resObj
}
console.log(getQuery('www.baidu.com?a=20&b=30', 'a'))
