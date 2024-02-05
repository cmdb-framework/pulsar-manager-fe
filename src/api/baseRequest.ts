import request from '@/utils/request'

type Result<T> = {
  code: number
  message: string
  result: T
}
export default class Api {
  static async get(url: string): Promise<Result<any>> {
    const res = await request.get(url)
    return res.data
  }

  static async post(url: string, data: any): Promise<Result<any>> {
    const res = await request.get(url, data)
    return res.data
  }

  static async put(url: string, data: any): Promise<Result<any>> {
    const res = await request.put(url, data)
    return res.data
  }

  static async delete(url: string): Promise<Result<any>> {
    const res = await request.delete(url)
    return res.data
  }
}
