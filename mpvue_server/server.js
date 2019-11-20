let Koa = require('koa')
let KoaRouter = require('koa-router');

// 1. 生成实例
const app = new  Koa();
// 路由器
const router = new KoaRouter()



// express
// router.get('/test', (req, res, next) => {
//   // req: request 包含了所有的请求信息
//   // res: response 通过res设置响应信息 res.headers, res.send()
// });

// 注册路由

router.get('/test', (ctx, next) => {
  let xxx = ctx.query.xxx;
  console.log(xxx);
  // 返回数据
  ctx.body = '服务器返回的内容333'
});

let datas = require('./datas/data.json');
console.log(typeof datas);
// 注册搜索图书的接口
router.get('/searchBooks', (ctx, next) => {
  // 1. 获取请求参数
  let req = ctx.query.req;
  console.log(req);
  if(req){
    // 2. 处理请求数据
    let booksArr = datas;
    // 3. 返回响应数据
    ctx.body = booksArr
  }else {
    ctx.body = {code: 1, data: '请输入有效的参数'}
  }
 
});

// 安装路由器
app
  .use(router.routes()) // 声明使用路由的方法
  .use(router.allowedMethods()) // 声明使用路由器的方法


// 监听端口号
app.listen('3000', () => {
  console.log('服务器启动成功');
  console.log('服务器地址： http://localhost:3000');
})
