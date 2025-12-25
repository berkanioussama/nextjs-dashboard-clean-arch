'use client'

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EditedUser } from "@/modules/user/domain/user.entity";
import { EditUserUC } from "@/modules/user/application/edit-user.uc";
import { UserRepo } from "@/modules/user/infrastructure/user.repo";

export const useEditUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (editedUser: EditedUser) => {

            const userRepo = new UserRepo()
            const editUserUC = new EditUserUC(userRepo)

            return editUserUC.execute(editedUser)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },
        onError: (error) => {
            console.error(error);
        }
    })
}