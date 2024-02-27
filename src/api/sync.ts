import Api from '@/api/baseRequest'

const syncTN = async (ids :string) => {
  return Api.get("/sync/tn?ids=" + ids)
}

export { syncTN }
