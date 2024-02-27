import Api from '@/api/baseRequest'
import type { instanceDataType } from '@/views/instance/schema'

const getInstanceList = () => {
  return Api.get('/system/instance/')
}

const addInstance = (data: instanceDataType) => {
  return Api.post('/system/instance/', data)
}

const modifyInstance = (data: instanceDataType, id?: number) => {
  return Api.put(`/system/instance/${id}`, data)
}

const deleteInstance = ( id?: number) => {
  return Api.delete(`/system/instance/${id}`)
}

export { getInstanceList, addInstance, modifyInstance,deleteInstance }
