import { IUserRepo } from "@/modules/user/domain/IUser.repo";

export class RemoveUserUC {
    constructor(private userRepo: IUserRepo) {}

    async execute(id: string): Promise<void> {
        if (!id) throw new Error("User ID is required.")
            
        await this.userRepo.remove(id)
    }
}