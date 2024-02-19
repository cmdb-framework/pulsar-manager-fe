import Api from '@/api/baseRequest'
import type { LoginSchema } from '@/views/login/schema'

const userLogin = (data: LoginSchema) => {
  return Api.post('/user/login/', data)
}

export {userLogin}
