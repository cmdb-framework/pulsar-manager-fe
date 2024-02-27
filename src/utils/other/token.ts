export default class Token {
  static setToken(token: string): void {
    localStorage.setItem('PMToken', token)
  }
  static getToken(): string | null {
    return localStorage.getItem('PMToken')
  }
}
