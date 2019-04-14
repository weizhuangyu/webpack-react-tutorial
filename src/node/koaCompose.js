function compose(middleWares) {
  if (!Array.isArray(middleWares)) {
    throw new TypeError('中间件必须是数组')
  }

  return function(ctx, next) {
    function dispatch(i) {
      let fn = middleWares[i]
      if (i === middleWares.length) {
        fn = next
      }
      if (!fn) {
        return Promise.resolve()
      }
      try {
        return Promise.resolve(
          fn(ctx, () => {
            return dispatch(i + 1)
          })
        )
      } catch (err) {
        return Promise.reject(err)
      }
    }
    return dispatch(0)
  }
}

let middleware = []
let context = {
  data: []
}

middleware.push(async (ctx, next) => {
  console.log('action 001')
  ctx.data.push(1)
  await next()
  console.log('action 006')
  ctx.data.push(6)
})

middleware.push(async (ctx, next) => {
  console.log('action 002')
  ctx.data.push(2)
  await next()
  console.log('action 005')
  ctx.data.push(5)
})

middleware.push(async (ctx, next) => {
  console.log('action 003')
  ctx.data.push(3)
  await next()
  console.log('action 004')
  ctx.data.push(4)
})

const fn = compose(middleware)
fn(context).then(() => {
  console.log('end')
  console.log('context = ', context)
})
