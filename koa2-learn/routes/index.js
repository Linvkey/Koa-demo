const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  ctx.cookies.set('pvid',Math.random())
  await ctx.render('index', {
    title: 'Hello Koa 2!学习中'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json',
    cookies:ctx.cookies.get('pvid')
  }
})

router.get('/testAsync', async (ctx) => {
  console.log('start', new Date().getTime());
  const a = await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('async a', new Date().getTime());
      resolve('ab')
    }, 1000)
  })
  const b = await Promise.resolve(12)
  const c = await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('async c', new Date().getTime());
      resolve('abccc')
    }, 2000)
  })
  // 相当于在界面上打印
  ctx.body = {
    a, b, c
  }
})

module.exports = router
