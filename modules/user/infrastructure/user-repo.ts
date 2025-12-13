import { IUserRepo } from "@/modules/user/domain/IUser.repo";
import { NewUser, User, EditUser } from "@/modules/user/domain/user.entity";
import { api } from "@/shared/infrastructure/api";

export class UserRepo implements IUserRepo {
    constructor(private token: string) {
        if (!token) throw new Error("No authentication token provided")
    }

    async add(newUser: NewUser): Promise<User> {
        try {
            const instance = await api(this.token)
            const res = await instance.post("/users", newUser)
            if (res.data.status === 'error') {
                throw new Error(res.data.error)
            }

            return res.data.data
        } catch (error) {
            throw new Error('Failed to create user')
        }
    }
    async edit({ id, user }: EditUser): Promise<User> {
        try {
            const instance = await api(this.token)
            const res = await instance.put(`/users/${id}`, user)
            if (res.data.status === 'error') {
                throw new Error(res.data.error)
            }

            return res.data.data
        } catch (error) {
            throw new Error('Failed to update user')
        }
    }
    async findAll(): Promise<User[]> {
        try {
            const instance = await api(this.token)
            const res = await instance.get("/users")

            if (res.data.status === 'error') {
                throw new Error(res.data.error)
            }

            return res.data.data
        } catch (error: any) {
            throw new Error("Failed to fetch users: " + error.message);
        }
    }
    
    async findById(id: string): Promise<User> {
        try {
            const instance = await api(this.token)
            const res = await instance.get(`/users/${id}`)
            if (res.data.status === 'error') {
                throw new Error(res.data.error)
            }

            return res.data.data
        } catch (error) {
            throw new Error('Failed to find user')
        }
    }
    async remove(id: string): Promise<void> {
        try {
            const instance = await api(this.token)
            const res = await instance.delete(`/users/${id}`)

            if (res.data.status === 'error') {
                throw new Error(res.data.error)
            }
        } catch (error) {
            throw new Error('Failed to delete user')
        }
    }

}