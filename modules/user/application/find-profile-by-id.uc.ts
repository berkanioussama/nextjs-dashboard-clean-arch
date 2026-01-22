import { IUserRepo } from "@/modules/user/domain/IUser.repo"
import { ProfileSchema } from "@/modules/user/domain/user.entity"

export class FindProfileByIdUC {
    constructor( private readonly userRepo: IUserRepo ) {}

    async execute(id: string): Promise<any> {
        const profile = await this.userRepo.findProfileById(id);
        
        const result = ProfileSchema.safeParse(profile)
        if (!result.success) {
            console.log('Profile:', profile)
            console.error('Validation failed:', result.error)
            throw new Error("Invalid response profile data");
        }
        return result.data
    }
}