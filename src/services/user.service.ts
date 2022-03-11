import { UserDocument } from '@models/user'
import UserRepository from '@repositories/user.repository'
import NotFoundException from '~/exceptions/NotFoundException'

export default class UserService {
  private readonly userRepository: UserRepository
  constructor () {
    this.userRepository = new UserRepository()
  }

  async save (newUser: UserDocument) : Promise<UserDocument> {
    this.validateEmail(newUser?.email)
    return this.userRepository.save(newUser)
  }

  async findAll (): Promise<UserDocument[]> {
    return this.userRepository.findAll()
  }

  async findById (id: string): Promise<UserDocument> {
    const user: UserDocument = await this.userRepository.findById(id)
    if (!user) {
      throw new NotFoundException('Usuário não encontrado', `O usuário com id: ${id} não foi encontrado`)
    }
    return user
  }

  async partialUpdate (userId: string, user: UserDocument): Promise<UserDocument> {
    return this.userRepository.partialUpdate(userId, user)
  }

  async deleteUser (userId: string):Promise<void> {
    return this.userRepository.deleteUser(userId)
  }

  private validateEmail (email: string) {
    const domainEmail: string = email?.split('@')[1]
    if (domainEmail !== 'sensedia.com') {
      throw new Error('Domínio do e-mail não pertence a Sensedia')
    }
  }
}
