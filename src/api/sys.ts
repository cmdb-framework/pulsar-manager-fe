import Api from '@/api/baseRequest'
import type { instanceDataType } from '@/views/settings/instance/schema'

const getInstanceList = () => {
  return Api.get('/system/instance/')
}

const addInstance = (data: instanceDataType) => {
  return Api.post('/system/instance/', data)
}

export { getInstanceList, addInstance }
