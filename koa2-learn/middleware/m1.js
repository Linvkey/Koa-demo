function m1(ctx) {
    console.log('m1');
}

module.exports = function (){
    return async function (ctx,next){
        console.log('m1 开始');
        m1(ctx)
        await next()
        console.log('m1 结束');
    }
}