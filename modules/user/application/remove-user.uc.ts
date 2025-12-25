import { IUserRepo } from "@/modules/user/domain/IUser.repo";
import { RemoveUser } from "@/modules/user/domain/user.entity";

export class RemoveUserUC {
    constructor(private userRepo: IUserRepo) {}

    async execute({ id }: RemoveUser): Promise<void> {
        if (!id) throw new Error("User ID is required.")
            
        await this.userRepo.remove({ id })
    }
}