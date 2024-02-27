import Api from '@/api/baseRequest'
import type { instanceDataType } from '@/views/instance/schema'

const getInstanceList = () => {
  return Api.get('/instance/')
}

const addInstance = (data: instanceDataType) => {
  return Api.post('/instance/', data)
}

const modifyInstance = (data: instanceDataType, id?: number) => {
  return Api.put(`/instance/${id}`, data)
}

const deleteInstance = (id?: number) => {
  return Api.delete(`/instance/${id}`)
}

export { getInstanceList, addInstance, modifyInstance, deleteInstance }
