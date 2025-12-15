'use client'

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserRepo } from "@/modules/user/infrastructure/user.repo";
import { RemoveUserUC } from "@/modules/user/application/command/remove-user.uc";

export function useRemoveUser() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (id: string) => {
            const userRepo = new UserRepo()
            const removeUserUC = new RemoveUserUC(userRepo)

            return removeUserUC.execute(id)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
        }
    })
}