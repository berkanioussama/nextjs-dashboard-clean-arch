import { User, NewUser, EditUser } from "@/modules/user/domain/user.entity";

export interface IUserRepo {
  add(user: NewUser): Promise<User>
  edit({id, user}: EditUser): Promise<User>
  findAll(): Promise<User[]>
  findById(id: string): Promise<User>
  remove(id: string): Promise<void>
}