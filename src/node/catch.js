let p = new Promise(resolve => {
  throw new Error('custom resolve error!')
  resolve(3)
}).catch(error => {
  console.log('error:', error)
  throw error
})

p.then(result => {
  console.log('success:', result)
}).catch(err => {
  console.log('Custom error:', err)
})
