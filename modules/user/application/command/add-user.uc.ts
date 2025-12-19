import { IUserRepo } from "@/modules/user/domain/IUser.repo";
import { User, NewUser, UserSchema, AddUserSchema } from "@/modules/user/domain/user.entity";

export class AddUserUC {
    constructor(private userRepo: IUserRepo) {}

    async execute(input: NewUser): Promise<User> {
        const validatedUser = AddUserSchema.safeParse(input)
        if (!validatedUser.success) {
            console.error('Validation failed:', validatedUser.error)
            throw new Error("Invalid add user data");
        }

        const newUser = await this.userRepo.add(validatedUser.data)

        const result = UserSchema.safeParse(newUser)
        if (!result.success) {
            console.error('Validation failed:', result.error)
            throw new Error("Invalid response user data");
        }
        return result.data
    }
}