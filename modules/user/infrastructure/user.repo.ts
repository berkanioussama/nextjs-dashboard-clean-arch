import { IUserRepo } from "@/modules/user/domain/IUser.repo";
import { AddedUser, User, EditedUser } from "@/modules/user/domain/user.entity";
import { addApi, editApi, findAllApi, removeApi, findByIdApi, findByProviderIdApi, findProfileByIdApi } from "@/modules/user/infrastructure/users.api";

export class UserRepo implements IUserRepo {
    constructor() {}

    async add(addedUser: AddedUser): Promise<User> {
        try {
            const res = await addApi(addedUser);
            if (res.error) {
                throw new Error(res.error)
            }
            return res.data
        } catch (error: any) {
            throw new Error('Failed to create user: ' + error.message)
        }
    }

    async edit(editedUser: EditedUser): Promise<User> {
        try {
            const res = await editApi(editedUser);
            if (res.error) {
                throw new Error(res.error)
            }
            return res.data
        } catch (error: any) {
            throw new Error('Failed to update user: ' + error.message)
        }
    }

    async findAll(): Promise<User[]> {
        try {
            const res = await findAllApi();

            if (res.error) {
                throw new Error(res.error)
            }

            return res.data
        } catch (error: any) {
            throw new Error("Failed to fetch users: " + error.message);
        }
    }
    
    async findById(id: string): Promise<User> {
        try {
            const res = await findByIdApi(id);
            if (res.error) {
                throw new Error(res.error)
            }

            return res.data
        } catch (error: any) {
            throw new Error('Failed to find user: ' + error.message)
        }
    }

    async findByProviderId(providerId: string): Promise<User> {
        try {
            const res = await findByProviderIdApi(providerId);
            if (res.error) {
                throw new Error(res.error)
            }
            return res.data
        } catch (error: any) {
            throw new Error("Failed to find user: " + error.message);
        }
    }
    async findProfileById(id: string): Promise<any> {
        try {
            const res = await findProfileByIdApi(id);
            if (res.error) {
                throw new Error(res.error)
            }
            return res.data
        } catch (error: any) {
            throw new Error("Failed to find user profile: " + error.message);
        }
    }
    
    async remove(id: string): Promise<void> {
        try {
            const res = await removeApi(id);

            if (res.error) {
                throw new Error(res.error)
            }
        } catch (error: any) {
            throw new Error('Failed to delete user: ' + error.message)
        }
    }

}