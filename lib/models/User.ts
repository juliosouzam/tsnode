import { Schema, model, Document } from 'mongoose'

export interface UserInterface extends Document {
  email?: string;
  firstname?: string;
  lastname?: string;
  fullName(): string;
}

const UserSchema = new Schema(
  {
    email: String,
    firstname: String,
    lastname: String
  },
  {
    timestamps: true
  }
)

UserSchema.methods.fullName = function (): string {
  return this.firstname + ' ' + this.lastname
}

export default model<UserInterface>('User', UserSchema)
