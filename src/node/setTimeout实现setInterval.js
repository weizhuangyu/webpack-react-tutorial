var mySetInterval = function(fn, time) {
  function timeout() {
    const callee = arguments.callee
    setTimeout(function() {
      fn()
      callee()
    }, time)
  }
  timeout()
}
let count = 0
mySetInterval(() => {
  console.log(count++)
}, 1000)
