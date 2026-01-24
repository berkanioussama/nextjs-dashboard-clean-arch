import { IUserRepo } from "@/modules/user/domain/IUser.repo";
import { AddedUser, User, EditedUser } from "@/modules/user/domain/user.entity";
import { BaseRepo } from "@/shared/infrastructure/base.repo.impl";

export class UserRepo extends BaseRepo implements IUserRepo {

    async add(addedUser: AddedUser): Promise<User> {
        try {
            const res = await this.POST('/admin/users', addedUser);
            return this.handleResponse(res);
        } catch (error: any) {
            throw new Error('Failed to create user: ' + error.message)
        }
    }

    async edit(editedUser: EditedUser): Promise<User> {
        try {
            const res = await this.PUT(`/admin/users/${editedUser.id}`, editedUser);
            return this.handleResponse(res);
        } catch (error: any) {
            throw new Error('Failed to update user: ' + error.message)
        }
    }

    async findAll(): Promise<User[]> {
        try {
            const res = await this.GET('/admin/users');
            return this.handleResponse(res);
        } catch (error: any) {
            throw new Error("Failed to fetch users: " + error.message);
        }
    }
    
    async findById(id: string): Promise<User> {
        try {
            const res = await this.GET(`/admin/users/${id}`);
            return this.handleResponse(res);
        } catch (error: any) {
            throw new Error('Failed to find user: ' + error.message)
        }
    }

    async findByProviderId(providerId: string): Promise<User> {
        try {
            const res = await this.GET(`/users/providers/${providerId}`);
            return this.handleResponse(res);
        } catch (error: any) {
            throw new Error("Failed to find user: " + error.message);
        }
    }
    async findProfileById(id: string): Promise<any> {
        try {
            const res = await this.GET(`/admin/users/${id}/profile`);
            return this.handleResponse(res);
        } catch (error: any) {
            throw new Error("Failed to find user profile: " + error.message);
        }
    }
    
    async remove(id: string): Promise<void> {
        try {
            const res = await this.DELETE(`/admin/users/${id}`);
            this.handleResponse(res);
        } catch (error: any) {
            throw new Error('Failed to delete user: ' + error.message)
        }
    }
}