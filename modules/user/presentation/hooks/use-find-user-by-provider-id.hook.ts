'use client'

import { useQuery } from "@tanstack/react-query"
import { UserRepo } from "@/modules/user/infrastructure/user.repo.impl"
import { FindUserByProviderIdUC } from "@/modules/user/application/find-user-by-provider-id.uc";

export function useFindUserByProviderId(providerId: string) {

    return useQuery({
        queryKey: ['user', providerId],
        queryFn: async () => {
            
            const repo = new UserRepo()
            const findUserByProviderIdUC = new FindUserByProviderIdUC(repo)
            return await findUserByProviderIdUC.execute(providerId)
        },
        enabled: Boolean(providerId),
        staleTime: 1000 * 60,
    })
}