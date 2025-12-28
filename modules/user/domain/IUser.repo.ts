import { User, AddedUser, EditedUser, FindUser, RemoveUser, FindUserByProvider } from "@/modules/user/domain/user.entity";

export interface IUserRepo {
  add(addedUser: AddedUser): Promise<User>
  edit(editedUser: EditedUser): Promise<User>
  findAll(): Promise<User[]>
  findById(id: FindUser): Promise<User>
  findByProviderId(providerId: FindUserByProvider): Promise<User>
  findProfileByProviderId(providerId: FindUserByProvider): Promise<void>
  remove(id: RemoveUser): Promise<void>
}