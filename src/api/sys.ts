import Api from '@/api/baseRequest'

const getInstanceList = () => {
  return Api.get('/system/instance/')
}

export { getInstanceList }
