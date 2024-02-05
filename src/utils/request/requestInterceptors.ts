import type { AxiosInstance } from 'axios'
import { NotifyPlugin } from 'tdesign-vue-next'

export default (request: AxiosInstance) => {
  return request.interceptors.request.use(
    (config) => {
      return config
    },
    (error) => {
      NotifyPlugin('error', { title: '异常', content: '前端发起请求异常' }).then((r) => {
        console.log(r)
      })
      return Promise.reject(error)
    }
  )
}
