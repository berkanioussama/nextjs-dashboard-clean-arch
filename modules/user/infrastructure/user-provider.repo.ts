import { IUserProviderRepo } from "@/modules/user/domain/IUser-provider.repo"
import { FindUserByProvider, User } from "@/modules/user/domain/user.entity"
import { findByProviderIdApi, findProfileByProviderIdApi } from "@/modules/user/infrastructure/users-provider.api"

export class UserProviderRepo implements IUserProviderRepo {
    constructor() {}

    async findById({ providerId }: FindUserByProvider): Promise<User> {
        try {
            const res = await findByProviderIdApi({ providerId });
            if (res.status === 'error') {
                throw new Error(res.error)
            }
            return res.data
        } catch (error) {
            throw new Error("Failed to find user");
        }
    }
    async findProfileById({ providerId }: FindUserByProvider): Promise<any> {
        try {
            const res = await findProfileByProviderIdApi({ providerId });
            if (res.status === 'error') {
                throw new Error(res.error)
            }
            return res.data
        } catch (error) {
            throw new Error("Failed to find user profile");
        }
    }
}