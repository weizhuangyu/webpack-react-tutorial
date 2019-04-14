function showType(obj) {
  const objType = Object.prototype.toString.call(obj)
  const reflect = {
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Object]': 'object',
    '[object Array]': 'array',
    '[object Boolean]': 'boolean'
  }
  return reflect[objType]
}
/**
 * 实现深拷贝功能
 * @param {深拷贝对象} obj
 */
function deepClone(obj) {
  let tempObj
  const type = showType(obj)
  if (type === 'number' || type === 'string' || type === 'boolean') {
    tempObj = obj
    return tempObj
  }
  if (type === 'array') {
    tempObj = []
  }
  if (type === 'object') {
    tempObj = {}
  }
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      tempObj[key] = deepClone(obj[key])
    } else {
      tempObj[key] = obj[key]
    }
  }
  return tempObj
}

let obj = {
  a: 10,
  b: 10,
  c: {
    a: 10,
    b: 20
  }
}
const cloneObj = deepClone(obj)
console.log(obj)
console.log(cloneObj)
