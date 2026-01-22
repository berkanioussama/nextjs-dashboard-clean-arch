import { User, AddedUser, EditedUser } from "@/modules/user/domain/user.entity";

export interface IUserRepo {
  add(addedUser: AddedUser): Promise<User>
  edit(editedUser: EditedUser): Promise<User>
  findAll(): Promise<User[]>
  findById(id: string): Promise<User>
  findByProviderId(providerId: string): Promise<User>
  findProfileById(id: string): Promise<void>
  remove(id: string): Promise<void>
}