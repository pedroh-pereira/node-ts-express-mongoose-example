import { UserDocument } from '@models/user'
import UserService from '@services/user.service'
import { Request, Response } from 'express'

const userService : UserService = new UserService()

async function findAll (_: Request, res: Response): Promise<any> {
  const users: UserDocument[] = await userService.findAll()
  return res.status(200).json(users)
}

async function findById (req: Request, res: Response, next: Function): Promise<Response> {
  try {
    const user: UserDocument = await userService.findById(req?.params?.id)
    return res.status(200).json(user)
  } catch (err: any) {
    next(err)
  }
}

async function save (req: Request, res: Response): Promise<Response> {
  console.log(req.body)
  const newUser: UserDocument = req.body as UserDocument
  const savedUser: UserDocument = await userService.save(newUser)
  return res.status(201).json(savedUser)
}

async function partialUpdate (req: Request, res: Response): Promise<Response> {
  const { name, lastName, email } = req.body as UserDocument
  const savedUser: UserDocument = await userService.partialUpdate(req?.params?.id, { name, lastName, email } as UserDocument)
  return res.status(201).json(savedUser)
}

async function deleteUser (req: Request, res: Response): Promise<Response> {
  await userService.deleteUser(req?.params?.id)
  return res.status(204).json({})
}

export default { create: save, findAll, findById, partialUpdate, deleteUser }
