const Koa = require('koa')
const Router = require('./koa-router')
const app = new Koa()

// 初始化路由实例
const router = new Router()

// 注册路由请求信息缓存到实例中
router.get('/index', async (ctx, next) => {
  console.log(222222)
  ctx.body = 'index page'

  console.log(4444444)
  next()
  console.log(333333)
})
router.get('/post', async ctx => {
  ctx.body = 'post page'
})
router.get('/list', async ctx => {
  ctx.body = 'list page'
})
router.get('/item', async ctx => {
  ctx.body = 'item page'
})

// 路由实例输出父中间件 router.routes()
app.use(router.routes())

app.use(async ctx => {
  console.log(11111111)
  ctx.body = '404'
})

app.listen(3000)
console.log('listening on port 3000')
