import User, { UserDocument } from '@models/user'

export default class UserRepository {
  async save (newUser: UserDocument): Promise<UserDocument> {
    return User.create(newUser)
  }

  async findAll (): Promise<UserDocument[]> {
    return User.find()
  }

  async findById (id: string): Promise<UserDocument> {
    return User.findOne({ _id: id })
  }

  async partialUpdate (userId: string, user: UserDocument): Promise<UserDocument> {
    return User.findByIdAndUpdate(userId, user, {
      new: true
    })
  }

  async deleteUser (userId: string): Promise<void> {
    return User.findByIdAndDelete(userId)
  }
}
