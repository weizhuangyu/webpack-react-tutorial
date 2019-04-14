const path = require('path')
const fs = require('fs')

function view(app, opts = {}) {
  const { baseDir = '' } = opts

  // 将需要的属性或者方法 `view` 挂载在 `app.context` 上，`app.context.view`
  app.context.view = function(page = '', obj = {}) {
    console.log(page)
    if (page === '/') page = 'index.html'
    let ctx = this
    let filePath = path.join(baseDir, page)
    console.log(filePath)
    if (fs.existsSync(filePath)) {
      let tpl = fs.readFileSync(filePath).toString()
      if (obj.title) {
        ctx.title = obj.title
      }
      ctx.body = tpl
    } else {
      ctx.throw(404)
    }
  }
}

module.exports = view
