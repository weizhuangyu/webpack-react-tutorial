const Koa = require('koa')
const static = require('koa-static')
const fs = require('fs')
const logger = require('./middleWare/koa-logger')
const app = new Koa()
const path = require('path')
const { basename, extname } = path

app.use(logger)

app.use(static(__dirname + '/../../public'))

app.use(async (ctx, next) => {
  let filePath = path.join('../../public', ctx.path)
  filePath = path.join(__dirname, filePath)
  console.log('filePath----' + filePath)
  // __dirname永远是指向文件运行所在的目录路径
  // path.resolve指向命令执行的路径
  console.log('extname----' + extname('baidu'))
  console.log('path.resolve()-----', path.resolve('aaa', '../mmm'))
  console.log('__dirname-----', __dirname)
  console.log(basename(filePath, '.html'))
  const data = fs.readFileSync(filePath)
  const dataString = data.toString()
  ctx.response.set('Content-Type', 'text/html')
  ctx.body = dataString
})

app.listen(3000, () => {
  console.log('[demo] is starting at port 3000')
})
