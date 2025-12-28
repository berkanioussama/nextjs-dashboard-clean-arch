'use server'

import { api } from "@/shared/infrastructure/api"
import { AddedUser, EditedUser, FindUser, FindUserByProvider, RemoveUser } from "@/modules/user/domain/user.entity"
import { ApiResponse } from "@/shared/infrastructure/api-response"

export async function addApi(addedUser: AddedUser): Promise<ApiResponse> {
    const instance = await api()
    const res = await instance.post(`/users`, addedUser)
    return res.data
}

export async function editApi(editedUser: EditedUser): Promise<ApiResponse> {
    const instance = await api()
    const res = await instance.put(`/users/${editedUser.id}`, editedUser)
    return res.data
}

export async function findAllApi(): Promise<ApiResponse> {
    const instance = await api()
    const res = await instance.get("/users")
    return res.data
}

export async function findByIdApi({id}: FindUser): Promise<ApiResponse> {
    const instance = await api()
    const res = await instance.get(`/users/${id}`)
    return res.data
}

export async function findByProviderIdApi({providerId}: FindUserByProvider): Promise<ApiResponse> {
    const instance = await api()
    const res = await instance.get(`/users/providers/${providerId}`)
    return res.data
}

export async function findProfileByProviderIdApi({providerId}: FindUserByProvider): Promise<ApiResponse> {
    const instance = await api()
    const res = await instance.get(`/users/providers/${providerId}/profile`)
    return res.data
}

export async function removeApi({id}: RemoveUser): Promise<ApiResponse> {
    const instance = await api()
    const res = await instance.delete(`/users/${id}`)
    return res.data
}
