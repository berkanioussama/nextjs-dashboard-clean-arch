'use client'
import { useAuth } from "@clerk/nextjs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserRepo } from "@/modules/user/infrastructure/user-repo";
import { RemoveUserUC } from "@/modules/user/application/command/remove-user.uc";

export function useRemoveUser() {
    const { getToken } = useAuth();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (id: string) => {
            const token = await getToken()
            if (!token) throw new Error('No authentication token')

            const userRepo = new UserRepo(token)
            const removeUserUC = new RemoveUserUC(userRepo)

            return removeUserUC.execute(id)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
        }
    })
}