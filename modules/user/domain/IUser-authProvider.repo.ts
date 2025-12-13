import { User } from "./user.entity";

export interface IUserAuthProviderRepo {
    findById(userAuthProviderId: string): Promise<User>
    findProfileById(userAuthProviderId: string): Promise<void>
}