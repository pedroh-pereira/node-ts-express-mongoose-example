import HttpException from './HttpException'

export default class NotFoundException extends HttpException {
  constructor (title: string, message:string) {
    super(404, title, message)
  }
}
