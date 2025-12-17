import { IUserRepo } from "@/modules/user/domain/IUser.repo";
import { NewUser, User, EditUser, RemoveUser, FindUser } from "@/modules/user/domain/user.entity";
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
    
    async findById({userId}: FindUser): Promise<User> {
        try {
            const res = await findByIdApi({userId});
            if (res.status === 'error') {
                throw new Error(res.error)
            }

            return res.data
        } catch (error) {
            throw new Error('Failed to find user')
        }
    }
    async remove({userId}: RemoveUser): Promise<void> {
        try {
            const res = await removeApi({userId});

            if (res.status === 'error') {
                throw new Error(res.error)
            }
        } catch (error) {
            throw new Error('Failed to delete user')
        }
    }

}