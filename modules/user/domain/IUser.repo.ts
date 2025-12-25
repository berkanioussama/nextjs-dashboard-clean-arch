import { User, AddedUser, EditedUser, FindUser, RemoveUser } from "@/modules/user/domain/user.entity";

export interface IUserRepo {
  add(addedUser: AddedUser): Promise<User>
  edit(editedUser: EditedUser): Promise<User>
  findAll(): Promise<User[]>
  findById(id: FindUser): Promise<User>
  remove(id: RemoveUser): Promise<void>
}