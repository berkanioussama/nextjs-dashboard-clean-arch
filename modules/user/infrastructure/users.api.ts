'use server'

import { api } from "@/shared/infrastructure/api"
import { AddedUser, EditedUser } from "@/modules/user/domain/user.entity"
import { ApiResponse } from "@/shared/infrastructure/api-response"

export async function addApi(addedUser: AddedUser): Promise<ApiResponse> {
    const instance = await api()
    const res = await instance.post(`/admin/users`, addedUser)
    return res.data
}

export async function editApi(editedUser: EditedUser): Promise<ApiResponse> {
    const instance = await api()
    const res = await instance.put(`/admin/users/${editedUser.id}`, editedUser)
    return res.data
}

export async function findAllApi(): Promise<ApiResponse> {
    const instance = await api()
    const res = await instance.get("/admin/users")
    return res.data
}

export async function findByIdApi(id: string): Promise<ApiResponse> {
    const instance = await api()
    const res = await instance.get(`/admin/users/${id}`)
    return res.data
}

export async function findByProviderIdApi(providerId: string): Promise<ApiResponse> {
    const instance = await api()
    const res = await instance.get(`/users/providers/${providerId}`)
    return res.data
}

export async function findProfileByIdApi(id: string): Promise<ApiResponse> {
    const instance = await api()
    const res = await instance.get(`/admin/users/${id}/profile`)
    return res.data
}

export async function removeApi(id: string): Promise<ApiResponse> {
    const instance = await api()
    const res = await instance.delete(`/admin/users/${id}`)
    return res.data
}
