const router = require('koa-router')()

const Redis = require('koa-redis')

const Person = require('../dbs/models/person.js')

const Store = new Redis().client

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})


router.get('/fix', async function (ctx) {
  const st = await Store.hset('fix', 'name', Math.random())
  ctx.body = {
    code: 0
  }
})
//get下面是require
//post是 request
//添加
router.post('/addPerson', async function (ctx) {
  const person = new Person({
    name: ctx.request.body.name,
    age: ctx.request.body.age
  })
  let code;
  try {
    await person.save()
    code = 0
  } catch (e) {
    code = -1
  }
  ctx.body = {
    code
  }
})
//查询
router.post('/getPerson', async function (ctx) {
  const result = await Person.findOne({
    name: ctx.request.body.name
  })
  const results = await Person.find({
    name: ctx.request.body.name
  })
  ctx.body = {
    result, results
  }
})

//修改
router.post('/updatePerson', async function (ctx) {
  const result = await Person.where({
    name: ctx.request.body.name
  }).update({
    age: ctx.request.body.age
  })
  ctx.body = {
    code: 0
  }
})

//删除
router.post('/removePerson', async function (ctx) {
  const result = await Person.where({
    name: ctx.request.body.name
  }).remove()
  ctx.body = {
    code: 0
  }
})


module.exports = router
