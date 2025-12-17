'use server'

import { api } from "@/shared/infrastructure/api"
import { NewUser, EditUser, FindUser, RemoveUser } from "@/modules/user/domain/user.entity"
import { ApiResponse } from "@/shared/infrastructure/api-response"

export async function addApi(user: NewUser): Promise<ApiResponse> {
    const instance = await api()
    const res = await instance.post(`/users`, user)
    return res.data
}

export async function editApi({ id, user }: EditUser): Promise<ApiResponse> {
    const instance = await api()
    const res = await instance.put(`/users/${id}`, user)
    return res.data
}

export async function findAllApi(): Promise<ApiResponse> {
    const instance = await api()
    const res = await instance.get("/users")
    return res.data
}

export async function findByIdApi({userId}: FindUser): Promise<ApiResponse> {
    const instance = await api()
    const res = await instance.get(`/users/${userId}`)
    return res.data
}

export async function removeApi({userId}: RemoveUser): Promise<ApiResponse> {
    const instance = await api()
    const res = await instance.delete(`/users/${userId}`)
    return res.data
}
