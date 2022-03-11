export default abstract class HttpException extends Error {
  readonly code: number
  readonly title: string

  constructor (code: number, title: string, message:string) {
    super(message)
    this.code = code
    this.title = title
  }
}
