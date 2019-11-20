// 封装功能函数 || 组件的核心思想， 函数 || 组件内部保留固定不变的代码，动态的数据作为参数 || props数据
/*
* 异步回调
*   1. 异步任务不确定什么执行成功
*   2. 执行成功的动作我们控制不了
* 解决异步回调：
*   promise：
*     核心思想： 利用promise实例对象的状态切换来控制异步任务, 状态： 1. 初始化pending， 2. 成功resolved， 3. 失败rejected
*     流程：
*       1. new Promise() ---> 生成实例promise实例 --> 状态为pending
*       2. 在promise的执行器函数中执行异步任务（发送请求）
*       3. 根据异步任务的结果来修改promise的状态
*       4. resolve-->成功， reject ---> 失败状态
*       5. 当状态发生改变的时候会自动调用实例对象then方法的成功或者失败的回调
*   async + await
*     1. 语义化：
*       1. async异步函数
*       2. await等待异步的结果， await后边跟异步任务
*     2. 通常和promise配合使用， 要求await后边的异步任务返回一个promise实例
*     3. 当promise实例的状态发生改变的时候会自动通知await
*     4. 当异步任务的promise的resolve调用，传入的参数数据会作为当前await语句的返回值
*
*
*
*
*
* */

import config from './config'
export default (url, data={}, method='GET') => {
  return new Promise((resolve, reject) => {
    wx.request({
      method,
      url: config.host  + url,
      data,
      success: (res) => {
        resolve(res.data)
      },
      fail: () => {
        console.log('请求失败');
      }
    })
  })
  
}