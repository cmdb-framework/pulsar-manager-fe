import request from '@/utils/request'

export default class Api {
  static async get(url: string): Promise<any> {
    return await request.get(url)
  }

  static async post(url: string, data: any): Promise<any> {
    return await request.get(url, data)
  }

  static async put(url: string, data: any): Promise<any> {
    return await request.get(url, data)
  }

  static async delete(url: string): Promise<any> {
    return await request.delete(url)
  }
}
