import { QuoteSchema } from "@/modules/quote/domain/quote.entity";
import { z } from "zod"

export enum Role { USER = "user", ADMIN = "admin" }

export const UserSchema = z.object({
  id: z.string().min(2, { message: "ID must be at least 2 characters." }),
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }).max(100, { message: "First name must not exceed 100 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }).max(100, { message: "Last name must not exceed 100 characters." }),
  providerId: z.string().min(2, { message: "Auth provider ID must be at least 2 characters." }),
  email: z.email({ message: "Invalid email address." }),
  image: z.url(),
  role: z.enum([Role.USER, Role.ADMIN], { message: `Role must be either '${Role.USER}' or '${Role.ADMIN}'` }),
  createdAt: z.string().transform(str => new Date(str)),
  updatedAt: z.string().transform(str => new Date(str)),
})
export type User = z.infer<typeof UserSchema>
export const UsersSchema = z.array(UserSchema);
/*-----*****-----*/

export const ProfileSchema = z.object({
  user: UserSchema,
  quotes: z.array(QuoteSchema),
})
export type Profile = z.infer<typeof ProfileSchema>

/*-----*****-----*/
export const AddedUserSchema = UserSchema.omit({ id: true, role: true, createdAt: true, updatedAt: true });
export type AddedUser = z.infer<typeof AddedUserSchema>
export const AddedUserFormSchema = UserSchema.omit({ id: true, role: true, createdAt: true, updatedAt: true });
export type AddedUserForm = z.infer<typeof AddedUserFormSchema>
/*-----*****-----*/
export const EditedUserSchema = UserSchema.omit({ role: true, createdAt: true, updatedAt: true });
export type EditedUser = z.infer<typeof EditedUserSchema>
export const EditedUserFormSchema = EditedUserSchema.omit({ id: true });
export type EditedUserForm = z.infer<typeof EditedUserFormSchema>