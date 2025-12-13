'use client'

import { useAuth } from "@clerk/nextjs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserRepo } from "@/modules/user/infrastructure/user-repo";
import { AddUserUC } from "@/modules/user/application/command/add-user.uc";
import { NewUser } from "@/modules/user/domain/user.entity";

export function useAddUser() {
    const { getToken } = useAuth();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (user: NewUser) => {
            const token = await getToken()
            if (!token) throw new Error('No authentication token')

            const userRepo = new UserRepo(token)
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