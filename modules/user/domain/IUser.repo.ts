import { User, NewUser, EditUser, FindUser, RemoveUser } from "@/modules/user/domain/user.entity";

export interface IUserRepo {
  add(user: NewUser): Promise<User>
  edit({id, user}: EditUser): Promise<User>
  findAll(): Promise<User[]>
  findById({userId}: FindUser): Promise<User>
  remove({userId}: RemoveUser): Promise<void>
}