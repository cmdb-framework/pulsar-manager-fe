import axios from 'axios'
import type { AxiosInstance } from 'axios'
import requestInterceptors from '@/utils/request/requestInterceptors'
import responseInterceptors from '@/utils/request/responseInterceptors'

const request: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_PMB_API as string,
  timeout: 10000
})

requestInterceptors(request)
responseInterceptors(request)

export default request
