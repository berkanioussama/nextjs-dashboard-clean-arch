'use client'

import { useQuery } from "@tanstack/react-query"
import { UserRepo } from "@/modules/user/infrastructure/user.repo"
import { FindAllUsersUC } from "@/modules/user/application/find-all-users.uc"

export function useFindAllUsers() {

    return useQuery({
        queryKey: ['users'],
        queryFn: async () => {

            const repo = new UserRepo()
            const findAllUsersUC = new FindAllUsersUC(repo)
            const users = await findAllUsersUC.execute()

            if (!users) throw new Error("Users not found")
            return users
        },
        staleTime: 1000 * 60,
    })
}