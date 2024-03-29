import type { AxiosInstance, AxiosResponse } from 'axios'
import { NotifyPlugin } from 'tdesign-vue-next'

type Result<T> = {
  code: number
  message: string
  result: T
}
export default (request: AxiosInstance) => {
  return request.interceptors.response.use(
    (response: AxiosResponse<Result<any>>): any => {
      const code: number = response.data.code
      if (code !== 20000) {
        NotifyPlugin('warning', { title: '程序异常', content: response.data.message }).then((r) => {
          console.log(r)
        })
      }
      return response.data
    },
    (error): void => {
      let message: string
      switch (error.response.status) {
        case 400:
          message = '请求错误(400)'
          break
        case 401:
          message = '未授权，请重新登录(401)'
          // 这里可以做清空storage并跳转到登录页的操作
          break
        case 403:
          message = '拒绝访问(403)'
          break
        case 404:
          message = '请求出错(404)'
          break
        case 408:
          message = '请求超时(408)'
          break
        case 500:
          message = '服务器错误(500)'
          break
        case 501:
          message = '服务未实现(501)'
          break
        case 502:
          message = '网络错误(502)'
          break
        case 503:
          message = '服务不可用(503)'
          break
        case 504:
          message = '网络超时(504)'
          break
        case 505:
          message = 'HTTP版本不受支持(505)'
          break
        default:
          message = `连接出错(${error.response.status})!`
      }
      NotifyPlugin('error', { title: '标题', content: message }).then((r) => {
        console.log(r)
      })
    }
  )
}
