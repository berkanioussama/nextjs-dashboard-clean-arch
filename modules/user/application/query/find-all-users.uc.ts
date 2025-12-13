import { IUserRepo } from "@/modules/user/domain/IUser.repo";
import { User, UsersSchema } from "@/modules/user/domain/user.entity";

export class FindAllUsersUC {
    constructor(private readonly userRepo: IUserRepo) {}

    async execute(): Promise<User[]> {
        const users = await this.userRepo.findAll()
        console.log(users)
        const result = UsersSchema.safeParse(users);
        if (!result.success) {
            console.error('Validation failed:', result.error)
            throw new Error("Invalid response users data");
        }
        return result.data
    }
}