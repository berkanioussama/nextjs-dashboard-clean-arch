'use client'

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserRepo } from "@/modules/user/infrastructure/user.repo";
import { AddUserUC } from "@/modules/user/application/add-user.uc";
import { AddedUser } from "@/modules/user/domain/user.entity";

export function useAddUser() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (addedUser: AddedUser) => {

            const userRepo = new UserRepo()
            const addUserUC = new AddUserUC(userRepo)

            return addUserUC.execute(addedUser)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },
        onError: (error) => {
            console.error(error);
        }
    })
}