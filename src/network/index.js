import axios from 'axios'

//登录
export function instance1(config) {
  //创建axios实例
  const instance = axios.create({
    //将一样的请求头剥离
    baseURL: 'http://127.0.0.1:8060',
    //请求超时时间
    // timeout: 10000,
    //携带cookie
    withCredentials: true,
    //将post请求设置为表单提交
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  })
  //发送真正得网络请求,这里then和catch不能直接在这里处理，应该把它们发出去
  return instance(config)

}
// 七牛云上传图片网络请求
export function instance2(config) {
  //创建axios实例
  const instance = axios.create({
    headers: { 'Content-Type': 'multipart/form-data' }
  })
  //发送真正得网络请求,这里then和catch不能直接在这里处理，应该把它们发出去
  return instance(config)

}
// 普通请求
export function instance3(config) {

  //创建axios实例
  const instance = axios.create({
    //将一样的请求头剥离
    baseURL: 'http://127.0.0.1:8060',
    //携带cookie
    withCredentials: true
  })
  //发送真正得网络请求,这里then和catch不能直接在这里处理，应该把它们发出去
  return instance(config)

}
// export function instance1(config) {
//   return new Promise((resolve, reject) => {
//     //创建axios实例
//     const instace = axios.create({
//       baseURL: 'http://127.0.0.1:8080',
//       timeout: 10000
//     })

//     //发送真正得网络请求,这里then和catch不能直接在这里处理，应该把它们发出去
//     instace(config).then(res => {
//       resolve(res)
//     }).catch(err => {
//       reject(err)
//     })

//   })
// }