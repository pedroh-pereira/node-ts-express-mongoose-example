import { Schema, model } from 'mongoose'

export type UserDocument = {
  _id: String;
  name: string;
  lastName: string;
  genre: string;
  age: number;
  email: string;
}

export const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  genre: { type: String, required: true },
  age: { type: Number, required: true },
  email: {
    type: String,
    required: true,
    unique: true
  }
})

export default model<UserDocument>('User', UserSchema)
