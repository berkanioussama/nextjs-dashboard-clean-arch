'use client'

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserRepo } from "@/modules/user/infrastructure/user.repo";
import { RemoveUserUC } from "@/modules/user/application/command/remove-user.uc";
import { RemoveUser } from "@/modules/user/domain/user.entity";

export function useRemoveUser() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({userId}: RemoveUser) => {
            const userRepo = new UserRepo()
            const removeUserUC = new RemoveUserUC(userRepo)

            removeUserUC.execute({ userId })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
        }
    })
}