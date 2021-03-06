const Koa = require('koa')
const path = require('path')
const view = require('./koa-view')

// 初始化一个`Koa`实例 `let app = new Koa()`
const app = new Koa()

// 将需要的属性或者方法 `view` 挂载在 `app.context` 上，`app.context.view`
view(app, {
  baseDir: path.join(__dirname, './views')
})

app.use(async ctx => {
  console.log(ctx.request.query)
  await ctx.view(`${ctx.path}`, {
    title: 'index page'
  })
})

app.listen(3000, () => {
  console.log('[demo] jsonp is starting at port 3000')
})
