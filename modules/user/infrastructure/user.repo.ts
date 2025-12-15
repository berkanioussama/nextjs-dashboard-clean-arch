import { IUserRepo } from "@/modules/user/domain/IUser.repo";
import { NewUser, User, EditUser } from "@/modules/user/domain/user.entity";
import { addApi, editApi, findAllApi, removeApi, findByIdApi } from "@/modules/user/infrastructure/users.api";

export class UserRepo implements IUserRepo {
    constructor() {}

    async add(newUser: NewUser): Promise<User> {
        try {
            const res = await addApi(newUser);
            if (res.status === 'error') {
                throw new Error(res.error)
            }
            return res.data
        } catch (error) {
            throw new Error('Failed to create user')
        }
    }
    async edit({ id, user }: EditUser): Promise<User> {
        try {
            const res = await editApi({ id, user });
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
    
    async findById(id: string): Promise<User> {
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
    async remove(id: string): Promise<void> {
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