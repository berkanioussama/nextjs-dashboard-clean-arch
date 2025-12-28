import { IUserRepo } from "@/modules/user/domain/IUser.repo";
import { AddedUser, User, EditedUser, RemoveUser, FindUser, FindUserByProvider } from "@/modules/user/domain/user.entity";
import { addApi, editApi, findAllApi, removeApi, findByIdApi, findByProviderIdApi, findProfileByProviderIdApi } from "@/modules/user/infrastructure/users.api";

export class UserRepo implements IUserRepo {
    constructor() {}

    async add(addedUser: AddedUser): Promise<User> {
        try {
            const res = await addApi(addedUser);
            if (res.status === 'error') {
                throw new Error(res.error)
            }
            return res.data
        } catch (error) {
            throw new Error('Failed to create user')
        }
    }

    async edit(editedUser: EditedUser): Promise<User> {
        try {
            const res = await editApi(editedUser);
            if (res.status === 'error') {
                throw new Error(res.error)
            }
            return res.data
        } catch (error) {
            throw new Error('Failed to update user')
        }
    }

    async findAll(): Promise<User[]> {
        try {
            const res = await findAllApi();

            if (res.status === 'error') {
                throw new Error(res.error)
            }

            return res.data
        } catch (error: any) {
            throw new Error("Failed to fetch users: " + error.message);
        }
    }
    
    async findById(id: FindUser): Promise<User> {
        try {
            const res = await findByIdApi(id);
            if (res.status === 'error') {
                throw new Error(res.error)
            }

            return res.data
        } catch (error) {
            throw new Error('Failed to find user')
        }
    }

    async findByProviderId(providerId: FindUserByProvider): Promise<User> {
        try {
            const res = await findByProviderIdApi(providerId);
            if (res.status === 'error') {
                throw new Error(res.error)
            }
            return res.data
        } catch (error) {
            throw new Error("Failed to find user");
        }
    }
    async findProfileByProviderId(providerId: FindUserByProvider): Promise<any> {
        try {
            const res = await findProfileByProviderIdApi(providerId);
            if (res.status === 'error') {
                throw new Error(res.error)
            }
            return res.data
        } catch (error) {
            throw new Error("Failed to find user profile");
        }
    }
    
    async remove(id: RemoveUser): Promise<void> {
        try {
            const res = await removeApi(id);

            if (res.status === 'error') {
                throw new Error(res.error)
            }
        } catch (error) {
            throw new Error('Failed to delete user')
        }
    }

}