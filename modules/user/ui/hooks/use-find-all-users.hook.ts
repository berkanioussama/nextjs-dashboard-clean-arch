'use client'
import { useAuth } from "@clerk/nextjs"
import { useQuery } from "@tanstack/react-query"
import { UserRepo } from "@/modules/user/infrastructure/user-repo"
import { FindAllUsersUC } from "@/modules/user/application/query/find-all-users.uc"

export function useFindAllUsers() {
    const { getToken } = useAuth();

    return useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const token = await getToken()
            if (!token) throw new Error("No authentication token")

            const repo = new UserRepo(token)
            const findAllUsersUC = new FindAllUsersUC(repo)
            const users = await findAllUsersUC.execute()

            if (!users) throw new Error("Users not found")
            return users
        },
        staleTime: 1000 * 60,
    })
}