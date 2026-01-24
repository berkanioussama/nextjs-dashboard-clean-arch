'use client'

import { useQuery } from "@tanstack/react-query"
import { UserRepo } from "@/modules/user/infrastructure/user.repo.impl"
import { FindProfileByIdUC } from "@/modules/user/application/find-profile-by-id.uc"

export function useFindProfileById(id: string) {

    return useQuery({
        queryKey: ['profile', id],
        queryFn: async () => {
            
            const repo = new UserRepo()
            const findProfileByIdUC = new FindProfileByIdUC(repo)
            return await findProfileByIdUC.execute(id)
        },
        enabled: Boolean(id),
        staleTime: 1000 * 60, // 1 minute
        retry: 3,
        retryDelay: 1000,
    })
}