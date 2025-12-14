'use client'

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserRepo } from "@/modules/user/infrastructure/user-repo";
import { AddUserUC } from "@/modules/user/application/command/add-user.uc";
import { NewUser } from "@/modules/user/domain/user.entity";

export function useAddUser() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (user: NewUser) => {

            const userRepo = new UserRepo()
            const addUserUC = new AddUserUC(userRepo)

            return addUserUC.execute(user)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },
        onError: (error) => {
            console.error(error);
        }
    })
}